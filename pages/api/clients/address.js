import { apiRouter } from '@/server/lib/api-router';
import { cookie } from '@/server/constants/cookies';
import { createAddress, getAddress, updateAddress } from '@/server/api/address.api';

const verbs = {
  async get(req, res) {
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];

    if (!sessionId) {
      return res.badRequest();
    }

    const [address, { ok, notFound }] = await getAddress(sessionId);

    if (ok) {
      return res.ok(address);
    }

    if (notFound) {
      return res.notFound();
    }

    return res.serverError();
  },

  async post(req, res) {
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const address = req.body;
    if (!address) {
      return res.badRequest({ erros: ['falha ao salvar endereço, por favor, contate nosso suporte'] });
    }

    let serviceRes;
    if (!address.id) {
      serviceRes = await createAddress(sessionId, address);
    } else {
      serviceRes = await updateAddress(sessionId, address);
    }

    const [data, result] = serviceRes;

    if (result.ok) {
      return res.ok(data);
    }

    return res.badRequest(data);
  },

};

const routes = apiRouter(verbs);

export default routes;
