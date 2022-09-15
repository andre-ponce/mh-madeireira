import { configureResponse } from './api.helper';
import { checkout } from './fetchClient';

export async function getCartFreight(sessionId, cep) {
  const response = await checkout.get(`/frete/carrinho/${cep}`, { session: sessionId });
  return configureResponse(response, { allow: [200, 404] });
}

export async function getProductFreight(id, cep) {
  const response = await checkout.get(`/frete/produto/${id}/${cep}`);
  return configureResponse(response, { allow: [200, 404] });
}
