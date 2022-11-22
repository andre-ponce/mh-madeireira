import { useFreightSimulator } from '@/hooks/useFreightSimulator';
import { FreightData } from '../CartResume/FreightData';
import { ProductFreightSimulatorInput } from './ProductFreightSimulatorInput';

export function ProductFreightSimulator({ productId }) {
  const {
    address, providers, busy, changeAddress, reloadProviders,
  } = useFreightSimulator({ productId });

  if (!address) {
    return (
      <div className="freigth-simulator--container">
        <ProductFreightSimulatorInput
          initialCep={address?.cep}
          submit={(cep) => changeAddress(cep)}
          busy={busy}
        />
      </div>
    );
  }

  return (
    <div className="freigth-simulator--container">
      <FreightData
        address={address}
        providers={providers}
        reload={reloadProviders}
        loading={busy}
        clearAddress={() => changeAddress(null)}
      />
    </div>
  );
}
