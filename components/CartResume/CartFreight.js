/* eslint-disable jsx-quotes */
import { useFreightSimulator } from '@/hooks/useFreightSimulator';
import { FreightData } from './FreightData';
import { FreightForm } from './FreightForm';

export function CartFreight({ hash }) {
  const {
    address, providers, busy, error, changeAddress, reloadProviders,
  } = useFreightSimulator({ type: 'cart', cartHash: hash });

  return (
    <>
      <div className="cart-freight--container">
        {!address && <FreightForm submit={changeAddress} busy={busy} error={error} />}
        {
          address
          && (
            <FreightData
              address={address}
              providers={providers}
              reload={reloadProviders}
              loading={busy}
              clearAddress={() => changeAddress(null)}
            />
          )
        }
      </div>
    </>
  );
}
