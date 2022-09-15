import { configureResponse } from './api.helper';
import { account } from './fetchClient';

export async function getUser(session) {
  const response = await account.get('', { session });
  return configureResponse(response, { allow: [200, 401] });
}

export async function getUserInfo(session) {
  const response = await account.get('/cadastro', { session });
  return configureResponse(response, { allow: [200] });
}

export async function checkEmailAvailability(email) {
  const response = await account.get('/email-disponivel', { query: { email } });
  return configureResponse(response, { allow: [200] });
}

export async function createAccount(user) {
  const response = await account.post('', user);
  return configureResponse(response, { allow: [200, 401] });
}

export async function updateAccount(user, session) {
  const response = await account.post('', user, { session });
  return configureResponse(response, { allow: [200, 401] });
}

export async function changePassword(senhaAntiga, novaSenha, session) {
  const response = await account.post('/alterar-senha', { senhaAntiga, novaSenha }, { session });
  return configureResponse(response, { allow: [200, 401] });
}

export async function autenticate(usuario, senha, session) {
  const response = await account.post('/autenticar', { usuario, senha }, { session });
  return configureResponse(response, { allow: [200, 401] });
}

export async function disconnectUser(session) {
  const response = await account.post('/desconectar', null, { session });
  return configureResponse(response, { allow: [200] });
}
