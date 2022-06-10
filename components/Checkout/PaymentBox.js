import { useState } from 'react';
import { CheckoutBox } from './CheckoutBox';
import { PaymentOption } from './PaymentOption';

export function PaymentBox() {
  const groups = [
    { id: 'credit-card', name: 'Cartão de crédito' },
    { id: 'debit-card', name: 'Cartão de débito' },
    { id: 'boleto', name: 'Boleto' },
    { id: 'pix', name: 'PIX' },
    { id: 'ted', name: 'Transferência bancária' },
  ];

  const [group, setGroup] = useState();

  return (
    <CheckoutBox title="Forma de pagamento" icon="fa-credit-card" higlight={false} invalid={false}>
      <div className="payment">
        <span className="payment--title">Selecione uma forma de pagamento:</span>
        {
          groups.map((g) => (
            <PaymentOption
              key={g.id}
              active={group && group.id === g.id}
              choose={setGroup}
              data={g}
            />
          ))
        }
      </div>
    </CheckoutBox>
  );
}
