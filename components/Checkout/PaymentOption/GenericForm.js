import { format } from '@/helpers';
import { useEffect } from 'react';

export function GenericForm({
  title, provedores, onConfigure, children,
}) {
  const [provider] = provedores;

  const {
    condicoes: [
      {
        descontoPercentual, valorFinal, valorOriginal,
      },
    ],
  } = provider;

  useEffect(() => {
    onConfigure(provider);
  }, []);

  const showOldPrice = valorOriginal && valorOriginal > valorFinal;
  return (
    <>
      <div className="payment-details--generic">
        <span className="payment-details--generic-title">{title}</span>
        {showOldPrice && <span className="payment-details--generic-oldprice">{`de ${format.currency(valorOriginal)}`}</span>}
        <span className="payment-details--generic-newprice">
          {showOldPrice ? 'por ' : ''}
          <span>{format.currency(valorFinal)}</span>
          {' à vista'}
          {(descontoPercentual || 0) > 0 && `  com ${descontoPercentual}% de desconto`}
        </span>
        {children}
      </div>
    </>
  );
}
