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

    const { data: address, ok, notFound } = await getAddress(sessionId);

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
      return res.status(400).json({ sucesso: false, erros: ['falha ao salvar endereço, por favor, contate nosso suporte'] });
    }

    const result = await createAddress(sessionId, address);

    if (!result.falha) {
      return res.status(200).json(result);
    }

    return res.status(400).json(result);
  },

  async put(req, res) {
    const address = req.body;
    if (!address) {
      return res.status(400).json({ sucesso: false, erros: ['falha ao salvar endereço, por favor, contate nosso suporte'] });
    }

    const result = await updateAddress(address);

    if (!result.falha) {
      return res.status(200).json(result);
    }

    return res.status(400).json(result);
  },
};

const routes = apiRouter(verbs);

export default routes;
