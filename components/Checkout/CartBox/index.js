import CheckoutContext from '@/contexts/CheckoutContext';
import { trigger } from '@/helpers/observable';
import { useContext, useState } from 'react';
import { CheckoutBox } from '../CheckoutBox';
import { ResumeItens } from './ResumeItens';
import { ResumeTotals } from './ResumeTotals';

export function CartBox() {
  const {
    finalize,
    vaidationResult: [valid, , error],
    paymentData,
    value: {
      carrinho,
      freteEscolhido,
    },
  } = useContext(CheckoutContext);
  const [showErrors, setShowErrors] = useState();

  const {
    subTotal,
    itens,
  } = carrinho || {};

  const {
    nome: paymentProvider,
    condicoes: [payment],
  } = { nome: '', condicoes: [], ...paymentData };

  const {
    parcela,
    valorParcela,
    valorFinal,
    valorOriginal,
  } = payment || {};

  const onClick = () => trigger('cart:open', { hideFooter: true });
  const onFinalize = async () => {
    setShowErrors(true);
    if (valid) {
      await finalize();
    }
  };

  return (
    <CheckoutBox title="Resumo do pedido" icon="fa-cart-shopping" action={{ text: 'abrir carrinho', onClick }}>
      <div className="checkout-resume--container">
        <ResumeItens items={itens || []} />
        <ResumeTotals
          total={valorFinal}
          coupon={0}
          paymentDiscount={valorOriginal - valorFinal}
          paymentTaxes={0}
          subTotal={subTotal}
          freight={freteEscolhido}
          provider={paymentProvider}
          installment={{ quantity: parcela, price: valorParcela }}
        />
        <div className="px-3">
          <button disabled={!valid && showErrors} onClick={onFinalize} type="button" className="btn-finish mt-4">FINALIZAR COMPRA</button>
          {!!showErrors && <div className="text-center mt-3 text-danger">{error}</div>}
        </div>
      </div>
    </CheckoutBox>
  );
}
