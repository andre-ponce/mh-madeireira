import { signupNewsletter } from "../../services/home.service"

export default async (req, res) => {
  const { name, email } = JSON.parse(req.body);
  const apiRes = await signupNewsletter({name, email})
  return res.status(200).json(apiRes);
}
