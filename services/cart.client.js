import { triggerCartChange, triggerCartItemPushed } from './cart.observable';

export const getCart = async () => {
  const res = await fetch('/api/cart');
  return res.json();
};

async function internalTriggerCartChange() {
  const cart = await getCart();
  triggerCartChange(cart);
}

async function internalTriggerCartItemPushed(item) {
  triggerCartItemPushed(item);
}

export const addToCart = async (product, quantity) => {
  await fetch('/api/cart', {
    method: 'post',
    body: JSON.stringify({
      product,
      quantity,
    }),
  });

  await internalTriggerCartChange();
  await internalTriggerCartItemPushed();
};

export const updateCartItem = async (item) => {
  await fetch(`/api/cart/${item.id}`, { method: 'put', body: JSON.stringify(item) });
  await internalTriggerCartChange();
};

export const removeFromCart = async (id) => {
  await fetch(`/api/cart/${id}`, { method: 'delete' });
  await internalTriggerCartChange();
};
