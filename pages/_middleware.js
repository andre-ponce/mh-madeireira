import { NextResponse } from 'next/server';
import { isEmpty } from 'lodash';
import { cookie as CONSTANT } from '@/server/constants/cookies';
import { createFreshSession, refreshSession } from '@/server/api/session.api';

const middlewares = [];

/**
 * Create a pipeline to isolate the scope of each Middleware
 * The middlewares must be registered at /middlewares/index.js
 * @param {NextRequest} request - The middleware request
 * @param {NextResponse} response - A initial response object
 * @param {NextFetchEvent} event - The middleware event
 * @return { NextResponse | Response | undefined | null }
*/
async function executeMiddlewares(request, response, event) {
  let currentResponse = response;
  // eslint-disable-next-line no-restricted-syntax
  for (const fn of middlewares) {
    try {
      const res = fn(request, currentResponse, event);
      // eslint-disable-next-line no-await-in-loop
      const middlewareResponse = await Promise.resolve(res);

      if (middlewareResponse) {
        if (middlewareResponse.abort) {
          return middlewareResponse.response || currentResponse;
        }
        currentResponse = middlewareResponse;
      }
    } catch (err) {
      throw process.env.production ? Error() : err;
    }
  }

  return currentResponse;
}

const {
  session: {
    COOKIE_NAME: SESSION_COOKIE_NAME,
    OPTIONS: SESSION_COOKIE_OPT,
  },
} = CONSTANT;

async function useSessionCookieMiddleware(req, res) {
  const {
    geo,
    ip,
    ua,
    cookies,
  } = req;

  if (ua.isBot) {
    return res;
  }

  const currentSession = cookies[SESSION_COOKIE_NAME];
  let sessionId = currentSession;

  try {
    if (isEmpty(currentSession)) {
      const session = await createFreshSession(ip, ua, geo);
      sessionId = session.sessionId;
    } else {
      const { valida } = await refreshSession(currentSession, ip, ua, geo);
      if (!valida) {
        const session = await createFreshSession(ip, ua, geo);
        sessionId = session.sessionId;
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(`Erro ao criar sessão: ${err}`);
  }

  if (isEmpty(sessionId)) {
    return NextResponse.error();
  }

  if (sessionId !== currentSession) {
    res.cookie(SESSION_COOKIE_NAME, sessionId, SESSION_COOKIE_OPT);
  }

  return res;
}

useSessionCookieMiddleware.middlewareName = 'addSessionCookie';

middlewares.push(({ page: { name } }, res) => {
  if (!name) {
    return { abort: true };
  }
  return res;
});

middlewares.push(useSessionCookieMiddleware);

export async function middleware(req, ev) {
  const initialResponse = NextResponse.next();
  const finalResponse = await executeMiddlewares(req, initialResponse, ev);
  return finalResponse;
}
