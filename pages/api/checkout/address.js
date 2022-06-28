import { verbsRouter } from '@/server/lib/verbs-api-router';
import { cookie } from '@/server/constants/cookies';
import { changeDeliveryAddress } from '@/server/api/checkout.api';

const verbs = {
  async post(req, res) {
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const { id } = req.body || {};
    if (!id) {
      return res.status(400).json({ sucesso: false, erros: ['falha ao alterar o endereço de entrega'] });
    }

    const result = await changeDeliveryAddress(sessionId, id);

    if (result.success) {
      return res.status(200).json(result);
    }

    return res.status(400).json(result);
  },
};

const routes = verbsRouter(verbs);

export default routes;
