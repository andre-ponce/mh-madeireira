import { useContext } from 'react';
import SessionContext from '@/contexts/SessionContext';
import { trigger } from '@/helpers/observable';
import { Cart } from '../Icons/Cart';

export function CartIcon() {
  const cart = useContext(SessionContext);
  const { itens, loading, error } = cart;

  const onClick = () => (error ? trigger('cart:refresh') : trigger('cart:open'));

  return (
    <div className="cart">
      <span className="cart__icon_group" onClick={onClick}>
        <Cart />
        {
          error
          && (
            <span className="cart__qtd" title={error}>
              <i className="fa-solid fa-rotate text-danger" />
            </span>
          )
        }
        {
          loading
          && (
            <span className="cart__qtd">
              <i className="fa-solid fa-spinner fa-spin" />
            </span>
          )
        }
        {
          !loading && !error
          && <span className="cart__qtd">{itens.length}</span>
        }
      </span>
    </div>
  );
}
