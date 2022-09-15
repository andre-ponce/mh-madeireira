import { configureResponse } from './api.helper';
import { catalog } from './fetchClient';

export async function getHomeData() {
  const response = await catalog.get('/home');
  return configureResponse(response, { allow: [200] });
}

export async function signupNewsletter({ email, name }) {
  const response = await catalog.post('/newsletter', { nome: name, email, cadastradoVia: 'site' });
  return configureResponse(response, { allow: [200, 201] });
}
