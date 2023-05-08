import { CheckoutProvider } from '@/contexts/CheckoutContext';
import { useCheckoutSession } from '@/hooks/useCheckoutSession';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AddressBox } from './AddressBox';
import { DeliveryBox } from './DeliveryBox';
import { PaymentBox } from './PaymentBox';
import { DiscountBox } from './DiscountBox';
import { CartBox } from './CartBox';
import Modal from '../Modal';
import { PersonalBox } from './PersonalBox';
import { PickUpInStoreBox } from './PickUpInStoreBox';
import { PaymentProviderScripts } from './PaymentProviderScripts';

export function CheckoutMain() {
  const ckeckoutSession = useCheckoutSession();
  const { value, loading } = ckeckoutSession;
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => { if (!loading) setFirstLoad(false); }, [loading]);

  if (firstLoad) {
    return <div>Carregando...</div>;
  }

  if (value.carrinho?.itens.length === 0) {
    return (
      <main className="fechamento">
        <div className="empty-cart">
          <h3>Seu carrinho está vazio</h3>
          <Link href="/">Voltar para a Home</Link>
        </div>
      </main>
    );
  }

  const { retirarNaLoja, enderecoDeEntrega } = value || {};

  return (
    <CheckoutProvider value={ckeckoutSession}>
      <PaymentProviderScripts />
      {
        loading && (
          <Modal>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#444',
              height: '100vh',
            }}
            >
              <i className="fa-solid fa-spin fa-spinner" style={{ fontSize: '3em' }} />
            </div>
          </Modal>
        )
      }
      <main className={`fechamento app-container d-flex row ${loading ? 'loading' : ''}`}>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <PersonalBox />
          {retirarNaLoja && <PickUpInStoreBox />}
          {!retirarNaLoja && <AddressBox />}
          {!retirarNaLoja && enderecoDeEntrega && <DeliveryBox />}
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12">
          <div className="row">
            <div className="col">
              <DiscountBox />
              <PaymentBox />
            </div>
            <div className="col">
              <CartBox />
            </div>
          </div>
        </div>
      </main>
    </CheckoutProvider>
  );
}
