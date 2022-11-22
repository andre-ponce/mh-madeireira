import { useState } from 'react';
import ReactInputMask from 'react-input-mask';

export function FreightForm({ submit, busy, error }) {
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
