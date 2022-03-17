import { getPaymentConditions } from '../../../../services/product.service';

export default async function handler(req, res) {
  const relateds = await getPaymentConditions(req.query.id);
  const statusCode = relateds.length > 0 ? 200 : 204;
  res.status(statusCode).json(relateds);
}
