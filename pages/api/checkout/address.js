import { verbsRouter } from '@/server/lib/verbs-api-router';
import { cookie } from '@/server/constants/cookies';

const verbs = {
  async put(req, res) {
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const deliveryAddress = req.body;
    if (!deliveryAddress) {
      return res.status(400).json({ sucesso: false, erros: ['falha ao alterar o endereço de entrega'] });
    }

    // const result = await createAccount(user);

    // if (result.sucesso) {
    //   return res.status(200).json(result);
    // }

    // return res.status(400).json(result);
  },
};

const routes = verbsRouter(verbs);

export default routes;
