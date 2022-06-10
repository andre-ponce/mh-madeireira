import { getBuyTogether } from '@/server/api/product.api';

export default async function handler(req, res) {
  const products = await getBuyTogether(req.query.id);
  if (products.length > 0) {
    return res.status(200).json(products).end();
  }

  return res.status(204).end();
}
