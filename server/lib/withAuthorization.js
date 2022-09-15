import { linkTo } from '@/helpers';
import { cookie as CONSTANT } from '../constants/cookies';
import { getUser } from '../api/user.api';
import { logger } from '../logger';

const { session: { COOKIE_NAME } } = CONSTANT;

/**
 * Checks if the user is logged in, and redirect to the login page if not
 * Inject the user in the ctx
 * @param {Function} fn - The ServerSideProps function a empty function by default
 * @returns The ServerSideProps function with the user in the ctx
 */
export const withAuthorization = (fn) => async (context) => {
  const { req: { cookies }, resolvedUrl } = context;
  const session = cookies[COOKIE_NAME];
  const [user, status] = await getUser(session);

  if (status.unauthorized) {
    logger.debug(`Autentication required, redirecting to login (${resolvedUrl}).`);
    return {
      redirect: {
        permanent: false,
        destination: linkTo.login(resolvedUrl),
      },
      props: {},
    };
  }

  context.user = user;
  context.session = session;

  if (fn && typeof fn === 'function') {
    return fn(context);
  }

  return { props: {} };
};

export const tryAuthorization = async (context) => {
  const { req: { cookies } } = context;
  const session = cookies[COOKIE_NAME];
  const [user, status] = await getUser(session);

  if (status.ok) {
    return user;
  }

  return null;
};
