import { CartActions } from "./CartActions";
import CartResumeItem from "./CartResumeItem";
import { CartTotals } from "./CartTotals";

export function CartGrid({ cart, closeMenu }) {
  const { itens } = cart;
  return (
    <>
      <span className="cart-container__title">RESUMO DO SEU CARRINHO</span>
      <ul className="cart-container__items">
        {itens.map(item => <CartResumeItem key={item.id} item={item} />)}
      </ul>
      <CartTotals itens={itens} />
      <CartActions closeMenu={closeMenu} />
    </>
  );
}
