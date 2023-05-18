import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Provider } from './Provider';

export function FreightData({
  address, clearAddress, providers, loading, reload,
}) {
  const {
    street, city, state,
  } = address;

  return (
    <>
      <div className="cart-freight--data">
        <span className="cart-freight--icon"><FontAwesomeIcon icon="fa-location-dot" /></span>
        <span className="cart-freight--address">{`${street} - ${city}/${state}`}</span>
        <span className="cart-freight--link" onClick={clearAddress}>alterar endereço</span>
      </div>
      {loading
        && (
          <div>
            Calculando frete...
            <span><FontAwesomeIcon icon="fa-spin fa-spinner" /></span>
          </div>
        )}
      {!loading
        && (
          <div className="cart-freight--providers">
            {providers?.length > 0
              && (
                <>
                  {providers.map(({
                    provedor, id, preco, prazo,
                  }) => <Provider key={id} name={provedor} price={preco} time={prazo} />)}
                  <span className="cart-freight--time-message">* os prazo de entrega começam a contar após a confirmação do pagamento.</span>
                </>
              )}
            {providers?.length === 0
              && (
                <div>
                  Nenhuma opção de frete encontrada para esse endereço
                  <span onClick={reload}><FontAwesomeIcon icon="fa-reload" /></span>
                </div>
              )}
          </div>
        )}
    </>
  );
}
