import { credentials } from './api.helper';

const baseUrl = `${process.env.API_CHECKOUT}/sessao`;

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
      ...credentials(),
    },
  });

  if (!res.ok) {
    throw new Error(JSON.stringify({
      status: res.status,
      message: await res.text(),
      route: baseUrl,
    }));
  }

  const { sessaoId } = await res.json();

  return {
    sessionId: sessaoId,
  };
}

export async function refreshSession(sessionId) {
  const res = await fetch(`${baseUrl}/esta-valida`, {
    timeout,
    headers: {
      ...credentials(sessionId),
    },
  });

  if (res.ok) {
    return res.json();
  }

  if (res.status === 400) {
    return { valida: false };
  }

  throw new Error(JSON.stringify({
    status: res.status,
  }));
}
