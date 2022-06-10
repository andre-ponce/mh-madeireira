import { format } from '@/helpers';
import { CardForm } from './CardForm';

/*
  Levar o formulário de cartao para um modal com submit
  o onClick do que está chando direto metodo externo, deve chamar uma
  função interna que pode, chamar o modal, passando um referencia para o submit.

  O submite deve enviar diretemente para o metodo externo, com os dados do cartão.
*/

export function PaymentOption({ choose, active, data }) {
  const { id, name } = data;
  let Details = () => <></>;

  if (id === 'credit-card') {
    Details = () => <CardForm {...data} />;
  } else if (id === 'debit-card') {
    Details = () => <CardForm {...data} />;
  } else if (id === 'boleto') {
    Details = () => <GenericForm title="Pagamento à vista no Boleto" newPrice={90} oldPrice={100} />;
  } else if (id === 'pix') {
    Details = () => <GenericForm title="Pagamento com PIX" newPrice={90} oldPrice={100} />;
  } else if (id === 'ted') {
    Details = () => <GenericForm title="Tranferência/Depósito bancário" newPrice={90} oldPrice={100} />;
  }

  return (
    <div className="payment-group--container">
      <div className="custom-control custom-radio">
        <input
          type="radio"
          id={id}
          value={id}
          checked={active}
          name="payment-mode"
          className="custom-control-input"
          onClick={() => choose(data)}
        />
        <label className="custom-control-label txt-gray ft-size-14" htmlFor={id}>{name}</label>
      </div>
      {active && (
        <div className="payment-details--container">
          <Details {...data} />
        </div>
      )}
    </div>
  );
}

function GenericForm({
  title, newPrice, oldPrice, children,
}) {
  const showOldPrice = oldPrice && oldPrice > newPrice;
  return (
    <>
      <div className="payment-details--generic">
        <span className="payment-details--generic-title">{title}</span>
        {showOldPrice && <span className="payment-details--generic-oldprice">{`de ${format.currency(oldPrice)}`}</span>}
        <span className="payment-details--generic-newprice">
          {showOldPrice ? 'por ' : ''}
          <span>{format.currency(newPrice)}</span>
          {' à vista'}
        </span>
        {children}
      </div>
    </>
  );
}

function InstallmentsForm({
  title, newPrice, oldPrice, children,
}) {
  return (
    <>
      <div className="payment-details--generic">
        <span className="payment-details--generic-title">{title}</span>
        {showOldPrice && <span className="payment-details--generic-oldprice">{`de ${format.currency(oldPrice)}`}</span>}
        <span className="payment-details--generic-newprice">
          {showOldPrice ? 'por ' : ''}
          <span>{format.currency(newPrice)}</span>
          {' à vista'}
        </span>
        {children}
      </div>
    </>
  );
}
