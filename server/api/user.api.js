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

export async function checkEmailAvailability(email, session) {
  const response = await account.get('/email-disponivel', { query: { email }, session });
  return configureResponse(response, { allow: [200] });
}

export async function createAccount(user) {
  const response = await account.post('', user);
  return configureResponse(response, { allow: [200, 400, 401] });
}

export async function updateAccount(user, session) {
  const response = await account.put('', user, { session });
  return configureResponse(response, { allow: [200, 401] });
}

export async function changePassword(senhaAtual, novaSenha, session) {
  const response = await account.put('/alterar-senha', { senhaAtual, novaSenha }, { session });
  return configureResponse(response, { allow: [200, 400, 401] });
}

export async function changeEmail(novoEmail, session) {
  const response = await account.put('/alterar-email', { novoEmail }, { session });
  return configureResponse(response, { allow: [200, 400, 401] });
}

export async function autenticate(usuario, senha, session) {
  const response = await account.post('/autenticar', { usuario, senha }, { session });
  return configureResponse(response, { allow: [200, 401] });
}

export async function disconnectUser(session) {
  const response = await account.post('/desconectar', null, { session });
  return configureResponse(response, { allow: [200] });
}
