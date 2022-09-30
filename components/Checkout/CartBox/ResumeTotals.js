import { format } from '@/helpers';

export function ResumeTotals({
  subTotal, total, freight, coupon, paymentDiscount, paymentFees, paymentTaxes, provider, installment,
}) {
  const {
    preco: freightPrice,
    id: freightProvider,
  } = freight || {};

  const {
    quantity, price,
  } = installment;

  return (
    <div className="checkout-resume--totals">
      <div className="totals--detailed">
        <div className="totals--detailed-item">
          <span className="totals--detailed-title">SUBTOTAL:</span>
          <span className="totals--detailed-value">{format.currency(subTotal)}</span>
        </div>
        {
          paymentDiscount > 0
          && (
            <div className="totals--detailed-item">
              <span className="totals--detailed-title">DESCONTO:</span>
              <span className="totals--detailed-value">{format.currency(paymentDiscount)}</span>
            </div>
          )
        }
        {
          paymentFees > 0 && (
            <div className="totals--detailed-item">
              <span className="totals--detailed-title">JUROS:</span>
              <span className="totals--detailed-value">{format.currency(paymentFees)}</span>
            </div>
          )
        }
        {
          (freightProvider || '').toLowerCase() === 'rl'
          && (
            <div className="totals--detailed-item">
              <span className="totals--detailed-title">FRETE:</span>
              <span className="totals--detailed-value">{freightPrice > 0 ? format.currency(freightPrice) : 'Retire Grátis'}</span>
            </div>
          )
        }
        {
          freightPrice > 0 && (
            <div className="totals--detailed-item">
              <span className="totals--detailed-title">FRETE:</span>
              <span className="totals--detailed-value">{format.currency(freightPrice)}</span>
            </div>
          )
        }
        {
          coupon > 0
          && (
            <div className="totals--detailed-item">
              <span className="totals--detailed-title">CUPOM:</span>
              <span className="totals--detailed-value">{format.currency(coupon)}</span>
            </div>
          )
        }
        {
          paymentTaxes > 0
          && (
            <div className="totals--detailed-item">
              <span className="totals--detailed-title">JUROS:</span>
              <span className="totals--detailed-value">{format.currency(paymentTaxes)}</span>
            </div>
          )
        }
      </div>
      {
        !!total && (
          <div className="totals--final">
            <span className="totals--final-title">TOTAL:</span>
            <span className="totals--final-value">{format.currency(total)}</span>
            {quantity && <span className="totals--final-installment">{`(${quantity} x ${format.currency(price)} - ${provider})`}</span>}
          </div>
        )
      }
    </div>
  );
}
