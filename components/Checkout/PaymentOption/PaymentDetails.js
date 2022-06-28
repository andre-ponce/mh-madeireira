import { CardForm } from '../CardForm';
import { CardAsModal } from './CardAsModal';
import { GenericForm } from './GenericForm';

export function PaymentDetails({ onConfigure, config, data }) {
  const { slug } = data;

  if (slug === 'credit-card') {
    return <CardAsModal data={data} onConfigure={onConfigure} config={config} />;
  }

  if (slug === 'debit-card') {
    return <CardForm {...data} onConfigure={onConfigure} config={config} />;
  }

  if (slug === 'boleto') {
    return <GenericForm title="Pagamento à vista no Boleto" {...data} onConfigure={onConfigure} />;
  }

  if (slug === 'pix') {
    return <GenericForm title="Pagamento com PIX" {...data} onConfigure={onConfigure} />;
  }

  if (slug === 'ted') {
    return <GenericForm title="Tranferência/Depósito bancário" {...data} onConfigure={onConfigure} />;
  }

  return <></>;
}
