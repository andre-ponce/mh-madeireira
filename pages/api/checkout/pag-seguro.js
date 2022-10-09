import { apiRouter } from '@/server/lib/api-router';
import { initPagSeguroSession } from '@/server/api/checkout.api';

const verbs = {
  async get(req, res) {
    const [data, status] = await initPagSeguroSession();

    if (!status.ok) {
      return res.badRequest();
    }

    return res.ok(data);
  },
};

const routes = apiRouter(verbs);

export default routes;
