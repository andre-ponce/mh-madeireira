import { getCartFreight } from '@/server/api/freight.api';
import { cookie as CONSTANT } from '@/server/constants/cookies';
import { apiRouter } from '@/server/lib/api-router';

const { session: { COOKIE_NAME } } = CONSTANT;

const verbs = {
  async get(req, res) {
    const { cookies, query: { cep } } = req;
    const session = cookies[COOKIE_NAME];
    if (!cep) return res.badRequest();
    const [data, status] = await getCartFreight(session, cep);
    if (status.notFound) return res.notFound();
    return res.ok(data);
  },
};

const routes = apiRouter(verbs);

export default routes;
