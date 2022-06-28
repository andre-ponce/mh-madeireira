import { linkTo } from '@/helpers';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  setCoupon,
  setDelivery,
  setAddress,
  finalize,
  getCheckout,
} from '@/services/checkout.service';
import { observe } from '@/helpers/observable';
import { isEmpty } from 'lodash';

export function useCheckoutSession() {
  const router = useRouter();
  const [lastUpdate, setLastUpdate] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [value, setValue] = useState({ loading: true });
  const [paymentData, setPaymentData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { id } = paymentData || {};
        const context = await getCheckout(id);
        setValue(context);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lastUpdate]);

  useEffect(() => observe('cart:changed', () => setLastUpdate(new Date())), []);

  const chooseDeliveryAddress = async (address) => {
    const { error: _error, ...res } = await setAddress(address);

    if (_error) {
      setError(_error);
      return {};
    }

    setLastUpdate(Date.now());

    return res;
  };

  const chooseDeliveryOptions = async (delivery) => {
    const { error: _error, ...res } = await setDelivery(delivery);

    if (_error) {
      setError(_error);
      return {};
    }

    setLastUpdate(Date.now());

    return res;
  };

  const applyCoupon = async (coupon) => {
    const { error: _error, ...res } = await setCoupon(coupon);

    if (_error) {
      setError(_error);
      return {};
    }

    setLastUpdate(Date.now());

    return res;
  };

  const tryFinalize = async () => {
    const [valid, stage, validationError] = validateCheckoutSession();
    if (!valid) {
      return [false, validationError, stage];
    }

    setLoading(true);
    setError('');

    if (loading) return [false, 'Carregando...'];

    const {
      siglaOpcaoDeFrete,
      enderecoDeEntregaId,
      codigoCupomDesconto,
      freteEscolhido,
    } = value;

    const { id: choseFreigt } = freteEscolhido || {};
    const retiraNaLoja = (choseFreigt || '').toLowerCase() !== siglaOpcaoDeFrete.toLowerCase();
    const {
      id: paymentId, condicoes, card,
    } = paymentData;

    const [{ valorParcela }] = condicoes;

    const payload = {
      meioDePagamentoId: paymentId,
      enderecoDeEntregaId,
      retiraNaLoja,
      meioDeEntregaId: siglaOpcaoDeFrete,
      codigoCupom: codigoCupomDesconto,
    };

    if (card) {
      const {
        number,
        issuer,
        name,
        month,
        year,
        cvv,
        installments,
      } = card;

      payload.dadosCartao = {
        numero: number,
        titular: name,
        bandeira: issuer,
        mesVencimento: month,
        anoVencimento: year,
        cvv,
        numeroDeParcelas: installments,
        valorDaParcela: valorParcela,
      };
    }

    const { error: _error, ...res } = await finalize(payload);

    if (_error) {
      setError(_error);
      return [false, 'falha ao finalizar o pedido'];
    }

    const { codigoPedido } = res;
    router.push(linkTo.orderConfirmation(codigoPedido));
    return [true];
  };

  function validateCheckoutSession() {
    if (!value) {
      return { result: false };
    }

    const {
      siglaOpcaoDeFrete,
      enderecoDeEntregaId,
      codigoCupomDesconto,
      cupomDeDesconto,
      freteEscolhido,
      condicaoDePagamentos,
      carrinho,
      cliente
    } = value;

    if (!siglaOpcaoDeFrete) {
      return [false, 'freight', 'Escolha um opção de entrega'];
    }

    const { id: choseFreigt } = freteEscolhido || {};
    if (!choseFreigt || choseFreigt.toLowerCase() !== siglaOpcaoDeFrete.toLowerCase()) {
      return [false, 'freight', 'Escolha um opção de entrega'];
    }

    if (!enderecoDeEntregaId && siglaOpcaoDeFrete.toLowerCase() !== 'rl') {
      return [false, 'address', 'Escolha um endereço de entrega'];
    }

    if (!paymentData) {
      return [false, 'payment', 'Escolha um meio de pagamento'];
    }

    const {
      id: paymentId, condicoes, card,
    } = paymentData;
    if (!paymentId) {
      return [false, 'payment', 'Escolha um meio de pagamento'];
    }

    if (isEmpty(condicoes)) {
      return [false, 'payment', 'Revise as informações de pagamento'];
    }

    if (!isEmpty(card) && !card.valid) {
      return [false, 'payment', 'Revise as informações de pagamento'];
    }

    return [true, '', ''];
  }

  const configurePayment = (data) => {
    setPaymentData(data);
    setLastUpdate(new Date());
  };

  return {
    value,
    loading,
    error,
    setAddress: chooseDeliveryAddress,
    setDelivery: chooseDeliveryOptions,
    setCoupon: applyCoupon,
    finalize: tryFinalize,
    paymentData,
    setPaymentData: configurePayment,
  };
}
