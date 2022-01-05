import { removeFromCart, updateCartItem } from '../../services/cart.client';

export function CartQuantityPanel({ item }) {

  const increment = async (item) => {
    item.quantity++;
    await updateCartItem(item);
  };

  const decrement = async (item) => {
    item.quantity--;
    await updateCartItem(item);
  };

  const setQuantity = async (item, quantity) => {
    item.quantity = quantity;
    await updateCartItem(item);
  };

  const remove = async (item) => {
    await removeFromCart(item.id);
  };

  return <span className="item__control">
    <button className="item__delete" onClick={() => remove(item)}>
      <i className="far fa-times"></i>
    </button>
    <button
      className="item__decrement"
      onClick={() => decrement(item)}
      disabled={item.quantity < 2}
    >
      <i className="far fa-chevron-down"></i>
    </button>
    <input type="number" step={1} min={1} value={item.quantity}
      onChange={(evt) => setQuantity(item, evt.target.value)} />
    <button className="item__increment" onClick={() => increment(item)}>
      <i className="far fa-chevron-up"></i>
    </button>
  </span>;
}
