import { verbsRouter } from '@/server/lib/verbs-api-router';
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

    res.json(checkout);
  },

  async post(req, res) {
    const { cookies, body } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const { error, ...checkout } = await finalize(sessionId, body);

    if (error) {
      res.status(400).end();
      return;
    }

    res.json(checkout);
  },
};

const routes = verbsRouter(verbs);

export default routes;
