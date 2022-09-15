import { configureResponse } from './api.helper';
import { checkout } from './fetchClient';

export async function getCart(sessionId) {
  const response = await checkout.get('/carrinho', { session: sessionId });
  return configureResponse(response, { allow: [200] });
}

export async function addToCart(sessionId, product, quantity) {
  const payload = {
    produtoId: product.id,
    quantidade: quantity,
    gradeId: null,
  };

  const response = await checkout.post('/carrinho/itens', payload, { session: sessionId });
  return configureResponse(response, { allow: [200] });
}

export async function updateCartItem(sessionId, product, quantity) {
  const payload = {
    produtoId: product,
    quantidade: quantity,
    gradeId: null,
  };

  const response = await checkout.put(`/carrinho/itens/${product}`, payload, { session: sessionId });
  return configureResponse(response, { allow: [200] });
}

export async function removeFromCart(sessionId, id) {
  const response = await checkout.delete(`/carrinho/itens/${id}`, { session: sessionId });
  return configureResponse(response, { allow: [200] });
}
