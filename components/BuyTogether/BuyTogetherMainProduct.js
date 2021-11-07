export function BuyTogetherMainProduct({ product }) {
  return (
    <div className="product">
      <a className="product__topbar">
        <img src={product.image} alt="Produto x" />
        <span className="topbar__discount">
          {product.discount}
        </span>
      </a>
      <div className="product__infos">
        <a href="#">
          <h3 className="infos__name">{product.name}</h3>
        </a>
      </div>
      <div className="product__prices">
        <strong className="prices__actual">{product.price}</strong>
      </div>
    </div>
  );
}
