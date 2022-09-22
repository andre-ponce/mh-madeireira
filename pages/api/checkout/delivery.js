import { apiRouter } from '@/server/lib/api-router';
import { cookie } from '@/server/constants/cookies';
import { changeDeliveryProvider } from '@/server/api/checkout.api';

const verbs = {
  async post(req, res) {
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const { id } = req.body || {};
    if (!id) {
      return res.badRequest({ erros: ['falha ao alterar opção de entrega'] });
    }

    const [data, status] = await changeDeliveryProvider(sessionId, id);
    if (!status.ok) {
      return res.badRequest();
    }

    return res.ok(data);
  },
};

const routes = apiRouter(verbs);

export default routes;
