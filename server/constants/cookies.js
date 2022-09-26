const defaultCookieOptions = {
  path: '/',
  maxAge: 1000 * 60 * 60 * 24 * 7,
  httpOnly: true,
  sameSite: 'strict',
  secure: true,
};

export const cookie = {
  session: {
    COOKIE_NAME: 'mw_s',
    OPTIONS: {
      ...defaultCookieOptions,
      maxAge: 60 * 60 * 24 * 365 * 5,
    },
  },
};
