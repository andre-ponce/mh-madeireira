import { format } from '@/helpers';

export function CartTotals({ paymentDetails }) {
  const { subTotalAvista, valorParcelaSemJuros, parcelasSemJuros, descontoAvista } = paymentDetails;

  return (
    <div className="cart-container__subtotal">
      <span className="subtotal__title">SUBTOTAL</span>
      <div className="subtotal__prices">
        <span className="prices__price">{`${format.currency(subTotalAvista)}`}</span>
        {
          descontoAvista > 0
          && <span className="prices__price--subline">{`(à vista com ${descontoAvista}% de desconto)`}</span>
        }
        <span className="prices__installments">
          Ou em até
          {' '}
          <strong>{`${parcelasSemJuros}x`}</strong>
          {' '}
          de
          {' '}
          <strong>{`${format.currency(valorParcelaSemJuros)} (sem juros)`}</strong>
        </span>
      </div>
    </div>
  );
}
