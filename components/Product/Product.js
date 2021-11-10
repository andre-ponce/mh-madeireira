import React, { useState } from 'react';
import Link from 'next/link';

import { format } from '../../helpers';

function Product({ product, mostWanted }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product" style={mostWanted ? { width: '100%' } : {}}>
      <Link href={`/product/${product.id}`} passHref>
        <a className="product__topbar">
          <img src={product.fotoUrl || '/images/no-image-avaliable.jpg'} alt={product.name} />
          {product.desconto > 0 && <span className="topbar__discount">{product.desconto}</span>}
        </a>
      </Link>
      <div className="product__infos">
        <strong className="infos__brand">{product.marcaNome}</strong>
        <span className="infos__ref">{product.sku}</span>
        <Link href={`/product/${product.id}`} passHref>
          <a>
            <h3 className="infos__name">
              {product.nome}
            </h3>
          </a>
        </Link>
      </div>
      <div className="product__prices">
        <span className="prices__old">{format.currency(product.precoDe)}</span>
        <strong className="prices__actual">{format.currency(product.precoPor)}</strong>
        <span className="prices__installments">
          {product.parcelamento}x de
          {' '}
          <strong>
            {format.currency(product.valorParcelamento)}
          </strong>
          {' '}
          s/ juros
        </span>
      </div>
      <div className="product__actions">
        <Link href={product.categoryLink || `/product/${product.id}`}>
          <a className="actions__link-category">
            {product.categoria || ' '}
          </a>
        </Link>
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
