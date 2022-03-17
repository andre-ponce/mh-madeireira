export function CartIcon({ count, openResume }) {
  return (
    <span className="cart__icon_group" onClick={openResume}>
      <img src="/images/cart.svg" alt="Carrinho" />
      <span className="cart__qtd">{count}</span>
    </span>
  );
}
