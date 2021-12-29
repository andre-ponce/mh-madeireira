export function CartTotals({ itens }) {
  return (
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
  );
}
