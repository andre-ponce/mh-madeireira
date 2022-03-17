import { format } from '../../helpers';

export function BuyTogetherResume({ resume: { itens } }) {
  const total = itens.reduce((prev, current) => prev + current.precoPor, 0);

  return (
    <div className="buy-together__block-price">
      <span className="block-price__header">
        Comprar
        {' '}
        {itens.length}
        {' '}
        {itens.length > 1 ? 'itens' : 'item'}
        {' '}
        por
      </span>
      <span className="block-price__price">{format.currency(total)}</span>
      <button type="button" className="block-price__button">Comprar Junto</button>
    </div>
  );
}
