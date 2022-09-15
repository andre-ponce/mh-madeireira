import { getGalery } from '@/server/api/product.api';
import { apiRouter } from '@/server/lib/api-router';

export default apiRouter({
  async get(req, res) {
    const [data, status] = await getGalery(req.query.id);

    if (!status.noContent) return res.noContent();
    if (!status.ok) return res.badRequest(data);
    return res.ok(data);
  },
});
