import { linkTo } from '@/helpers';
import Link from 'next/link';

export function CartActions({ closeSidebar }) {
  return (
    <div className="cart-container__actions">
      <span onClick={closeSidebar} className="actions__return">continuar comprando</span>
      <Link href={linkTo.checkout()} passHref>
        <a href className="actions__buy">FINALIZAR COMPRA</a>
      </Link>
    </div>
  );
}
