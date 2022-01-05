import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { EmptyCart } from "./EmptyCart";
import { CartGrid } from "./CartGrid";

export function CartSideBar({ cart, closeSidebar }) {
  const [oppened, setOppened] = useState(false);
  const { itens } = cart;

  useEffect(() => {
    setOppened(true);
    const eventHandler = (event) => event.keyCode == 27 && close();
    window.addEventListener('keydown', eventHandler);
    return () => window.removeEventListener('keydown', eventHandler);
  }, []);

  const cartActiveClassName = oppened ? 'cart__cart-container--active' : '';

  const close = () => {
    setOppened(false);
    setTimeout(closeSidebar, 200);
  };

  return (
    <div className={`cart__cart-container block_hover ${cartActiveClassName} ${isEmpty(itens) ? 'cart__cart-container--empty' : ''}`}>
      <button className="navbar-toggler" type="button" onClick={close}>
        <img src="/images/icons-menu/close-menu.png" alt="menu" />
      </button>
      {isEmpty(itens)
        ? <EmptyCart />
        : <CartGrid cart={cart} closeMenu={close} />}
    </div>
  );
}
