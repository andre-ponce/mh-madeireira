import { apiRouter } from '@/server/lib/api-router';
import { cookie } from '@/server/constants/cookies';
import { changeDeliveryProvider } from '@/server/api/checkout.api';

const verbs = {
  async post(req, res) {
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const {
      siglaProvider,
      retirarNaLoja,
      cepSimulador,
    } = req.body || {};

    const [data, status] = await changeDeliveryProvider(sessionId,
      { siglaProvider, retirarNaLoja, cepSimulador });

    if (!status.ok) {
      return res.badRequest();
    }

    return res.ok(data);
  },
};

const routes = apiRouter(verbs);

export default routes;
