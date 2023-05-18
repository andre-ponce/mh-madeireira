import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import ReactInputMask from 'react-input-mask';

export function ProductFreightSimulatorInput({ initialCep, submit, busy }) {
  const [cep, setCep] = useState('');

  useEffect(() => {
    setCep(initialCep);
  }, [initialCep]);

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      submit(cep);
    }
  }

  return (
    <div className="freigth-form--container">
      <div className="freigth-form--input">
        <ReactInputMask
          type="text"
          inputMode="numeric"
          mask="99999-999"
          onKeyDown={handleKeyDown}
          maskChar=""
          value={cep}
          onChange={(e) => setCep(e.target.value)} />
        <button type="button" onClick={() => submit(cep)}>
          {!busy && <span key="calcular">CALCULAR</span>}
          {!!busy && <span key="calculando"><FontAwesomeIcon icon="fa-spin fa-spinner" /></span>}
        </button>
      </div>
      <a
        className="freigth-form--link"
        href="https://buscacepinter.correios.com.br/app/endereco/index.php"
        target="_blank"
        rel="noreferrer"
      >
        Não sei meu CEP
      </a>
    </div>
  );
}
