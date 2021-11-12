import { format } from "../../helpers";

export function BuyTogetherMainProduct({ product }) {
  return (
    <div className="product">
      <a className="product__topbar">
        <img src={product.fotoUrl} alt="Produto x" />
        {
          product.desconto > 0 &&
          <span className="topbar__discount">
            {`-${product.desconto}%`}
          </span>
        }
      </a>
      <div className="product__infos">
        <a href="#">
          <h3 className="infos__name">{product.nome}</h3>
        </a>
      </div>
      <div className="product__prices">
        <strong className="prices__actual">{format.currency(product.precoPor)}</strong>
      </div>
    </div>
  );
}
