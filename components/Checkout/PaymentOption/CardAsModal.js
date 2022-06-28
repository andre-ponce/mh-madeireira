import { FloatBox } from '@/components/Modal/Modal';
import { useEffect, useState } from 'react';
import { CardForm } from '../CardForm';

export function CardAsModal({ data, onConfigure, config }) {
  const [active, setActive] = useState(true);
  const { card, nome } = config || {
    nome: 'Pagar com Cartão de Crédito',
    card: {
      number: '',
      issuer: '',
      name: '',
      month: '',
      year: '',
      cvv: '',
      installments: '',
    },
  };

  useEffect(() => {
    onConfigure({ nome: 'Pagar com Cartão de Crédito' });
  }, []);

  function save(provider) {
    setActive(false);
    onConfigure(provider);
  }

  const invalid = !config?.card?.valid && !active;

  return (
    <>
      <div className="payment-details--generic">
        <span className="payment-details--generic-title">
          {nome}
        </span>
        <span className={`payment-details--generic-link ${invalid ? 'invalid' : ''}`} onClick={() => setActive(true)}>
          {invalid ? (<span className="payment-details--generic-icon"><i className="fa-solid fa-triangle-exclamation" /></span>) : <></>}
          {
            invalid ? 'Preencher dados do cartão' : 'Revisar dados do cartão'
          }
        </span>

        {/* <span className="payment-details--generic-newprice">
          <span>{format.currency(valorFinal)}</span>
          {' à vista'}
          {` (${descontoPercentual}% de desconto)`}
        </span> */}

      </div>
      {active
        && (
          <FloatBox title="Dados do Cartão" className="card-form--modal" canClose handleHide={() => setActive(false)}>
            <CardForm
              {...data}
              onConfigure={save}
              savedValues={card}
              onCancel={() => setActive(false)}
            />
          </FloatBox>
        )}
    </>
  );
}
