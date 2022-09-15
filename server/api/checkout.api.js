import { configureResponse } from './api.helper';
import { checkout } from './fetchClient';

export async function getCheckoutSession(session) {
  const response = await checkout.get('', { session });
  return configureResponse(response, { allow: [200] });
}

export async function finalize(session, orderData) {
  const response = await checkout.post('/finalizar', orderData, { session });
  return configureResponse(response, { allow: [200] });
}

export async function changeDeliveryAddress(session, id) {
  const response = await checkout.post('/endereco-de-entrega', { id }, { session });
  return configureResponse(response, { allow: [200] });
}

export async function changeDeliveryProvider(session, id) {
  const response = await checkout.post('/frete', {
    retirarNaLoja: false,
    siglaProvider: id,
  }, { session });
  return configureResponse(response, { allow: [200] });
}
