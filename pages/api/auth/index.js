import { apiRouter } from '@/server/lib/api-router';
import { autenticate } from '@/server/api/user.api';
import { cookie } from '@/server/constants/cookies';

const verbs = {
  async post(req, res) {
    const { user, pass } = JSON.parse(req.body);
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];

    if (!user) {
      return res.badRequest({ error: 'O E-mail é obrigatorio' });
    }

    if (!pass) {
      return res.badRequest({ error: 'A Senha é obrigatoria' });
    }

    const [data, status] = await autenticate(user, pass, sessionId);

    if (!status.ok) {
      return res.badRequest({ error: 'Falha ao autenticar', ...data });
    }

    return res.ok(data);
  },
};

const routes = apiRouter(verbs);

export default routes;
