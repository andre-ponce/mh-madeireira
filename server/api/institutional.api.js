import { configureResponse } from './api.helper';
import { catalog } from './fetchClient';

export async function getInstitutionalPage(slug) {
  const response = await catalog.get(`/institucional/${slug}`);
  return configureResponse(response, { allow: [200, 404] });
}
