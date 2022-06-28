import CheckoutContext from '@/contexts/CheckoutContext';
import { format } from '@/helpers';
import { useContext, useState } from 'react';
import { CheckoutBox } from './CheckoutBox';
import { ChooseAddressModal } from './ChooseAddressModal';
import { NewAddressModal } from './NewAddressModal';

export function AddressBox() {
  const [showingAdresses, setShowingAdresses] = useState(false);
  const [showingNewAdress, setShowingNewAdress] = useState(false);

  const { value: { enderecoDeEntrega }, setAddress } = useContext(CheckoutContext);
  const {
    endereco,
    numero,
    bairro,
    cidade,
    estado,
    complemento,
    destinatario,
    identificacao,
    telefone,
    ddd,
  } = enderecoDeEntrega || {};

  return (
    <>
      <CheckoutBox icon="fa-map-marker-alt" title="Endereço de entrega">
        {
          enderecoDeEntrega && (
            <div className="enderecos--escolhido">
              <span className="enderecos--itentificacao">
                <span className="mr-2"><i className="fa-solid fa-arrow-right" /></span>
                {identificacao}
              </span>
              <span>
                <small className="enderecos--destinatario">{`${destinatario}`}</small>
                <br />
                {`${endereco}, ${numero} ${complemento ? `(${complemento})` : ''}`}
                <br />
                {`${bairro} - ${cidade}/${estado}`}
                <br />
                {`${format.telephone(`${ddd}${telefone}`)}`}
              </span>
            </div>
          )
        }

        <div className="mt-3">
          <button type="button" className="button-black mb-4" onClick={() => setShowingAdresses(true)}>{enderecoDeEntrega ? 'Selecionar outro endereço' : 'Selecionar endereço'}</button>
          <button type="button" className="button-black" onClick={() => setShowingNewAdress(true)}>Adicionar outro endereço</button>
        </div>

        <p style={{ color: '#f00' }}>PREFIRO RETIRAR NA LOJA</p>

        {!!showingNewAdress
          && <NewAddressModal onSubmit={setAddress} onClose={() => setShowingNewAdress(false)} />}

        {!!showingAdresses
          && (
            <ChooseAddressModal
              onSubmit={setAddress}
              onClose={() => setShowingAdresses(false)}
              newAddres={() => {
                setShowingAdresses(false);
                setShowingNewAdress(true);
              }}
            />
          )
        }
      </CheckoutBox>
    </>
  );
}
