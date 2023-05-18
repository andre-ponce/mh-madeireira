import SessionContext from '@/contexts/SessionContext';
import { removeFromCart, updateCartItem } from '@/services/cart.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';

export function CartQuantityPanel({
  id,
  quantity,
  stock,
  maxToSeal,
  onError,
}) {
  const [busy, setBusy] = useState(false);
  const [uiQuantity, setUiQuantity] = useState(quantity || 1);
  const cart = useContext(SessionContext);
  const { loading } = cart;

  const saveQuantity = async (newQuantity) => {
    setBusy(true);
    setUiQuantity(newQuantity);
    const { success } = await updateCartItem(id, newQuantity);
    if (!success) {
      setUiQuantity(quantity);
    }
    setBusy(false);
  };

  const increment = () => {
    if (maxToSeal && quantity + 1 > maxToSeal) {
      onError(`Você só pode comprar ${maxToSeal} unidades desse produto`);
      setTimeout(() => onError(''), 3000);
      return;
    }

    if (quantity + 1 > stock) {
      onError(`Esse produto só tem ${stock} unidades em estoque`);
      setTimeout(() => onError(''), 3000);
      return;
    }

    saveQuantity(quantity + 1);
  };

  const decrement = () => saveQuantity(quantity - 1);

  const remove = async () => {
    setBusy(true);
    await removeFromCart(id);
    setBusy(false);
  };

  return (
    <span className="item__control">
      <button type="button" className="item__delete" disabled={loading || busy} onClick={() => remove()}>
        <FontAwesomeIcon icon="fa-times" />
      </button>
      <button
        type="button"
        className="item__decrement"
        onClick={() => decrement()}
        disabled={loading || busy || quantity < 2}
      >
        <FontAwesomeIcon icon="fa-chevron-down" />
      </button>
      <input
        type="number"
        step={1}
        min={1}
        disabled={true || loading || busy} // improve the UX before enabling this
        value={uiQuantity}
        onChange={(evt) => saveQuantity(evt.target.value)}
      />
      <button
        type="button"
        className="item__increment"
        onClick={() => increment()}
        disabled={loading || busy}
      >
        <FontAwesomeIcon icon="fa-chevron-up" />
      </button>
    </span>
  );
}
