import { removeFromCart, updateCartItem } from "../../../services/cart.api.mock";

export default async function handler(req, res) {

  const method = req.method.toLowerCase();

  switch (method) {
    case "put":
      const item = JSON.parse(req.body);
      await updateCartItem(item);
      res.status(200).send();
      break;

    case "delete":
      const productId = req.query.id;
      await removeFromCart(productId);
      res.status(200);
      break;

    default:
      res.status(405);
      break;
  }

  res.end();
}


