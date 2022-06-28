import { CheckoutProvider } from '@/contexts/CheckoutContext';
import { useCheckoutSession } from '@/hooks/useCheckoutSession';
import { useEffect, useState } from 'react';
import { AddressBox } from './AddressBox';
import { DeliveryBox } from './DeliveryBox';
import { PaymentBox } from './PaymentBox';
import { DiscountBox } from './DiscountBox';
import { CartBox } from './CartBox';
import Modal from '../Modal';
import { PersonalBox } from './PersonalBox';

export function CheckoutMain() {
  const ckeckoutSession = useCheckoutSession();
  const { value, loading } = ckeckoutSession;

  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => { setFirstLoad(false); }, [value]);

  if (firstLoad && !value.loading) {
    return <div>Carregando...</div>;
  }

  return (
    <CheckoutProvider value={ckeckoutSession}>
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
      <main className={`fechamento container_serie-ds d-flex row ${loading ? 'loading' : ''}`}>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <PersonalBox />
          <AddressBox />
          <DeliveryBox />
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

export function postData() {
  return {
    enderecoEntrega: {},
    formaDeEnvio: {},
    cupomDeDesconto: {},
    formaDePagamento: {},
  };
}

export function getData() {

}
