import CheckoutContext from '@/contexts/CheckoutContext';
import { format } from '@/helpers';
import { useContext } from 'react';
import { CheckoutBox } from './CheckoutBox';

export function DeliveryBox() {
  const {
    value: {
      opcoesDeFrete: options,
      siglaOpcaoDeFrete,
    },
    setDelivery,
  } = useContext(CheckoutContext);

  async function choose(siglaProvider) {
    await setDelivery({ siglaProvider });
  }

  const isSelected = (id) => id.toLowerCase() === (siglaOpcaoDeFrete || '').toLowerCase();

  return (
    <CheckoutBox title="Formas de envio" icon="fa-truck">
      <div>
        {options && options.filter((x) => x.id.toUpperCase() !== 'RL').map(({
          id, provedor, preco, prazo,
        }) => (
          <DeliveryOption
            key={id}
            onChange={choose}
            id={id}
            name={provedor}
            price={preco}
            estimatedTime={prazo}
            selected={isSelected(id)}
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
  const message = `receba em até ${estimatedTime} dia(s)`;
  let description = name;
  if (id !== 'RL' && price === 0) {
    description = 'Frete Gratis';
  }

  return (
    <>
      <div className={`delivery__item ${selected ? 'delivery__item--active' : ''}`}>
        <div className="custom-control custom-radio">
          <input type="radio" defaultChecked={selected} name="delivery-method" id={id} onClick={() => onChange(id)} value={id} className="custom-control-input" />
          <label style={{ fontSize: '16px' }} className="custom-control-label" htmlFor={id}>
            <span className="delivery__item--nome">{description}</span>
            {price > 0 && <span className="delivery__item--preco">{format.currency(price)}</span>}
            {(id.toLowerCase() !== 'rl') && <span className="delivery__item--prazo">{`${message}`}</span>}
          </label>
        </div>
      </div>
    </>
  );
}
