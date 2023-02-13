/* eslint-disable no-console */
import { NextResponse, userAgent } from 'next/server';
import { cookie as CONSTANT } from '@/server/constants/cookies';
import { createFreshSession } from '@/server/api/session.api';

const middlewares = [];
const {
  session: {
    COOKIE_NAME: SESSION_COOKIE_NAME,
    OPTIONS: SESSION_COOKIE_OPT,
  },
} = CONSTANT;

/**
 * Create a pipeline to isolate the scope of each Middleware
 * The middlewares must be registered at /middlewares/index.js
 * @param {NextRequest} request - The middleware request
 * @param {NextResponse} response - A initial response object
 * @param {NextFetchEvent} event - The middleware event
 * @return { NextResponse | Response | undefined | null }
*/
async function executeMiddlewares(request) {
  const executionResponse = middlewares
    .reduce(async (prevResponse, middlewareFn) => {
      const currentResponse = await prevResponse;
      if (currentResponse.abort) {
        console.log('aborting middlewares...');
        return currentResponse.response;
      }
      try {
        const res = await middlewareFn(request, currentResponse);
        return res || currentResponse;
      } catch (err) {
        throw process.env.production ? Error() : err;
      }
    }, NextResponse.next());

  if (executionResponse.abort) {
    return executionResponse.response || NextResponse.next();
  }

  return executionResponse;
}

async function useSessionCookieMiddleware(req, res) {
  const { geo, ip, cookies } = req;
  const ua = userAgent(req);
  if (ua.isBot) {
    return res;
  }

  const currentSession = cookies.get(SESSION_COOKIE_NAME);
  let sessionId = currentSession;

  try {
    if (!currentSession) {
      const session = await createFreshSession(ip, ua, geo);
      console.warn(`>>>>>>>>>> Nova sessão: ${session.sessionId}`);
      sessionId = session.sessionId;
    }
  } catch (err) {
    console.error('Falha ao gerar nova sessão:', err);
  }

  if (!sessionId) {
    return NextResponse.error();
  }

  if (sessionId !== currentSession) {
    res.cookies.set(SESSION_COOKIE_NAME, sessionId, SESSION_COOKIE_OPT);
  }

  return res;
}

useSessionCookieMiddleware.middlewareName = 'addSessionCookie';
middlewares.push(useSessionCookieMiddleware);

export async function middleware(req, ev) {
  const initialResponse = NextResponse.next();
  const finalResponse = await executeMiddlewares(req, initialResponse, ev);
  return finalResponse || initialResponse;
}
