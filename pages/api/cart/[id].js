import { removeFromCart, updateCartItem } from '../../../services/cart.server';

export default async function handler(req, res) {
  const method = req.method.toLowerCase();

  switch (method) {
    case 'put':
      await updateCartItem(JSON.parse(req.body));
      res.status(200).send();
      break;

    case 'delete':
      await removeFromCart(req.query.id);
      res.status(200);
      break;

    default:
      res.status(405);
      break;
  }

  res.end();
}
