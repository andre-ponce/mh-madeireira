import { verbsRouter } from '@/server/lib/verbs-api-router';
import { createAccount, getUser } from '@/server/api/user.api';
import { cookie } from '@/server/constants/cookies';

const verbs = {
  async get(req, res) {
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const user = await getUser(sessionId);

    if (!user) {
      return res.status(401).end();
    }

    return res.status(200).json(user);
  },

  async post(req, res) {
    const user = req.body;
    if (!user) {
      return res.status(400).json({ sucesso: false, erros: ['falha ao salvar sua conta, por favor, contate nosso suporte'] });
    }

    const result = await createAccount(user);

    if (result.sucesso) {
      return res.status(200).json(result);
    }

    return res.status(400).json(result);
  },
};

const routes = verbsRouter(verbs);

export default routes;
