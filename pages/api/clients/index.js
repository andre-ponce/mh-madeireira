import { apiRouter } from '@/server/lib/api-router';
import { createAccount, getUser } from '@/server/api/user.api';
import { cookie } from '@/server/constants/cookies';

const verbs = {
  async get(req, res) {
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const [user, status] = await getUser(sessionId);

    if (status.unauthorized) {
      return res.unauthorized();
    }

    if (!status.ok) {
      return res.badRequest();
    }

    return res.ok(user);
  },

  async post(req, res) {
    const user = req.body;
    if (!user) {
      return res.badRequest({ erros: ['falha ao salvar sua conta, por favor, contate nosso suporte'] });
    }

    const [data, status] = await createAccount(user);

    if (!status.ok) {
      return res.badRequest(data);
    }

    return res.ok(data);
  },
};

const routes = apiRouter(verbs);

export default routes;
