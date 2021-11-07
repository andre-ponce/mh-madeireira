export function BuyTogetherResume({resume: { itens }}) {

  const total = itens.reduce((prev, current)=> {
    const price = parseInt(current.price.replace(/[^0-9]+/g, ''));
    return prev + (price / 100);
  }, 0);

  const totalFormated = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL'}).format(total);

  return (
    <div className="buy-together__block-price">
      <span className="block-price__header">Comprar {itens.length} {itens.length > 1 ? 'itens' : 'item'} por</span>
      <span className="block-price__price">{totalFormated}</span>
      <button className="block-price__button">Comprar Junto</button>
    </div>
  );
}
