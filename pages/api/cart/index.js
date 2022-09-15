import { addToCart, getCart } from '@/server/api/cart.api';
import { cookie as CONSTANT } from '@/server/constants/cookies';
import { apiRouter } from '@/server/lib/api-router';

const { session: { COOKIE_NAME } } = CONSTANT;

async function get(req, res) {
  const { cookies } = req;
  const session = cookies[COOKIE_NAME];
  const [cart, status] = await getCart(session);

  if (!status.ok) {
    return res.badRequest();
  }

  return res.ok(cart);
}

async function post(req, res) {
  const { cookies } = req;
  const session = cookies[COOKIE_NAME];
  const { product, quantity } = JSON.parse(req.body);
  const [, status] = await addToCart(session, product, quantity);

  if (!status.ok) {
    return res.badRequest();
  }

  return res.ok();
}

export default apiRouter({ get, post });
