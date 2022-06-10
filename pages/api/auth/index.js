import { verbsRouter } from '@/server/lib/verbs-api-router';
import { autenticate } from '@/server/api/user.api';
import { cookie } from '@/server/constants/cookies';

const verbs = {
  async post(req, res) {
    const { user, pass } = JSON.parse(req.body);
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];

    if (!sessionId) {
      res.status(500).json({ error: 'Erro interno, contate nosso suporte.' });
      res.end();
      return;
    }

    if (!user) {
      res.status(400).json({ error: 'O E-mail é obrigatorio' });
      res.end();
      return;
    }

    if (!pass) {
      res.status(400).json({ error: 'A Senha é obrigatoria' });
      res.end();
      return;
    }

    const authRes = await autenticate(user, pass, sessionId);

    res.status(authRes.httpStatus).json(authRes);
    res.end();
  },
};

const routes = verbsRouter(verbs);

export default routes;
