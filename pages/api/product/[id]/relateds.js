import { getRelateds } from '@/server/api/product.api';
import { apiRouter } from '@/server/lib/api-router';

export default apiRouter({
  async get(req, res) {
    const [data, status] = await getRelateds(req.query.id);

    if (!status.ok) return res.badRequest(data);
    return res.ok(data);
  },
});
