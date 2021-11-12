import { getBuyTogether } from "../../../../services/product.service"

export default async function handler (req, res) {
  const products = await getBuyTogether(req.query.id);
  var statusCode = products.length > 0 ? 200 : 204;
  res.status(statusCode).json(products);
}
