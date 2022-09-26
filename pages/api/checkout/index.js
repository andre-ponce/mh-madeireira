import { apiRouter } from '@/server/lib/api-router';
import { cookie } from '@/server/constants/cookies';
import { getCheckoutSession, finalize } from '@/server/api/checkout.api';

const verbs = {
  async get(req, res) {
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const [checkout, status] = await getCheckoutSession(sessionId);
    if (!status.ok) {
      return res.badRequest();
    }

    return res.ok(checkout);
  },

  async post(req, res) {
    const { cookies, body } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const [checkout, status] = await finalize(sessionId, body);

    if (!status.ok) {
      return res.badRequest();
    }

    return res.ok(checkout);
  },
};

const routes = apiRouter(verbs);

export default routes;
