import { configureResponse } from './api.helper';
import { account } from './fetchClient';

export async function getAddress(session) {
  const response = await account.get('/enderecos', { session });
  return configureResponse(response, { allow: [200] });
}

export async function createAddress(session, address) {
  const response = await account.post('/enderecos', address, { session });
  return configureResponse(response, { allow: [200, 201] });
}

export async function updateAddress(session, address) {
  const response = await account.put(`/enderecos/${address.id}`, address, { session });
  return configureResponse(response, { allow: [200, 201] });
}
