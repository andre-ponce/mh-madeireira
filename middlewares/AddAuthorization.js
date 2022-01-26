import { NextResponse } from 'next/server'
import { cookie as CONSTANT } from '../constants/cookies'

const {
  auth: {
    COOKIE_NAME: SESSION_AUTH_NAME
  }
} = CONSTANT;

const internalPages = [
  /^\/minha-conta/,
  /^\/checkout/,
]

const loginPage = /^login/;

function AddAuthorization(req, res, ev) {

  const shouldBeLogged = internalPages.some(rgx => rgx.test(req.page.name));
  const isLogged = !!req.cookies[SESSION_AUTH_NAME];
  const isInLogin = loginPage.test(req.page.name);

  if (shouldBeLogged && !isLogged && !isInLogin) {
    return {
      abort: true,
      response: NextResponse.redirect(`/login?returnUrl=${encodeURIComponent(req.url)}`)
    }
  }

  if (isInLogin && isLogged) {
    const { returnUrl } = req.page.params;

    return {
      abort: true,
      response: NextResponse.redirect(returnUrl || '/')
    }
  }

  return res;
}

export default AddAuthorization
