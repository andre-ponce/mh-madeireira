import { apiRouter } from '@/server/lib/api-router';
import { cookie } from '@/server/constants/cookies';
import { changeDeliveryAddress } from '@/server/api/checkout.api';

const verbs = {
  async post(req, res) {
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const { id } = req.body || {};
    if (!id) {
      return res.badRequest({ erros: ['falha ao alterar o endereço de entrega'] });
    }

    const [data, status] = await changeDeliveryAddress(sessionId, id);
    if (!status.ok) {
      return res.badRequest(data);
    }

    return res.ok(data);
  },
};

const routes = apiRouter(verbs);

export default routes;
