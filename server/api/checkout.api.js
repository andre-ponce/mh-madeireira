import { headerNames } from '../constants/headers';

const baseUrl = `${process.env.API_CHECKOUT}/v1/checkout`;

const {
  session: sessionHeader,
} = headerNames;

export const addToCart = async (session, product, quantity) => {
  const res = await fetch(`${baseUrl}/itens`, {
    method: 'post',
    body: JSON.stringify({
      produtoId: product.id,
      quantidade: quantity,
      gradeId: null,
    }),
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      [sessionHeader]: session,
      'x-mw-sessao': session,
      'content-type': 'application/json',
    },
  });

  const { status, json } = res;

  if (status === 200) {
    const body = await json();
    return { ...body, success: true };
  }

  return { success: false };
};

export const changeDeliveryAddress = async (session, id) => {
  const res = await fetch(`${baseUrl}/endereco-de-entrega`, {
    method: 'post',
    body: JSON.stringify({ id }),
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      [sessionHeader]: session,
      'content-type': 'application/json',
    },
  });

  const { status } = res;

  if (status === 200) {
    return { success: true };
  }

  return { success: false };
};

export const changeDeliveryProvider = async (session, id) => {
  const res = await fetch(`${baseUrl}/frete`, {
    method: 'post',
    body: JSON.stringify({
      retirarNaLoja: false,
      siglaProvider: id,
    }),
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      [sessionHeader]: session,
      'content-type': 'application/json',
    },
  });

  const { status } = res;

  if (status === 200) {
    return { success: true };
  }

  return { success: false };
};

export const getCheckoutSession = async (session, paymentId) => {
  const response = await fetch(`${baseUrl}?provedor=${paymentId || ''}`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      [sessionHeader]: session,
    },
  });

  if (response.ok) {
    return response.json();
  }

  return { error: true };
};

export const finalize = async (session, orderData) => {
  const response = await fetch(`${baseUrl}/finalizar`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      'content-type': 'application/json',
      [sessionHeader]: session,
    },
    method: 'post',
    body: JSON.stringify(orderData),
  });

  if (response.ok) {
    return response.json();
  }

  return { error: true };
};
