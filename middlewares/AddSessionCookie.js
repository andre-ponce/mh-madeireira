import { isEmpty } from 'lodash';
import { cookie as CONSTANT } from '../constants/cookies'
import { createFreshSession, validateSession } from '../lib/session';

const {
  session: {
    COOKIE_NAME: SESSION_COOKIE_NAME,
    OPTIONS: SESSION_COOKIE_OPT
  }
} = CONSTANT;

async function addSessionCookie(req, res) {
  const { geo, ip, ua, cookies } = req;

  if (ua.isBot) {
    return res;
  }

  if (!req.page.name) {
    return res;
  }

  const currentSession = cookies[SESSION_COOKIE_NAME];

  const { sessionId } = isEmpty(currentSession)
    ? createFreshSession(ip, ua, geo)
    : validateSession(currentSession, ip, ua, geo);

  res.cookie(
    SESSION_COOKIE_NAME
    , sessionId
    , SESSION_COOKIE_OPT
  );

  return res;
}

addSessionCookie.middlewareName = 'addSessionCookie';
export default addSessionCookie;
