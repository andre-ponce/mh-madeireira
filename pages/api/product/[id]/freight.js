import { getProductFreight } from '@/server/api/product.api';
import { verbsRouter } from '@/server/lib/verbs-api-router';

const verbs = {
  async get(req, res) {
    const { cep, id } = req.query;

    if (!cep || !id) {
      res.status(400).send('Bad Request');
      return;
    }
    const result = await getProductFreight(id, cep);
    res.json(result);
  },
};

const routes = verbsRouter(verbs);

export default routes;
