import { linkTo } from '@/helpers';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function useCheckoutSession() {
  const router = useRouter();
  const [lastUpdate, setLastUpdate] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState({});

  useEffect(() => {
    const handle = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/checkout');
        const json = await response.json();
        setValue(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    handle();
  }, [lastUpdate]);

  const setAddress = async (address) => {
    const res = await fetch('/api/checkout/address', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(address),
    });

    if (res.ok) {
      setLastUpdate(Date.now());
    }

    return res.json();
  };

  const setDelivery = (delivery) => {
    setValue({ ...value, delivery });
  };

  const setCoupon = async (coupon) => {
    const res = await fetch('/api/checkout/coupon', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ coupon }),
    });

    if (res.ok) {
      setLastUpdate(Date.now());
    }

    return res.json();
  };

  const finalize = async (payment) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payment),
      });

      if (response.ok) {
        const { codigoPedido } = await response.json();
        router.push(linkTo.orderConfirmation(codigoPedido));
        return [true];
      }
      return [false, 'falha ao finalizar o pedido'];
    } catch (ex) {
      return [false, 'falha ao finalizar o pedido'];
    } finally {
      setLoading(false);
    }
  };

  return {
    value,
    loading,
    error,
    setAddress,
    setDelivery,
    setCoupon,
    finalize,
  };
}
