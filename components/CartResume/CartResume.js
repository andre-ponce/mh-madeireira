import CartResumeItem from "./CartResumeItem";
import { isEmpty } from "lodash";

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
  return (
    <div className="cart">
      <img src="/images/cart.svg" alt="Carrinho" />
      <span className="cart__qtd">{itens.length}</span>
      <div className={`cart__cart-container block_hover ${isEmpty(itens) ? 'cart__cart-container--empty' : ''}`}>
        {
          isEmpty(itens)
            ? (
              <>
                <span className="cart-container__title">SEU CARRINHO ESTÁ VAZIO</span>
                <img src="/images/cart-empty.png" alt="carrinho vazio" />
              </>
            )
            : (
              <>
                <span className="cart-container__title">RESUMO DO SEU CARRINHO</span>
                <ul className="cart-container__items">
                  {
                    itens.map(item =>
                      <CartResumeItem item={item} />)
                  }
                </ul>
                <div className="cart-container__subtotal">
                  <span className="subtotal__title">SUBTOTAL</span>
                  <div className="subtotal__prices">
                    <span className="prices__price">R$ 999,99</span>
                    <span className="prices__installments">
                      Em até
                      <strong>12x</strong>
                      de
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


