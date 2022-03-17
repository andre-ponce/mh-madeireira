import { useContext, useEffect, useState } from 'react';
import useFixedShadow from '../../hooks/useFixedShadow';
import SessionContext from '../../contexts/SessionContext';
import { CartSideBar } from './CartSideBar';
import { CartIcon } from './CartIcon';
import { onCartItemPushed, offCartItemPushed } from '../../services/cart.observable';

export default function CartResume() {
  const [cartResumeActive, setCartResumeActive] = useState(false);
  const { addShadow, popShadow } = useFixedShadow();
  const cart = useContext(SessionContext);

  function toogleSideBar(status) {
    setCartResumeActive(status);
    const fn = status ? addShadow : popShadow;
    fn();
  }

  useEffect(() => {
    const handle = () => toogleSideBar(true);
    onCartItemPushed(handle);
    return () => offCartItemPushed(handle);
  }, []);

  return (
    <div className="cart">
      <CartIcon openResume={() => toogleSideBar(true)} count={cart.itens.length} />
      {
        cartResumeActive
        && <CartSideBar closeSidebar={() => toogleSideBar(false)} cart={cart} />
      }
    </div>
  );
}
