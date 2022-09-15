import { apiRouter } from '@/server/lib/api-router';
import { cookie } from '@/server/constants/cookies';

const verbs = {
  async post(req, res) {
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    return res.status(400).end();
  },
};

const routes = apiRouter(verbs);

export default routes;
