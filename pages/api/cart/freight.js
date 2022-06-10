import { getCartFreight } from '@/server/api/cart.api';
import { cookie as CONSTANT } from '@/server/constants/cookies';
import { verbsRouter } from '@/server/lib/verbs-api-router';

const { session: { COOKIE_NAME } } = CONSTANT;

const verbs = {
  async get(req, res) {
    const { cookies, query: { cep } } = req;
    const session = cookies[COOKIE_NAME];

    if (!cep) {
      res.status(400).send('Bad Request');
      return;
    }
    const result = await getCartFreight(session, cep);
    res.json(result);
  },
};

const routes = verbsRouter(verbs);

export default routes;
