import { PaymentDetails } from './PaymentDetails';

export function PaymentOption({
  onChoose,
  onConfigure,
  config,
  active,
  data,
}) {
  const { nome, slug } = data;

  return (
    <div className="payment-group--container">
      <div className="custom-control custom-radio">
        <input
          type="radio"
          id={slug}
          value={slug}
          defaultChecked={active}
          name="payment-mode"
          className="custom-control-input"
          onChange={() => onChoose(slug)}
        />
        <label className="custom-control-label ft-size-14" htmlFor={slug}>{nome}</label>
      </div>
      {active && (
        <div className="payment-details--container">
          <PaymentDetails data={data} onConfigure={onConfigure} config={config} />
        </div>
      )}
    </div>
  );
}
