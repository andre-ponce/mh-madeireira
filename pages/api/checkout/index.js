import { apiRouter } from '@/server/lib/api-router';
import { cookie } from '@/server/constants/cookies';
import { getCheckoutSession, finalize } from '@/server/api/checkout.api';

const verbs = {
  async get(req, res) {
    const { cookies, query: { p: paymentId } } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const { error, ...checkout } = await getCheckoutSession(sessionId, paymentId);
    if (error) {
      res.status(400).end();
      return;
    }

    result.ok(checkout);
  },

  async post(req, res) {
    const { cookies, body } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const [checkout, status] = await finalize(sessionId, body);

    if (!status.ok) {
      result.badRequest();
      return;
    }

    result.ok(checkout);
  },
};

const routes = apiRouter(verbs);

export default routes;
