export async function getUser(sessionId) {
  const response = await fetch(`${process.env.API_ACCOUNT}/checkout/cliente`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      'x-mw-sessao': sessionId,
    },
  });

  if (response.status === 200) {
    return response.json();
  }

  if (response.status === 401) {
    return null;
  }

  return null;
}

export async function getUserInfo(sessionId) {
  const response = await fetch(`${process.env.API_ACCOUNT}/checkout/cliente/cadastro`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      'x-mw-sessao': sessionId,
    },
  });

  if (response.status === 200) {
    return response.json();
  }

  if (response.status === 401) {
    return null;
  }

  return null;
}

export async function createAccount(user) {
  const response = await fetch(`${process.env.API_ACCOUNT}/checkout/cliente`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(user),
  });

  if ([200, 400, 415].includes(response.status)) {
    return response.json();
  }

  return {
    sucesso: false,
    erros: ['falha ao salvar sua conta, por favor, contate nosso suporte'],
  };
}

export async function updateAccount(user) {
  const response = await fetch(`${process.env.API_ACCOUNT}/checkout/cliente`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      'content-type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(user),
  });

  if ([200, 400].includes(response.status)) {
    return response.json();
  }

  return {
    sucesso: false,
    erros: ['falha ao salvar sua conta, por favor, contate nosso suporte'],
  };
}

export async function getAddresses(userId) {
  const response = await fetch(`${process.env.API_ACCOUNT}/enderecos/${userId}`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
    },
  });

  return response.json();
}

export async function changePassword(old, newPassword) {
  const response = await fetch(`${process.env.API_ACCOUNT}/cliente/alterar-senha`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
    },
    body: JSON.stringify({
      senhaAntiga: old,
      novaSenha: newPassword,
    }),
  });

  return response.json();
}

export async function autenticate(user, pass, sessionId) {
  const body = JSON.stringify({
    usuario: user,
    senha: pass,
  });

  const res = await fetch(`${process.env.API_ACCOUNT}/checkout/cliente/autenticar`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      'x-mw-sessao': sessionId,
      'content-type': 'application/json',
    },
    method: 'post',
    body,
  });

  const json = await res.json();
  const requestFailed = ![200, 401, 400].includes(res.status);
  const autenticated = res.status === 200 && !!json.autenticado;

  return {
    httpStatus: requestFailed ? 500 : res.status,
    response: !requestFailed ? json : {},
    autenticated,
  };
}

export async function disconnectUser(sessionId) {
  const res = await fetch(`${process.env.API_ACCOUNT}/checkout/cliente/desconectar`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      'x-mw-sessao': sessionId,
      'content-type': 'application/json',
    },
    method: 'post',
  });

  const requestFailed = ![200, 400].includes(res.status);
  const disconnected = res.status === 200;

  return {
    httpStatus: requestFailed ? 500 : res.status,
    disconnected,
  };
}
