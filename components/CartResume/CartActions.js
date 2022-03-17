import Link from 'next/link';

export function CartActions({ closeMenu }) {
  return (
    <div className="cart-container__actions">
      <span onClick={closeMenu} className="actions__return">continuar comprando</span>
      <Link href="/" passHref>
        <a className="actions__buy">FINALIZAR COMPRA</a>
      </Link>
    </div>
  );
}
