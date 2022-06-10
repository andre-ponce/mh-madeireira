import { findAddress } from '@/services/cep.service';
import { calculateFreight } from '@/services/freight.service';
import { useEffect, useState } from 'react';
import { useJSONStorage } from './useJSONStorage';

export function useFreightSimulator({ type, productId }) {
  const [address, cacheLoading, cacheError, setAddress] = useJSONStorage('cart-freight');
  const [providers, setProviders] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const freightType = type ?? (productId ? 'product' : 'cart');
  const cep = address?.cep ?? '';

  async function fetchProviders() {
    setBusy(true);
    const result = await calculateFreight(freightType, cep, productId);
    setProviders(result);
    setBusy(false);
  }

  useEffect(() => {
    if (cacheLoading) return;

    if (cacheError || !cep) {
      setAddress(null);
      setProviders(null);
      return;
    }

    fetchProviders();
  }, [cep, freightType, productId, cacheLoading]);

  async function changeAddress(zipcode) {
    if (busy) { return; }
    const sanitizedZipcode = (`${zipcode || ''}`).replace(/[^\d]/g, '');
    setError('');
    if (!sanitizedZipcode) {
      setAddress();
      return;
    }

    if (sanitizedZipcode.length < 8) {
      setAddress();
      setError('CEP inválido');
      return;
    }

    setBusy(true);
    const { notFound, ...rest } = await findAddress(sanitizedZipcode);
    if (notFound) {
      setError('CEP não encontrado');
      setAddress();
    } else {
      setAddress(rest);
    }

    setBusy(false);
  }

  function reloadProviders() {
    console.log(cep, busy);
    if (!cep) { return; }
    if (busy) { return; }
    fetchProviders();
  }

  return {
    address,
    providers,
    busy,
    error,
    changeAddress,
    reloadProviders,
  };
}
