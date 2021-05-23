import React from 'react';

function Product({ product }) {
  return (
    <div className="product">
      <a href={product.link} className="product__topbar">
        <img src={product.image} alt={product.name} />
        <span className="topbar__discount">{product.discount}</span>
      </a>
      <div className="product__infos">
        <strong className="infos__brand">{product.brand}</strong>
        <span className="infos__ref">{product.ref}</span>
        <a href={product.link}>
          <h3 className="infos__name">
            {product.name}
          </h3>
        </a>
      </div>
      <div className="product__prices">
        <span className="prices__old">{product.oldPrice}</span>
        <strong className="prices__actual">{product.price}</strong>
        <span className="prices__installments">
          {' '}
          {product.installments.split(' ', 2).join(' ')}
          {' '}
          <strong>
            {product.installments.split(' ', 5)[2]}
            {' '}
            {product.installments.split(' ', 5)[3]}
          </strong>
          {' '}
          {product.installments.split(' ', 5)[4]}
          {' '}
        </span>
      </div>
      <div className="product__actions">
        <a className="actions__link-category" href={product.categoryLink}>{product.category}</a>
        <div className="actions__buy">
          <div className="number-input">
            <input className="quantity" min="0" name="quantity" value="1" type="number" />
            <button
              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
              className="plus"
            >
              <i className="far fa-chevron-up" />
            </button>
            <button
              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
              className="minus"
            >
              <i className="far fa-chevron-down" />
            </button>
          </div>
          <button className="buy__button">COMPRAR</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
