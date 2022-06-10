import { isEmpty } from 'lodash';
import { useContext, useEffect, useState } from 'react';
import SessionContext from '@/contexts/SessionContext';
import useEventListener from '@use-it/event-listener';
import useFixedShadow from '@/hooks/useFixedShadow';
import { observe } from '@/helpers/observable';
import { CartGrid } from './CartGrid';
import { EmptyCart } from './EmptyCart';

export function CartSideBar() {
  const cart = useContext(SessionContext);
  const { itens } = cart;

  const [oppened, setOppened] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);
  const { addShadow, popShadow, flush } = useFixedShadow();

  useEffect(() => {
    if (oppened) {
      addShadow();
    } else {
      popShadow();
    }

    return () => flush();
  }, [oppened]);

  function close() {
    setOppened(false);
  }

  function open(payload) {
    if (payload) {
      setHideFooter(!!payload.hideFooter);
    } else {
      setHideFooter(false);
    }
    setOppened(true);
  }

  useEventListener('keydown', ({ keyCode }) => keyCode === 27 && close());
  // useEventListener('keydown', ({ target, keyCode }) => target === document.body && keyCode === 67 && open());

  useEffect(() => observe([
    'cart:open',
    'cart:item-pushed',
  ], open), []);

  const cartActiveClassName = oppened ? 'cart__cart-container--active' : '';

  return (
    <aside className="cart">
      <div className={`cart__cart-container block_hover ${cartActiveClassName} ${isEmpty(itens) ? 'cart__cart-container--empty' : ''}`}>
        <button className="navbar-toggler" type="button" onClick={close}>
          <img src="/images/icons-menu/close-menu.png" alt="menu" />
        </button>
        {isEmpty(itens)
          ? <EmptyCart />
          : <CartGrid cart={cart} closeSidebar={close} hideFooter={hideFooter} />}
      </div>
    </aside>
  );
}
