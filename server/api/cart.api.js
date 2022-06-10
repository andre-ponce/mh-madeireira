import { headerNames } from '../constants/headers';

const baseUrl = `${process.env.API_CHECKOUT}/v1/checkout/carrinho`;

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

export const updateCartItem = async (session, product, quantity) => {
  const res = await fetch(`${baseUrl}/itens/${product}`, {
    method: 'put',
    body: JSON.stringify({
      produtoId: product,
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

  const { status } = res;

  if (status === 200) {
    return { success: true };
  }

  return { success: false };
};

export const removeFromCart = async (session, id) => {
  const res = await fetch(`${baseUrl}/itens/${id}`, {
    method: 'delete',
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      [sessionHeader]: session,
      'x-mw-sessao': session,
      'content-type': 'application/json',
    },
  });

  const { status } = res;

  if (status === 200) {
    return { success: true };
  }

  return { success: false };
};

export const getCart = async (session) => {
  const res = await fetch(`${baseUrl}`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      [sessionHeader]: session,
    },
  });

  return res.json();
};

export async function getCartFreight(session, cep) {
  const response = await fetch(`${process.env.API_ACCOUNT}/v1/checkout/frete/carrinho/${cep}`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      [sessionHeader]: session,
    },
  });

  if (response.ok) {
    return response.json();
  }

  if (response.status === 404) {
    return { notFound: true };
  }

  return [];
}
