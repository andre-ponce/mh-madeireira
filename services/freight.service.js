const localCache = {
};

async function fetchProviders(type, zipcode, productId) {
  const URL = type === 'cart' ? '/api/cart/freight' : `/api/product/${productId}/freight`;
  const response = await fetch(`${URL}?cep=${zipcode}`);
  if (response.status === 200) {
    const freight = await response.json();
    return freight;
  }

  return [];
}

export async function calculateFreight(type, zipcode, productId, cartHash) {
  if (!zipcode) {
    return new Error('CEP inválido');
  }

  if (!['cart', 'product'].includes(type)) {
    return new Error('Tipo inválido');
  }

  if (type === 'product' && !productId) {
    return new Error('Id do produto inválido');
  }

  const key = type === 'cart' ? `cart-${cartHash}` : `product-${productId}`;

  localCache[zipcode] = localCache[zipcode] || {};
  const cache = localCache[zipcode];
  cache[key] = cache[key] || { expires: 0 };
  if (cache[key].expires < new Date()) {
    const result = await fetchProviders(type, zipcode, productId);
    cache[key].data = result;
    const timeout = result.lenght ? (1000 * 60) : 0;
    cache[key].expires = new Date(Date.now() + timeout);
  }

  return cache[key].data;
}
