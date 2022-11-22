import { format } from '@/helpers';

export function Provider({ price, time }) {
  let deliveryDescription = `Receba em até ${time} dias úteis`;
  if (time === 1) {
    deliveryDescription = `Receba em até ${time} dia útil`;
  }

  let priceText = 'Frete Grátis';
  if (price > 0) {
    priceText = `${format.currency(price)}`;
  }

  if (time === 0) {
    deliveryDescription = 'Retire na loja';
    if (price === 0) {
      priceText = 'Grátis';
    }
  }

  return (
    <>
      <div className="cart-freight--provider">
        <span className="cart-freight--description">{deliveryDescription}</span>
        <span className="cart-freight--price">
          {priceText}
        </span>
      </div>
    </>
  );
}
