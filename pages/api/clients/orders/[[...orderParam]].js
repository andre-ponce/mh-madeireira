import { apiRouter } from '@/server/lib/api-router';
import { cookie } from '@/server/constants/cookies';
import { getOrderDetailed, getOrderPayment, getOrders } from '@/server/api/orders.api';

const verbs = {
  async get(req, res) {
    const { cookies, query } = req;
    const orderParam = query.orderParam || [];
    let code;
    let path;
    if (orderParam.length > 0) [code] = orderParam;
    if (orderParam.length > 1) [, path] = orderParam;

    const sessionId = cookies[cookie.session.COOKIE_NAME];
    if (!sessionId) {
      return res.badRequest();
    }

    if (!code) {
      const [orders, { ok, notFound }] = await getOrders(sessionId);

      if (ok) {
        return res.ok(orders.data);
      }

      if (notFound) {
        return res.notFound({ cause: 'server' });
      }

      return res.serverError();
    }

    if (path === 'detailed') {
      const [order, { ok, notFound }] = await getOrderDetailed(code, sessionId);

      if (ok) {
        return res.ok(order.data);
      }

      if (notFound) {
        return res.notFound();
      }

      return res.serverError();
    }

    if (path === 'payment') {
      const [payment, { ok, notFound }] = await getOrderPayment(code, sessionId);

      if (ok) {
        return res.ok(payment.data || {});
      }

      if (notFound) {
        return res.notFound();
      }

      return res.serverError();
    }

    return res.notFound();
  },
};

const routes = apiRouter(verbs);

export default routes;
