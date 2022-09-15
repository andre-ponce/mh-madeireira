import { configureResponse } from './api.helper';
import { catalog } from './fetchClient';

export async function getGlobalData() {
  const response = await catalog.get('/dados-globais');
  return configureResponse(response, { allow: [200] });
}
