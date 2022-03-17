import { addToCart, getCart } from '../../../services/cart.server';

export default async function handler(req, res) {
  const method = req.method.toLowerCase();

  switch (method) {
    case 'get':
      res.status(200).json(await getCart());
      break;

    case 'post': {
      const { product, quantity } = JSON.parse(req.body);
      await addToCart(product, quantity);
      res.status(200);
      break;
    }

    default:
      res.status(405);
      break;
  }

  res.end();
}
