/* eslint-disable no-console */
import { cookie } from '../constants/cookies';
import { InvalidSessionError } from '../errors/InvalidSessionError';

function helper(req, res) {
  const generic = (response, data, status) => {
    let result = response.status(status);

    if (data) {
      result = result.json(data);
    } else {
      result = result.send();
    }

    return result;
  };

  return {
    result: {
      ok: (data) => generic(res, data, 200),
      created: (data) => generic(res, data, 201),
      noContent: () => generic(res, null, 204),
      badRequest: (data) => generic(res, data, 400),
      unauthorized: (data) => generic(res, data, 401),
      forbidden: (data) => generic(res, data, 403),
      notFound: (data) => generic(res, data, 404),
      serverError: (data) => generic(res, data, 500),
    },
  };
}

function extendResponseWithHelpers(res, { result }) {
  res.ok = result.ok;
  res.created = result.created;
  res.noContent = result.noContent;
  res.badRequest = result.badRequest;
  res.unauthorized = result.unauthorized;
  res.forbidden = result.forbidden;
  res.notFound = result.notFound;
  res.serverError = result.serverError;
  return res;
}

export function apiRouter(router) {
  const verbs = Object.keys(router)
    .map((verb) => verb.toLowerCase())
    .filter((verb) => ['get', 'post', 'put', 'delete', 'patch'].includes(verb))
    .reduce((current, verb) => ({ ...current, [verb]: router[verb] }), {});

  return async (req, res) => {
    const method = req.method.toLowerCase();
    const route = verbs[method];
    if (!route || typeof route !== 'function') {
      return res.status(405).end();
    }

    const utils = helper(req, res);
    extendResponseWithHelpers(res, utils);

    try {
      return await route.call({ ...utils.result }, req, res, utils);
    } catch (err) {
      if (err instanceof InvalidSessionError) {
        console.warn('\n\n\n\n\n***** Invalidando SESSÃO *****');
        res.setHeader('set-cookie', `${cookie.session.COOKIE_NAME}=; path=/; samesite=strict; httponly; maxAge=0; secure;`);
        console.error(err);
        console.warn('\n\n\n\n\n');
      }

      if (process.env.NODE_ENV === 'development') {
        return res.serverError(err);
      }

      return res.serverError();
    }
  };
}
