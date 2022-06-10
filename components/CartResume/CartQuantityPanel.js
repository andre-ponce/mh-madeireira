import SessionContext from '@/contexts/SessionContext';
import { removeFromCart, updateCartItem } from '@/services/cart.service';
import { useContext, useState } from 'react';

export function CartQuantityPanel({ item }) {
  const [busy, setBusy] = useState(false);
  const [quantity, setQuantity] = useState(item.quantidade || 1);
  const cart = useContext(SessionContext);
  const { loading } = cart;

  const saveQuantity = async (i, newQuantity) => {
    setBusy(true);
    setQuantity(newQuantity);
    const { success } = await updateCartItem(i.id, newQuantity);
    if (!success) {
      setQuantity(i.quantidade);
    }
    setBusy(false);
  };

  const increment = async (i) => {
    setBusy(true);
    await saveQuantity(i, i.quantidade + 1);
    setBusy(false);
  };

  const decrement = async (i) => {
    setBusy(true);
    await saveQuantity(i, i.quantidade - 1);
    setBusy(false);
  };

  const remove = async (i) => {
    setBusy(true);
    await removeFromCart(i.id);
    setBusy(false);
  };

  return (
    <span className="item__control">
      <button type="button" className="item__delete" disabled={loading || busy} onClick={() => remove(item)}>
        <i className="fa-solid fa-times" />
      </button>
      <button
        type="button"
        className="item__decrement"
        onClick={() => decrement(item)}
        disabled={loading || busy || item.quantidade < 2}
      >
        <i className="fa-solid fa-chevron-down" />
      </button>
      <input
        type="number"
        step={1}
        min={1}
        disabled={true || loading || busy} // improve the UX before enabling this
        value={quantity}
        onChange={(evt) => saveQuantity(item, evt.target.value)}
      />
      <button type="button" disabled={loading || busy} className="item__increment" onClick={() => increment(item)}>
        <i className="fa-solid fa-chevron-up" />
      </button>
    </span>
  );
}
