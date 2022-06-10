import { format } from '@/helpers';

export function CartTotals({ itens }) {
  const total = itens.reduce((acc, item) => acc + item.precoTotal, 0);

  return (
    <div className="cart-container__subtotal">
      <span className="subtotal__title">SUBTOTAL</span>
      <div className="subtotal__prices">
        <span className="prices__price">{format.currency(total)}</span>
        <span className="prices__installments">
          Em até
          {' '}
          <strong>12x</strong>
          {' '}
          de
          {' '}
          <strong>{format.currency(total / 12.0)}</strong>
        </span>
      </div>
    </div>
  );
}
