import { apiRouter } from '@/server/lib/api-router';
import { disconnectUser } from '@/server/api/user.api';
import { cookie } from '@/server/constants/cookies';

const verbs = {
  async post(req, res) {
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const [, status] = await disconnectUser(sessionId);

    if (!status.ok) {
      return res.badRequest();
    }

    return res.ok();
  },
};

const routes = apiRouter(verbs);

export default routes;
