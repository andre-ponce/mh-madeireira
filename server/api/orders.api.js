import { configureResponse } from './api.helper';
import { account } from './fetchClient';

export async function getOrders(session) {
  const response = await account.get('/pedidos', { session });
  return configureResponse(response, { allow: [200] });
}

export async function getOrderDetailed(code, session) {
  const response = await account.get(`/pedidos/${code}`, { session });
  return configureResponse(response, { allow: [200] });
}

export async function getOrderPayment(code, session) {
  const response = await account.get(`/pedidos/${code}/pagamento`, { session });
  return configureResponse(response, { allow: [200] });
}
