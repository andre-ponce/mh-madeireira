const cart = {
  itens: [],
  conditions: {},
  freight: {},
  discounts: [],
};

export const addToCart = async (product, quantity) => {
  cart.itens.push({
    id: cart.itens.length + 1,
    image: product.fotoUrl,
    name: product.nome,
    quantity: quantity,
    unityPrice: product.precoPor
  });
};

export const updateCartItem = async (item) => {
  cart.itens = cart.itens.map(x => {
    if (x.id != item.id) {
      return x;
    }

    x.quantity = item.quantity;
    return item;
  });
};

export const removeFromCart = async (id) => {
  cart.itens = cart.itens.filter(x => x.id != id);
};

export const getCart = async () => {
  return cart;
};
