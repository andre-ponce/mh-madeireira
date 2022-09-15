import { configureResponse } from './api.helper';
import { catalog } from './fetchClient';

export async function getCategoryResults(id, query) {
  const response = await catalog.get(`/catalogo/${id}`, { query: { itens: 21, ...query } });
  return configureResponse(response, { allow: [200, 404] });
}

export async function getSearchResults(query) {
  const response = await catalog.get('/catalogo/busca', { query: { itens: 21, ...query } });
  return configureResponse(response, { allow: [200] });
}
