import React, { useState } from 'react';
import Link from 'next/link';
import { format, image } from '../../helpers';
import { addToCart } from '../../services/cart.client';

function Product({ product }) {
  const [busy, setBusy] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const precoDe = product.precoDe > product.precoPor
    ? product.precoDe
    : product.precoPor * 1.05;

  const add = async (product, quantity) => {
    setBusy(true);
    await addToCart(product, quantity);
    setBusy(false);
  }

  return (
    <div className="product">
      <Link href={`/product/${product.id}`} passHref>
        <a className="product__topbar">
          <img src={image.fallback(product.fotoUrl) || '/images/no-image-avaliable.jpg'} alt={product.name} />
          {<span className="topbar__discount">{format.discount(product.desconto > 0 ? product.desconto : 5)}</span>}
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
        <span className="prices__old">{format.currency(precoDe)}</span>
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
          {/* <div className="number-input buy__qtd">

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
          </div> */}
          <button className="buy__button" onClick={async () => await add(product, quantity)}>
            {
              busy ? "..." : "COMPRAR"
            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
