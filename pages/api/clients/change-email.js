import { changeEmail } from '@/server/api/user.api';
import { cookie } from '@/server/constants/cookies';
import { apiRouter } from '@/server/lib/api-router';

export default apiRouter({
  async post(req, res) {
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const { novoEmail } = req.body;
    const [, status] = await changeEmail(novoEmail, sessionId);

    if (!status.ok) {
      return res.badRequest();
    }

    return res.ok({});
  },
});
