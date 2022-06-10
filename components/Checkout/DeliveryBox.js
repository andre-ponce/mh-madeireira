import CheckoutContext from '@/contexts/CheckoutContext';
import { format } from '@/helpers';
import { useContext } from 'react';
import { CheckoutBox } from './CheckoutBox';

export function DeliveryBox() {
  const { value: { opcoesDeFrete: options, siglaOpcaoFrete } } = useContext(CheckoutContext);

  function choose(provider) {
    // do a fetch to get the delivery price
  }

  return (
    <CheckoutBox title="Formas de envio" icon="fa-truck">
      <div>
        {options && options.map((option) => (
          <DeliveryOption
            key={option.ID}
            onChange={choose}
            {...option}
            selected={option.id === siglaOpcaoFrete}
          />
        ))}
      </div>
    </CheckoutBox>
  );
}

function DeliveryOption({
  id,
  name,
  price,
  estimatedTime,
  selected,
  onChange,
}) {
  return (
    <>
      <div className={`delivery__item ${selected ? 'delivery__item--active' : ''}`}>
        <div className="custom-control custom-radio">
          <input type="radio" checked={selected} name="delivery-method" id={id} onChange={() => onChange(id)} value={id} className="custom-control-input" />
          <label style={{ fontSize: '16px' }} className="custom-control-label" htmlFor={id}>
            <span className="delivery__item--nome">{name}</span>
            <span className="delivery__item--preco">{format.currency(price)}</span>
            <span className="delivery__item--prazo">{`${estimatedTime}`}</span>
          </label>
        </div>
      </div>
    </>
  );
}
