import { checkEmailAvailability } from '@/server/api/user.api';
import { apiRouter } from '@/server/lib/api-router';

export default apiRouter({
  async get(req, res) {
    const { email } = req.query;
    const [data, status] = await checkEmailAvailability(email);

    if (!status.ok) {
      return res.badRequest();
    }
    const { disponivel: avaliable } = data;
    return res.ok({ avaliable, email });
  },
});
