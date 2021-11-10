import { useState } from "react";
import { format } from "../../helpers";

export function BuyBox({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [cep, setCep] = useState('');

  const precoDe = product.precoDe > product.precoPor
    ? product.precoDe
    : product.precoPor * 1.05;

  return (
    <>
      <div className="product__infos">
        <span className="infos__title">{product.nome}</span>
        <span className="infos__cod">COD: {product.sku}</span>
        <span className="infos__brand">MARCA: {product.marcaNome}</span>
      </div>

      <div className="product__price-infos">
        <div className="price-infos__prices">
          <span className="prices__old">{format.currency(precoDe)}</span>
          <strong className="prices__actual">{format.currency(product.precoPor)}</strong>
        </div>
        {
          product.parcelamento > 1 &&
          <span className="price-infos__installments">
            {product.parcelamento}x de <strong>{format.currency(product.valorParcelamento)}</strong>
          </span>
        }
        {
          product.descontoPagamentoAvista > 0 &&
          <span className="price-infos__discount">
            {format.currency(product.precoAvista)} à vista (com {product.descontoPagamentoAvista * 100}% de desconto)
          </span>
        }
        <div className="price-infos__buy">
          <div className="block_qtd-item">
            <button className="qtd-item__minus" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
              <i className="far fa-minus"></i>
            </button>
            <input type="number" disabled min="0" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button className="qtd-item__plus" onClick={() => setQuantity(quantity + 1)}>
              <i className="far fa-plus"></i>
            </button>
          </div>
          <button className="buy__button">COMPRAR</button>
        </div>
        <div className="price-infos__installments-group">
          <a className="open__modal" onClick={() => setPayOptionsVisible(true)}>Mais opcões de pagamento</a>
          <div className="installments-group__installments">
            <span>{product.parcelamento}x de {format.currency(product.valorParcelamento)}</span>
          </div>
        </div>
        <div className="price-infos__cep">
          <div className="cep__calc-container">
            <input type="number" placeholder="00000-000" max="99999999" value={cep} onChange={(e) => setCep(e.target.value)} />
            <button>CALCULAR</button>
          </div>
          <a className="cep__dont-know" href="">Não sei meu CEP</a>
        </div>
      </div>
    </>
  );
}
