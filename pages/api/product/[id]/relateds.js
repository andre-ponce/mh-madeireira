import { getRelateds } from '@/server/api/product.api';

export default async function handler(req, res) {
  const relateds = await getRelateds(req.query.id);
  const statusCode = relateds.length > 0 ? 200 : 204;
  res.status(statusCode).json(relateds);
}
