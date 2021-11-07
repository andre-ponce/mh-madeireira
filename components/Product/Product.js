import React, { useState } from 'react';

function Product({ product, mostWanted }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product" style={mostWanted ? { width: '100%' } : {}}>
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
        <a
          className="actions__link-category"
          href={product.categoryLink}
        >
          {product.category}

        </a>
        <div className="actions__buy">
          <div className="number-input">
            
            <input 
              className="quantity" 
              min="0" 
              name="quantity" 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(e.target.value)} 
            />

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="plus"
            >
              <i className="far fa-chevron-up" />
            </button>
            <button
              disabled={quantity < 2}
              onClick={() => setQuantity(quantity - 1)}
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
