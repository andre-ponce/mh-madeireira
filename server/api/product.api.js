import { configureResponse } from './api.helper';
import { catalog } from './fetchClient';

export async function getProduct(id) {
  const response = await catalog.get(`/produto/${id}`);
  return configureResponse(response, { allow: [200, 404] });
}

export async function getGalery(id) {
  const response = await catalog.get(`/produto/${id}/galeria`);
  return configureResponse(response, { allow: [200, 404] });
}

export async function getDescription(id) {
  const response = await catalog.get(`/produto/${id}/descricao`);
  if (response.ok) return response.json();
  return { descricaoHTML: '' };
}

export async function getBuyTogether(id) {
  const response = await catalog.get(`/produto/${id}/compre-junto`);
  return configureResponse(response, { allow: [200, 404] });
}

export async function getRelateds(id) {
  const response = await catalog.get(`/produto/${id}/relacionados`);
  return configureResponse(response, { allow: [200, 204, 404] });
}

export async function getPaymentConditions(id) {
  const response = await catalog.get(`/produto/${id}/condicoes-de-pagamento`);
  return configureResponse(response, { allow: [200, 404] });
}
