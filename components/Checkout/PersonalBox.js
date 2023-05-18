import CheckoutContext from '@/contexts/CheckoutContext';
import { format } from '@/helpers';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CheckoutBox } from './CheckoutBox';

export function PersonalBox() {
  const { value: { cliente } } = useContext(CheckoutContext);

  const {
    nome,
    email,
    telefone,
    celular,
    documentoNacional,
  } = cliente || {};

  return (
    <>
      <CheckoutBox title="Dados do Comprador" icon="fa-user">
        <div className="personal-data">
          <span className="personal-data--row" style={{ textTransform: 'capitalize' }}>
            <span className="personal-data--icon">
              <FontAwesomeIcon icon="fa-user-circle" className="mr-3" />
            </span>
            {nome}
          </span>
          <span className="personal-data--row" style={{ textTransform: 'lowercase' }}>
            <span className="personal-data--icon">
              <FontAwesomeIcon icon="fa-envelope" className="mr-3" />
            </span>
            {email}
          </span>
          {
            !!(celular || telefone) && (
              <span className="personal-data--row">
                <span className="personal-data--icon">
                  <FontAwesomeIcon icon="fa-phone-alt" className="mr-3" />
                </span>
                {format.telephone(celular || telefone)}
              </span>
            )
          }
          <span className="personal-data--row">
            <span className="personal-data--icon">
              <FontAwesomeIcon icon="fa-id-card" className="mr-3" />
            </span>
            {format.brasilianDocument(documentoNacional)}
          </span>
        </div>
      </CheckoutBox>
    </>
  );
}
