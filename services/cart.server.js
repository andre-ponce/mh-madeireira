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
    unityPrice: product.precoPor,
    quantity,
  });
};

export const updateCartItem = async (newItem) => {
  cart.itens = cart.itens.map((oldItem) => {
    if (oldItem.id !== newItem.id) {
      return oldItem;
    }

    return { ...oldItem, quantity: newItem.quantity };
  });
};

export const removeFromCart = async (id) => {
  cart.itens = cart.itens.filter((x) => x.id !== id);
};

export const getCart = async () => cart;
