import { useEffect, useState } from 'react';
import { format } from '@/helpers';
import ReactInputMask from 'react-input-mask';
import { useFreightSimulator } from '@/hooks/useFreightSimulator';

export function ProductFreightSimulator({ productId }) {
  const {
    address, busy, error, changeAddress, providers,
  } = useFreightSimulator({ productId });

  return (
    <div className="freigth-simulator--container">
      <ProductFreightSimulatorInput initialCep={address?.cep} submit={(cep) => changeAddress(cep)} />
      <div>
        {providers
          && providers.map((freight) => (
            <div key={freight.id} className="cep__freight">
              <span>{freight.provedor}</span>
              <span>{format.currency(freight.preco)}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

function ProductFreightSimulatorInput({ initialCep, submit }) {
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
        <button type="button" onClick={() => submit(cep)}>CALCULAR</button>
      </div>
      <a className="freigth-form--link" href>Não sei meu CEP</a>
    </div>
  )
};
