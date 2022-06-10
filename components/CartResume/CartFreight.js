/* eslint-disable jsx-quotes */
import { format } from '@/helpers';
import { useFreightSimulator } from '@/hooks/useFreightSimulator';
import { useState } from 'react';
import ReactInputMask from 'react-input-mask';

export function CartFreight() {
  const {
    address, providers, busy, error, changeAddress, reloadProviders,
  } = useFreightSimulator({ type: 'cart' });

  return (
    <>
      <div className="cart-freight--container">
        {!address && <FreightForm submit={changeAddress} busy={busy} error={error} />}
        {
          address
          && (
            <FreightData
              address={address}
              providers={providers}
              reload={reloadProviders}
              loading={busy}
              clearAddress={() => changeAddress(null)}
            />
          )
        }
      </div>
    </>
  );
}

function FreightForm({ submit, busy, error }) {
  const [cep, setCep] = useState('');

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      submit(cep);
    }
  }

  return (
    <>
      <span className="cart-freight--title">Consultar prazo e valor do frete</span>
      <div className="cart-freight--form">
        <ReactInputMask value={cep} onKeyDown={handleKeyDown} onChange={(e) => setCep(e.target.value)} mask="99999-999" type="text" inputMode="numeric" maskChar="" />
        <button type="button" onClick={() => submit(cep)}>
          {busy && (<span><i className="fa-solid fa-spin fa-spinner" /></span>)}
          {!busy && (<span><i className="fa-solid fa-calculator" /></span>)}
        </button>
        <span className="cart-freight--link-correios">
          <a
            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            target="_blank"
            rel="noreferrer"
          >
            Não sei meu CEP
          </a>
        </span>
      </div>
      {error && <div className="cart-freight--cep-not-found">{error}</div>}
    </>
  );
}

function FreightData({
  address, clearAddress, providers, loading, reload,
}) {
  const {
    street,
    city,
    state,
  } = address;

  return (
    <>
      <div className="cart-freight--data">
        <span className="cart-freight--icon"><i className='fa-solid fa-location-dot' /></span>
        <span className="cart-freight--address">{`${street} - ${city}/${state}`}</span>
        <span className="cart-freight--link" onClick={clearAddress}>alterar endereço</span>
      </div>
      {
        loading
        && (
          <div>
            Calculando frete...
            <span><i className="fa-solid fa-spin fa-spinner" /></span>
          </div>
        )
      }
      {
        !loading
        && (
          <div className="cart-freight--providers">
            {
              providers?.length > 0
              && (
                <>
                  {
                    providers.map(({
                      provedor, id, preco, prazo,
                    }) => <Provider key={id} name={provedor} price={preco} time={prazo} />)
                  }
                  <span className='cart-freight--time-message'>* os prazo de entrega começas a contar após a confirmação do pagamento.</span>
                </>
              )
            }
            {
              providers?.length === 0
              && (
                <div>
                  Nenhuma opção de frete encontrada para esse endereço
                  <span onClick={reload}><i className="fa-solid fa-reload" /></span>
                </div>
              )
            }
          </div>
        )
      }
    </>
  );
}

function Provider({ price, time }) {
  let deliveryDescription = `Receba em até ${time} dias úteis`;
  if (time === 1) {
    deliveryDescription = `Receba em até ${time} dia útil`;
  }

  if (time === 0) {
    deliveryDescription = 'Retire na loja';
  }

  let priceText = 'Frete Grátis';
  if (price > 0) {
    priceText = `${format.currency(price)}`;
  }

  return (
    <>
      <div className="cart-freight--provider">
        <span className="cart-freight--description">{deliveryDescription}</span>
        <span className="cart-freight--price">
          {priceText}
        </span>
      </div>
    </>
  );
}
