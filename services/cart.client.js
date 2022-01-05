import { triggerCartChange, triggerCartItemPushed } from "./cart.observable";

export const addToCart = async (product, quantity) => {
  var res = await fetch(`/api/cart`, {
    method: 'post',
    body: JSON.stringify({
      product,
      quantity,
    })
  });

  await internalTriggerCartChange();
  await internalTriggerCartItemPushed();
}

export const updateCartItem = async (item) => {
  var res = await fetch(`/api/cart/${item.id}`, { method: 'put', body: JSON.stringify(item) });
  await internalTriggerCartChange();
}

export const removeFromCart = async (id) => {
  var res = await fetch(`/api/cart/${id}`, { method: 'delete' });
  await internalTriggerCartChange();
}

export const getCart = async () => {
  var res = await fetch('/api/cart');
  var cart = await res.json();
  return cart;
};

async function internalTriggerCartChange() {
  const cart = await getCart();
  triggerCartChange(cart);
}

async function internalTriggerCartItemPushed(item) {
  triggerCartItemPushed(item);
}
