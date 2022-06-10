import { useEffect, useState } from 'react';
import { getCart } from '@/services/cart.service';
import { observe, trigger } from '@/helpers/observable';

export function useCart() {
  const [initiated, setInitiated] = useState(false);
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState({ itens: [] });

  useEffect(() => {
    const fetchCart = async () => {
      if (busy && initiated) return;

      setBusy(true);
      setInitiated(true);
      setError(null);

      try {
        const cartData = await getCart();
        if (cartData.fail) {
          setError('Não foi possível carregar o carrinho.');
        } else {
          setCart(cartData);
          setError(null);
        }
      } catch {
        setError('Não foi possível carregar o carrinho.');
      } finally {
        setBusy(false);
      }
    };

    fetchCart();

    const offCartChanged = observe('cart:changed', fetchCart);
    const offCartRefresh = observe('cart:refresh', fetchCart);

    return () => {
      offCartChanged();
      offCartRefresh();
    };
  }, []);

  useEffect(() => {
    let id;

    if (error) {
      id = setTimeout(() => trigger('cart:refresh'), 5000);
    }

    return () => clearTimeout(id);
  }, [error]);

  return [cart, busy, error];
}
