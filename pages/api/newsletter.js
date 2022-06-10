import { signupNewsletter } from '@/server/api/home.api';

export default async (req, res) => {
  const { name, email } = JSON.parse(req.body);
  const apiRes = await signupNewsletter({ name, email });
  return res.status(200).json(apiRes);
};
