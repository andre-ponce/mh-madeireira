import { useCheckoutSession } from '@/hooks/useCheckoutSession';
import Script from 'next/script';
import { isEmpty } from 'lodash';

export function PaymentProviderScripts() {
  const ckeckoutSession = useCheckoutSession();
  const { value: { condicaoDePagamentos } } = ckeckoutSession;

  const providers = condicaoDePagamentos
    ?.flatMap(({ provedores }) => provedores.map(({ provedor }) => provedor));

  if (isEmpty(providers)) {
    return <></>;
  }

  if (providers.includes('pag-seguro')) {
    return <Script src="https://stc.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js" />;
  }

  return <></>;
}
