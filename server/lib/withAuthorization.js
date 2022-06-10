import { linkTo } from '@/helpers';
import { cookie as CONSTANT } from '../constants/cookies';
import { getUser } from '../api/user.api';

const { session: { COOKIE_NAME } } = CONSTANT;

/**
 * Checks if the user is logged in, and redirect to the login page if not
 * Inject the user in the ctx
 * @param {Function} fn - The ServerSideProps function a empty function by default
 * @returns The ServerSideProps function with the user in the ctx
 */
export const withAuthorization = (fn) => async (context) => {
  const { req: { cookies, url } } = context;
  const sessionToken = cookies[COOKIE_NAME];
  const user = await getUser(sessionToken);

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: linkTo.login(url),
      },
      props: {},
    };
  }

  context.user = user;

  if (fn && typeof fn === 'function') {
    return fn(context);
  }

  return { props: {} };
};
