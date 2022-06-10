import { trigger } from '@/helpers/observable';

export const getCart = async () => {
  const res = await fetch('/api/cart');

  if (res.ok) {
    return res.json();
  }

  return { fail: true };
};

async function internalTriggerCartChange() {
  trigger('cart:changed');
}

async function internalTriggerCartItemPushed(item) {
  trigger('cart:item-pushed', item);
}

export const addToCart = async (product, quantity) => {
  const res = await fetch('/api/cart', {
    method: 'post',
    body: JSON.stringify({
      product,
      quantity,
    }),
  });

  await internalTriggerCartChange();
  await internalTriggerCartItemPushed();

  return res;
};

export const updateCartItem = async (id, quantity) => {
  const result = await fetch(`/api/cart/${id}`, { method: 'put', body: JSON.stringify({ quantity }) });
  if (result.ok) {
    await internalTriggerCartChange();
    return { success: true };
  }

  return { success: false };
};

export const removeFromCart = async (id) => {
  const result = await fetch(`/api/cart/${id}`, { method: 'delete' });
  if (result.ok) {
    await internalTriggerCartChange();
    return { success: true };
  }

  return { success: false };
};
