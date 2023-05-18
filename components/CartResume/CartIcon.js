import { useContext } from 'react';
import SessionContext from '@/contexts/SessionContext';
import { trigger } from '@/helpers/observable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
              <FontAwesomeIcon icon="fa-rotate" className="text-danger" />
            </span>
          )
        }
        {
          loading
          && (
            <span className="cart__qtd">
              <FontAwesomeIcon icon="fa-spinner fa-spin" />
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
