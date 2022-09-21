import { CartActions } from './CartActions';
import { CartFreight } from './CartFreight';
import CartResumeItem from './CartResumeItem';
import { CartTotals } from './CartTotals';

export function CartGrid({ cart, closeSidebar, hideFooter }) {
  const { itens, ...rest } = cart;
  const cartHash = itens
    ?.map(({ produtoId, quantidade }) => `${produtoId}:${quantidade}`)
    ?.join('|') || null;

  return (
    <>
      <span className="cart-container__title">RESUMO DO SEU CARRINHO</span>
      <ul className="cart-container__items">
        {itens.map((item) => <CartResumeItem key={item.id} item={item} />)}
      </ul>
      {!hideFooter && (
        <>
          <CartFreight hash={cartHash} />
          <CartTotals paymentDetails={rest} />
          <span className="cart-coupom-alert">Possui cupom ou vale? Você poderá usá-los na etapa de pagamento.</span>
          <CartActions closeSidebar={closeSidebar} />
        </>
      )}
    </>
  );
}
