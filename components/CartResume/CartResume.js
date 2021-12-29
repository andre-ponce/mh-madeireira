import CartResumeItem from "./CartResumeItem";
import { isEmpty } from "lodash";
import { useState } from "react";
import useFixedShadow from "../../hooks/useFixedShadow";
import { EmptyCart } from "./EmptyCart";
import { CartGrid } from "./CartGrid";

const itens = [
  {
    id: '1',
    image: '/images/home/product-mini-cart.png',
    name: 'Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
    quantity: 1,
    unityPrice: 999.99
  },
  {
    id: '2',
    image: '/images/home/product-mini-cart.png',
    name: 'Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
    quantity: 2,
    unityPrice: 9.99
  }
  , {
    id: '3',
    image: '/images/home/product-mini-cart.png',
    name: 'Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
    quantity: 1,
    unityPrice: 999999.99
  }
];

export default function CartResume() {
  const [cartResumeActive, setCartResumeActive] = useState(false);
  const { addShadow, popShadow } = useFixedShadow();

  const cartActiveClassName = cartResumeActive ? 'cart__cart-container--active' : '';;

  function toogleSideBar(status) {
    setCartResumeActive(status);
    status ? addShadow() : popShadow();
  }

  return (
    <div className="cart">
      <span className="cart__icon_group" onClick={() => toogleSideBar(true)}>
        <img src="/images/cart.svg" alt="Carrinho" />
        <span className="cart__qtd">{itens.length}</span>
      </span>

      <div className={`cart__cart-container block_hover ${cartActiveClassName} ${isEmpty(itens) ? 'cart__cart-container--empty' : ''}`}>
        <button className="navbar-toggler" type="button" onClick={() => toogleSideBar(false)}>
          <img src="/images/icons-menu/close-menu.png" alt="menu" />
        </button>
        {
          isEmpty(itens)
            ? <EmptyCart />
            : <CartGrid itens={itens} />
        }
      </div>
    </div>
  );
}
