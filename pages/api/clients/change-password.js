import { changePassword } from '@/server/api/user.api';
import { cookie } from '@/server/constants/cookies';
import { apiRouter } from '@/server/lib/api-router';

export default apiRouter({
  async post(req, res) {
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const { senhaAtual, senhaNova } = req.body;
    const [data, status] = await changePassword(senhaAtual, senhaNova, sessionId);

    if (!status.ok) {
      return res.badRequest(data);
    }

    return res.ok({});
  },
});
