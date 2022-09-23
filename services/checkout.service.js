const urlBase = '/api/checkout';

async function fetcher(url, config) {
  const { header, ...overrides } = config || {};

  const res = await fetch(`${urlBase}${url}`, {
    headers: { 'Content-Type': 'application/json', ...header },
    ...overrides,
  });

  return res;
}

export const setAddress = async (address) => {
  const res = await fetcher('/address', {
    method: 'POST',
    body: JSON.stringify(address),
  });

  if (res.ok) {
    return {};
  }

  return { error: 'Não foi possível salvar seu endereço' };
};

export const setDelivery = async (delivery) => {
  const res = await fetcher('/delivery', {
    method: 'POST',
    body: JSON.stringify(delivery),
  });

  if (res.ok) {
    return {};
  }

  return { error: 'Não foi possível alterar seu endereço de entrega' };
};

export const setCoupon = async (coupon) => {
  const res = await fetcher('/coupon', {
    method: 'POST',
    body: JSON.stringify(coupon),
  });

  if (res.ok) {
    return res.json();
  }

  return { error: 'Não foi possível aplicar seu cupom' };
};

export const finalize = async (payment) => {
  const res = await fetcher('/', {
    method: 'POST',
    body: JSON.stringify(payment),
  });

  if (res.ok) {
    return res.json();
  }

  return { error: 'Não foi possível concluir seu pedido.' };
};

export const getCheckout = async (paymentId) => {
  const res = await fetcher(`/?p=${paymentId || ''}`);

  if (res.ok) {
    return res.json();
  }

  return { error: 'Não foi possível carregar seu pedido.' };
};
