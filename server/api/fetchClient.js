import { InvalidSessionError } from '../errors/InvalidSessionError';
import { credentials } from './api.helper';

function configureRequest(params) {
  if (params && typeof (params) !== 'object') {
    throw new Error('fetch config must be an object');
  }

  const {
    session,
    timeout,
    headers,
    ...config
  } = params || {};

  if (session && typeof (session) !== 'string') {
    throw new Error('sessionId must be a string');
  }

  const incomingHeader = headers || {};

  const auth = credentials(session);
  const finalConfig = {
    ...config,
    timeout: timeout || 8000,
    headers: { ...incomingHeader, ...auth },
  };

  const traceData = {
    session: session || null,
    timeout: finalConfig.timeout,
    contentType: finalConfig['content-type'] ?? null,
  };

  if (process.env.NODE_ENV === 'development') {
    traceData.requestConfiguration = { ...finalConfig };
  }

  return [finalConfig, traceData];
}

function prepareUrl(input, urlBase, params) {
  if (input instanceof URL) {
    return input;
  }

  if (typeof (input) !== 'string') {
    throw new Error('input deve ser uma string ou uma URL');
  }

  if (input.startsWith(urlBase)) {
    return input;
  }

  const finalUrl = new URL(urlBase);
  const prefix = finalUrl.pathname || '/';
  const pathname = [...prefix.split('/'), ...input.split('/')].filter((x) => x).join('/');
  finalUrl.pathname = pathname;

  if (params?.query) {
    Object.keys(params?.query).forEach((key) => {
      const value = params?.query[key];
      if (Array.isArray(value)) {
        value.forEach((v) => {
          finalUrl.searchParams.append(key, v);
        });
      } else {
        finalUrl.searchParams.append(key, value);
      }
    });
  }

  return finalUrl;
}

function getMethod(config) {
  const realKey = Object.keys(config)
    .filter((key) => key.toLowerCase() === 'method')[0];

  let method = 'GET';
  if (realKey) {
    method = config[realKey] || 'GET';
  }

  return method.toUpperCase();
}

function getCommand(url, config) {
  const cmdBuilder = [
    'curl',
    '-X',
    getMethod(config),
    url,
  ];

  if (config?.headers) {
    Object
      .keys(config.headers)
      .forEach((key) => {
        cmdBuilder.push(`-H "${key}: ${config.headers[key]}"`);
      });
  }

  if (config?.body) {
    cmdBuilder.push(`-d "${config.body}"`);
  }

  return cmdBuilder.join(' ');
}

function fetchClient(urlBase) {
  const base = new URL(urlBase);

  return async (input, params) => {
    const url = prepareUrl(input, base, params);
    const [requestConfig, traceData] = configureRequest(params);

    const needSessionValidation = !!traceData.session;

    try {
      const response = await fetch(url, { ...requestConfig });

      if (response.ok) return response;

      if (needSessionValidation && response.status === 403) {
        const { errorCode } = await response.clone().json();
        if (errorCode === 1001) {
          throw new InvalidSessionError(traceData.session);
        }
      }

      const defaultError = {
        serverCode: response.status,
        errorType: 'remote',
        errorDescription: await response.clone().text(),
      };

      if (process.env.NODE_ENV === 'production') {
        response.$error = defaultError;
      } else {
        response.$error = {
          ...defaultError,
          origin: `${getMethod(requestConfig)} ${url}`,
          traceData,
          try: getCommand(url, requestConfig),
        };
      }

      return response;
    } catch (err) {
      if (err instanceof InvalidSessionError) {
        throw (err);
      }

      return {
        $error: {
          origin: `${getMethod(requestConfig)} ${url}`,
          traceData,
          serverCode: 0,
          errorType: 'internal',
          errorDescription: err,
        },
      };
    }
  };
}

function withMethods(client) {
  return {
    get: client,

    post: (path, data, params) => {
      const defaults = { ...(params || {}) };
      const config = { ...defaults, headers: { 'content-type': 'application/json', ...(defaults.headers || {}) }, method: 'POST' };
      if (data !== undefined && data !== null) {
        config.body = JSON.stringify(data);
      }

      return client(path, config);
    },

    put: (path, data, params) => {
      const defaults = { ...(params || {}) };
      const config = { ...defaults, headers: { 'content-type': 'application/json', ...(defaults.headers || {}) }, method: 'PUT' };
      if (data !== undefined && data !== null) {
        config.body = JSON.stringify(data);
      }

      return client(path, config);
    },

    delete: (path, params) => client(path, { method: 'DELETE', ...params }),
  };
}

export const catalog = withMethods(fetchClient(process.env.API_CATALOG));
export const account = withMethods(fetchClient(process.env.API_ACCOUNT));
export const checkout = withMethods(fetchClient(process.env.API_CHECKOUT));
