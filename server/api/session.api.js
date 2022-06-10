import { headerNames } from '../constants/headers';

const baseUrl = `${process.env.API_CHECKOUT}/v1/checkout/sessao`;

const {
  session: sessionHeader,
} = headerNames;

const timeout = 5000;

export async function createFreshSession(ip, ua, env) {
  const res = await fetch(baseUrl, {
    timeout,
    method: 'post',
    body: JSON.stringify({
      Ip: ip || '',
      ua: JSON.stringify(ua),
      env: JSON.stringify(env),
    }),
    headers: {
      'content-type': 'application/json',
      Authorization: process.env.API_CATALOG_TOKEN,
    },
  });

  const { sessaoId } = await res.json();

  return {
    sessionId: sessaoId,
  };
}

export async function refreshSession(sessionId, ip, ua, env) {
  const res = await fetch(`${baseUrl}/esta-valida`, {
    timeout,
    headers: {
      Authorization: process.env.API_CATALOG_TOKEN,
      [sessionHeader]: sessionId,
    },
  });

  const { valida } = await res.json();

  if (!valida) {
    const { novaSessao } = await createFreshSession(ip, ua, env);
    return { sessionId: novaSessao };
  }

  return { valida };
}
