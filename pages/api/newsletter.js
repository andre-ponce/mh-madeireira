import { signupNewsletter } from '@/server/api/home.api';
import { apiRouter } from '@/server/lib/api-router';

export default apiRouter({
  async post(req, res) {
    const { name, email } = JSON.parse(req.body);
    const [data, status] = await signupNewsletter({ name, email });

    if (!status.ok) return res.badRequest(data);

    return res.ok(data);
  },
});
