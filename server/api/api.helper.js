import { ApiHandleError } from '../errors/ApiHandleError';

async function readResponse(response) {
  if (response.status === 204) {
    return undefined;
  }

  if (response.headers) {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return response.json();
    }
  }

  return response.text();
}

export const credentials = (session) => {
  if (!process.env.MW_CLIENT_ID) {
    throw new Error('Configuração ausente: clientId');
  }

  if (!process.env.MW_TENANT_KEY) {
    throw new Error('Configuração ausente: tenantKey');
  }

  const config = {
    'mw-client-id': process.env.MW_CLIENT_ID,
    'mw-tenant-key': process.env.MW_TENANT_KEY,
  };

  if (session) {
    config['mw-session-id'] = session;
  }

  const bearer = process.env.API_CATALOG_TOKEN;
  if (bearer) {
    config.authorization = bearer;
  }

  return config;
};

export const configureResponse = async (response, config) => {
  const allow = config.allow || [200, 201];

  const data = await readResponse(response);

  if (allow.includes(200) && response.ok) {
    return [data, { ok: true }];
  }

  if (allow.includes(204) && response.status === 204) {
    return [data, { noContent: true }];
  }

  if (allow.includes(404) && response.status === 404) {
    return [data, { notFound: true }];
  }

  if (allow.includes(403) && response.status === 403) {
    return [data, { forbidden: true }];
  }

  if (allow.includes(401) && response.status === 401) {
    return [data, { unauthorized: true }];
  }

  if (allow.includes(400) && response.status === 400) {
    return [{ ...data, $error: response.$error }, { badRequest: true }];
  }

  if (allow.includes(response.status)) {
    return [{ ...data, $error: response.$error }, {
      ok: response.status >= 200 && response.status < 300,
      badRequest: response.status >= 400 && response.status < 500,
      serverError: response.status >= 500,
    }];
  }

  throw new ApiHandleError('Falha ao obter dados do servidor remoto', response.$error);
};
