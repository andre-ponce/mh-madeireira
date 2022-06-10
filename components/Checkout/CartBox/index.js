/* eslint-disable jsx-quotes */
import CheckoutContext from '@/contexts/CheckoutContext';
import { trigger } from '@/helpers/observable';
import { useContext } from 'react';
import { CheckoutBox } from '../CheckoutBox';
import { ResumeItens } from './ResumeItens';
import { ResumeTotals } from './ResumeTotals';

export function CartBox() {
  const {
    finalize,
    value: { items },
  } = useContext(CheckoutContext);

  const onClick = () => trigger('cart:open', { hideFooter: true });

  return (
    <CheckoutBox title="Resumo do pedido" icon="fa-cart-shopping" action={{ text: 'abrir carrinho', onClick }}>
      <div className='checkout-resume--container'>
        <ResumeItens items={items || []} />
        <ResumeTotals />
        <div className="px-3">
          <button disabled={!finalize} onClick={finalize} type="button" className="btn-finish mt-4">FINALIZAR COMPRA</button>
        </div>
      </div>
    </CheckoutBox>
  );
}
