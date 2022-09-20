import { getProductFreight } from '@/server/api/freight.api';
import { apiRouter } from '@/server/lib/api-router';

export default apiRouter({
  async get(req, res) {
    const { cep, id } = req.query;

    if (!cep || !id) {
      return res.badRequest();
    }
    const [data, status] = await getProductFreight(req.query.id, cep);

    if (!status.ok) return res.badRequest(data);
    return res.ok(data);
  },
});
