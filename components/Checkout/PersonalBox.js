import CheckoutContext from '@/contexts/CheckoutContext';
import { format } from '@/helpers';
import { useContext } from 'react';
import { CheckoutBox } from './CheckoutBox';

export function PersonalBox() {
  const { value: { cliente } } = useContext(CheckoutContext);

  const {
    nome,
    email,
    telefone,
    documentoNacional,
  } = cliente || {};

  return (
    <>
      <CheckoutBox title="Dados do Comprador" icon="fa-user">
        <div className="personal-data">
          <span className="personal-data--row" style={{ textTransform: 'capitalize' }}>
            <span className="personal-data--icon">
              <i className="mr-3 fas fa-user-circle" />
            </span>
            {nome}
          </span>
          <span className="personal-data--row" style={{ textTransform: 'lowercase' }}>
            <span className="personal-data--icon">
              <i className="mr-3 fas fa-envelope" />
            </span>
            {email}
          </span>
          <span className="personal-data--row">
            <span className="personal-data--icon">
              <i className="mr-3 fas fa-phone-alt" />
            </span>
            {format.telephone(telefone)}
          </span>
          <span className="personal-data--row">
            <span className="personal-data--icon">
              <i className="mr-3 fas fa-id-card" />
            </span>
            {format.brasilianDocument(documentoNacional)}
          </span>
        </div>
      </CheckoutBox>
    </>
  );
}
