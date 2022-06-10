import { addToCart, getCart } from '@/server/api/cart.api';
import { cookie as CONSTANT } from '@/server/constants/cookies';
import { verbsRouter } from '@/server/lib/verbs-api-router';

const { session: { COOKIE_NAME } } = CONSTANT;

export default verbsRouter({

  async get(req, res) {
    const { cookies } = req;
    const session = cookies[COOKIE_NAME];
    const cart = await getCart(session);
    res.status(200).json(cart);
  },

  async post(req, res) {
    const { cookies } = req;
    const session = cookies[COOKIE_NAME];
    const { product, quantity } = JSON.parse(req.body);
    const result = await addToCart(session, product, quantity);

    if (result.success) {
      res.status(200).end();
      return;
    }

    res.status(400).end();
  },

});
