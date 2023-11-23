import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';
import { getAddress } from '@/server/api/address.api';
import { isEmpty } from 'lodash';
import { format } from '@/helpers';
import { useState } from 'react';
import { NewAddressModal } from '@/components/Checkout/NewAddressModal';
import { useRouter } from 'next/router';

export const getServerSideProps = withAuthorization(async (ctx) => {
  const { user, session } = ctx;
  const [global] = await getGlobalData();
  const [addresses] = await getAddress(session);
  return {
    props: {
      user,
      global,
      addresses,
    },
  };
});

export default function ClientAddresses({ addresses, global }) {
  return (
    <Layout secureArea globalData={global}>
      <main className="main main-enderecos app-container">
        <h2 className="page-title">Meus Endereços</h2>
        <div className="addresses">
          {
            isEmpty(addresses)
              ? <NoAddress />
              : <AddressesList addresses={addresses} />
          }
        </div>
      </main>
    </Layout>
  );
}

function AddressesList({ addresses }) {
  const [showingNewAdress, setShowingNewAdress] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="addresses--list">
        {
          !isEmpty(addresses)
          && addresses.map((address) => (
            <>
              <AddressItem
                key={address.id}
                address={address}
              />
            </>
          ))
        }
      </div>
      <button type="button" onClick={() => setShowingNewAdress(true)} className="new-address--button btn-secondary">
        Cadastrar outro endereço
      </button>
      {
        !!showingNewAdress
        && (
          <NewAddressModal
            onSubmit={() => router.reload()}
            onClose={() => setShowingNewAdress(false)}
          />
        )
      }
    </>
  );
}

function AddressItem({ address }) {
  const [showingNewAdress, setShowingNewAdress] = useState(false);
  const router = useRouter();
  const {
    bairro,
    cidade,
    complemento,
    ddd,
    destinatario,
    endereco,
    estado,
    identificacao,
    numero,
    telefone,
  } = address;

  return (
    <div className="addresses--item">
      <h3 className="item--title">{identificacao}</h3>
      <div className="item--content">
        <span className="item--adress">
          <span className="enderecos--destinatario">{`${destinatario}`}</span>
          <br />
          {`${endereco}, ${numero} ${complemento ? `(${complemento})` : ''}`}
          {` ${bairro} - ${cidade}/${estado}`}
          {` ${format.telephone(`${ddd}${telefone}`)}`}
        </span>
        <button className="item--action btn-default" type="button" onClick={() => setShowingNewAdress(true)}>
          Editar
        </button>
      </div>
      {
        !!showingNewAdress
        && (
          <NewAddressModal
            address={address}
            onSubmit={() => router.reload()}
            onClose={() => setShowingNewAdress(false)}
          />
        )
      }
    </div>
  );
}

function NoAddress() {
  return (
    <div className="addresses--empty">
      <span>Você não possuí endereços de entrega cadastrados</span>
      <button className="btn-secondary" type="button">Cadastrar Endereço</button>
    </div>
  );
}
