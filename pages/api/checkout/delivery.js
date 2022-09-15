import { apiRouter } from '@/server/lib/api-router';
import { cookie } from '@/server/constants/cookies';
import { changeDeliveryProvider } from '@/server/api/checkout.api';

const verbs = {
  async post(req, res) {
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const { id } = req.body || {};
    if (!id) {
      return res.status(400).json({ sucesso: false, erros: ['falha ao alterar opção de entrega'] });
    }

    const result = await changeDeliveryProvider(sessionId, id);

    if (result.ok) {
      return res.status(200).json(result);
    }

    return res.status(400).json(result);
  },
};

const routes = apiRouter(verbs);

export default routes;
