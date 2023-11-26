import { checkEmailAvailability } from '@/server/api/user.api';
import { cookie } from '@/server/constants/cookies';
import { apiRouter } from '@/server/lib/api-router';

export default apiRouter({
  async get(req, res) {
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];
    const { email } = req.query;
    const [data, status] = await checkEmailAvailability(email, sessionId);

    if (!status.ok) {
      return res.badRequest();
    }
    const { disponivel: avaliable } = data;
    return res.ok({ avaliable, email });
  },
});
