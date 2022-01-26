
export const cookie = {
  session: {
    COOKIE_NAME: "mw_s",
    OPTIONS: {
      path: '/',
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: 'strict'
    }
  },
  cart: {
    COOKIE_NAME: "mw_c",
    OPTIONS: {
      path: '/',
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: 'strict'
    }
  },
  auth: {
    COOKIE_NAME: "mw_u",
    OPTIONS: {
      path: '/',
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: 'strict'
    }
  },
}
