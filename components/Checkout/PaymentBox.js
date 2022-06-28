import CheckoutContext from '@/contexts/CheckoutContext';
import { isEmpty } from 'lodash';
import { useContext, useState } from 'react';
import { CheckoutBox } from './CheckoutBox';
import { PaymentOption } from './PaymentOption';

export function PaymentBox() {
  const checkout = useContext(CheckoutContext);
  const { value, paymentData, setPaymentData } = checkout;
  const { condicaoDePagamentos: groups } = value;
  const [chose, setChose] = useState({});

  return (
    <CheckoutBox title="Forma de pagamento" icon="fa-credit-card" higlight={false} invalid={false}>
      <div className="payment">
        <span className="payment--title">Selecione uma forma de pagamento:</span>
        {
          !isEmpty(groups)
          && groups.map((g) => (
            <PaymentOption
              key={g.slug}
              active={chose === g.slug}
              onChoose={setChose}
              onConfigure={setPaymentData}
              config={paymentData}
              data={g}
            />
          ))
        }
      </div>
    </CheckoutBox>
  );
}
