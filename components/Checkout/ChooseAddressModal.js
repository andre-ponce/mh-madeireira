import { FloatBox } from '@/components/Modal/Modal';
import { format } from '@/helpers';
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';

export function ChooseAddressModal({ onClose, onSubmit, newAddres }) {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  async function choose(address) {
    setLoading(true);
    try {
      const { fail } = await onSubmit(address);
      if (fail) {
        return { fail };
      }

      onClose();
      return {};
    } catch (e) {
      return { fail: 'Contate nosso suporte' };
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const handle = async () => {
      const res = await fetch('/api/clients/address');
      const list = await res.json();
      setAddresses(list);
      setLoaded(true);
    };

    handle();
  }, []);

  const title = isEmpty(addresses) ? '' : 'Escolher Endereço de Entrega';

  return (
    <FloatBox handleHide={onClose} canClose title={title}>
      <div className="change-address--container">
        {
          !isEmpty(addresses)
          && addresses.map((address) => (
            <AddressDetail key={address.id} onClick={choose} address={address} disabled={loading} />
          ))
        }
        {
          isEmpty(addresses) && loaded
          && (
            <div className="change-address--empty">
              <span>Você ainda não possuí endereços de entrega cadastrados</span>
              <button type="button" onClick={newAddres}>Cadastrar Endereço</button>
            </div>
          )
        }
        {
          !loaded
          && (
            <div className="change-address--empty">
              <span><i className="fa-solid fa-spin fa-spinner" /></span>
              <span>Carregando...</span>
            </div>
          )
        }
      </div>
    </FloatBox>
  );
}

function AddressDetail({ address, onClick, disabled }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
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

  async function post(data) {
    setLoading(true);
    const { fail } = await onClick(data);
    if (fail) {
      setError(fail);
      setLoading(false);
    }
  }

  return (
    <div className="enderecos__list--item">
      <h3 className="item--title">{identificacao}</h3>
      <div className="item--content">
        <span className="item--adress">
          <span className="enderecos--destinatario">{`${destinatario}`}</span>
          <br />
          {`${endereco}, ${numero} ${complemento ? `(${complemento})` : ''}`}
          <br />
          {`${bairro} - ${cidade}/${estado}`}
          <br />
          {`${format.telephone(`${ddd}${telefone}`)}`}
        </span>
        <button className="item--action" type="button" onClick={() => post(address)} disabled={loading || disabled}>
          {
            loading
              ? 'Aguarde...'
              : 'Entregar nesse Endereço'
          }
        </button>
      </div>
      {error && <p className="text-danger mt-1 text-right">{error}</p>}
    </div>
  );
}
