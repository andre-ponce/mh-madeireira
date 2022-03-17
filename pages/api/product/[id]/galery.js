import { getGalery } from '../../../../services/product.service';

export default async function handler(req, res) {
  const galery = await getGalery(req.query.id);
  const statusCode = galery.length > 0 ? 200 : 204;
  res.status(statusCode).json(galery);
}
