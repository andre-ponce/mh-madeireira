import CheckoutContext from '@/contexts/CheckoutContext';
import { trigger } from '@/helpers/observable';
import { useContext } from 'react';
import { CheckoutBox } from '../CheckoutBox';
import { ResumeItens } from './ResumeItens';
import { ResumeTotals } from './ResumeTotals';

export function CartBox() {
  const {
    finalize,
    paymentData,
    value: {
      carrinho,
      freteEscolhido,
    },
  } = useContext(CheckoutContext);

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
    semJuros,
    descontoPercentual,
    taxaPercentual,
  } = payment || {};

  const onClick = () => trigger('cart:open', { hideFooter: true });

  return (
    <CheckoutBox title="Resumo do pedido" icon="fa-cart-shopping" action={{ text: 'abrir carrinho', onClick }}>
      <div className="checkout-resume--container">
        <ResumeItens items={itens || []} />
        <ResumeTotals
          total={valorFinal || subTotal}
          coupon={0}
          paymentDiscount={valorOriginal - valorFinal}
          paymentTaxes={0}
          subTotal={subTotal}
          freight={freteEscolhido}
          provider={paymentProvider}
          installment={{ quantity: parcela, price: valorParcela }}
        />
        <div className="px-3">
          <button disabled={!finalize} onClick={finalize} type="button" className="btn-finish mt-4">FINALIZAR COMPRA</button>
        </div>
      </div>
    </CheckoutBox>
  );
}
