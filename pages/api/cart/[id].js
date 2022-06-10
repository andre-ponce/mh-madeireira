import { removeFromCart, updateCartItem } from '@/server/api/cart.api';
import { cookie as CONSTANT } from '@/server/constants/cookies';
import { verbsRouter } from '@/server/lib/verbs-api-router';

const { session: { COOKIE_NAME } } = CONSTANT;

export default verbsRouter({

  async put(req, res) {
    const { cookies, query: { id } } = req;
    const session = cookies[COOKIE_NAME];
    const { quantity } = JSON.parse(req.body);
    const result = await updateCartItem(session, id, quantity);

    if (result.success) {
      res.status(200).send();
    } else {
      res.status(400).send();
    }
  },

  async delete(req, res) {
    const { cookies } = req;
    const session = cookies[COOKIE_NAME];
    const { query: { id } } = req;
    const result = await removeFromCart(session, id);

    if (result.success) {
      res.status(200).send();
    } else {
      res.status(400).send();
    }
  },

});
