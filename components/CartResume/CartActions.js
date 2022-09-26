import { linkTo } from '@/helpers';
import Link from 'next/link';

export function CartActions({ closeSidebar, hasErrors }) {
  return (
    <div className="cart-container__actions">
      <span onClick={closeSidebar} className="actions__return">continuar comprando</span>
      <Link href={linkTo.checkout()}>
        <button type="button" disabled={hasErrors} className="actions__buy">FINALIZAR COMPRA</button>
      </Link>
    </div>
  );
}
