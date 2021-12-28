import CartResumeItem from "./CartResumeItem";
import { isEmpty } from "lodash";
import { useState } from "react";
import useFixedShadow from "../../hooks/useFixedShadow";
import { EmptyCart } from "./EmptyCart";

const itens = [
  {
    id: '1',
    image: '/images/home/product-mini-cart.png',
    name: 'Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
    quantity: 1,
    price: 'R$ 999,99'
  },
  {
    id: '2',
    image: '/images/home/product-mini-cart.png',
    name: 'Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
    quantity: 2,
    price: 'R$ 9,99'
  }
  , {
    id: '3',
    image: '/images/home/product-mini-cart.png',
    name: 'Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
    quantity: 1,
    price: 'R$ 999.999,99'
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
            ? (
              <EmptyCart />
            )
            : (
              <>
                <span className="cart-container__title">RESUMO DO SEU CARRINHO</span>
                <ul className="cart-container__items">
                  {
                    itens.map(item =>
                      <CartResumeItem key={item.id} item={item} />)
                  }
                </ul>
                <div className="cart-container__subtotal">
                  <span className="subtotal__title">SUBTOTAL</span>
                  <div className="subtotal__prices">
                    <span className="prices__price">R$ 999,99</span>
                    <span className="prices__installments">
                      Em até {' '}
                      <strong>12x</strong> {' '}
                      de {' '}
                      <strong>R$ R$ 999,99</strong>
                    </span>
                  </div>
                </div>
                <div className="cart-container__actions">
                  <a href="/" className="actions__return">Ir para o carrinho</a>
                  <a href="/" className="actions__buy"> FINALIZAR COMPRA </a>
                </div>
              </>
            )
        }
      </div>
    </div>
  );
}
