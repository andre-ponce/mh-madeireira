import { getPaymentConditions } from '@/server/api/product.api';

export default async function handler(req, res) {
  const relateds = await getPaymentConditions(req.query.id);
  if (relateds.length > 0) {
    return res.status(200).json(relateds);
  }

  return res.status(204).end();
}
