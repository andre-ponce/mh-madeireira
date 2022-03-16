import { removeFromCart, updateCartItem } from '../../services/cart.client';

export function CartQuantityPanel({ item }) {
  const increment = async (i) => updateCartItem({ ...i, quantity: i.quantity + 1 });
  const decrement = async (i) => updateCartItem({ ...i, quantity: i.quantity - 1 });
  const setQuantity = async (i) => updateCartItem({ ...i, quantity: i.quantity });
  const remove = async (i) => removeFromCart(i.id);

  return (
    <span className="item__control">
      <button type="button" className="item__delete" onClick={() => remove(item)}>
        <i className="far fa-times" />
      </button>
      <button
        type="button"
        className="item__decrement"
        onClick={() => decrement(item)}
        disabled={item.quantity < 2}
      >
        <i className="far fa-chevron-down" />
      </button>
      <input
        type="number"
        step={1}
        min={1}
        value={item.quantity}
        onChange={(evt) => setQuantity(item, evt.target.value)}
      />
      <button type="button" className="item__increment" onClick={() => increment(item)}>
        <i className="far fa-chevron-up" />
      </button>
    </span>
  );
}
