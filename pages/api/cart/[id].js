import { removeFromCart, updateCartItem } from '@/server/api/cart.api';
import { cookie as CONSTANT } from '@/server/constants/cookies';
import { apiRouter } from '@/server/lib/api-router';

const { session: { COOKIE_NAME } } = CONSTANT;

async function put(req, res) {
  const { cookies, query: { id } } = req;
  const session = cookies[COOKIE_NAME];
  const { quantity } = JSON.parse(req.body);
  const [, status] = await updateCartItem(session, id, quantity);

  if (!status.ok) {
    return res.badRequest();
  }

  return res.ok();
}

async function del(req, res) {
  const { cookies } = req;
  const session = cookies[COOKIE_NAME];
  const { query: { id } } = req;
  const [, status] = await removeFromCart(session, id);

  if (!status.ok) {
    return res.badRequest();
  }

  return res.ok();
}

export default apiRouter({ put, delete: del });
