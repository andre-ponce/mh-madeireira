export async function getAddress(sessionId) {
  const response = await fetch(`${process.env.API_ACCOUNT}/checkout/cliente/enderecos`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      'x-mw-sessao': sessionId,
    },
  });

  if (response.status === 200) {
    return response.json();
  }

  if ([400, 415].includes(response.status)) {
    return { falha: true, ...response.json() };
  }

  return {
    falha: true,
    erros: ['falha ao salvar seu endereço, por favor, contate nosso suporte'],
  };
}

export async function createAddress(sessionId, address) {
  const response = await fetch(`${process.env.API_ACCOUNT}/checkout/cliente/enderecos`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      'x-mw-sessao': sessionId,
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(address),
  });

  if (response.status === 200) {
    return response.json();
  }

  if ([400, 415].includes(response.status)) {
    return { falha: true, ...response.json() };
  }

  return {
    falha: true,
    erros: ['falha ao salvar seu endereço, por favor, contate nosso suporte'],
  };
}

export async function updateAddress(address) {
  const response = await fetch(`${process.env.API_ACCOUNT}/checkout/cliente/enderecos`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      'content-type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(address),
  });

  if (response.status === 200) {
    return response.json();
  }

  if ([400, 415].includes(response.status)) {
    return { falha: true, ...response.json() };
  }

  return {
    falha: true,
    erros: ['falha ao salvar seu endereço, por favor, contate nosso suporte'],
  };
}
