import { useEffect, useState } from "react";
import { getCart } from "../services/cart.client";
import { onCartChange, offCartChange } from '../services/cart.observable'

export function useCart() {
  const [cart, setCart] = useState({ itens: [] });

  useEffect(() => {
    const handler = (newCart) => setCart(newCart);

    const fetchCart = async () => {
      const cart = await getCart()
      handler(cart);
    };

    fetchCart();
    onCartChange(handler);

    return () => offCartChange(handler);
  }, []);

  return cart;
}
