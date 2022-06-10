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

  if (firstLoad && !value) {
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
        {/* <div className="fechamento__group-infos col-12 col-md-6 col-lg-4 mb-3 px-0 d-flex flex-column">
          <PersonalBox />
          <AddressBox />
          <DeliveryBox />
        </div>

        <div className="col-12 col-md-6 col-lg-8 px-0 d-flex flex-wrap">
          <div className="group-descount-payment col-sm-12 col-lg-6 mb-3 px-0">
            <DiscountBox />
          </div>
          <CartBox />
        </div> */}
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
