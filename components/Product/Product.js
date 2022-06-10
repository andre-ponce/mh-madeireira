import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { format, image, linkTo } from '@/helpers';
import { addToCart } from '@/services/cart.service';
import SessionContext from '@/contexts/SessionContext';

function Product({ product }) {
  const [busy, setBusy] = useState(false);
  const { itens } = useContext(SessionContext);
  const current = itens.filter(item => item.produtoId == product.id)[0];
  const alreadyIn = !!current;
  const initialQuantity = alreadyIn ? current.quantidade : 1;

  const [quantity, setQuantity] = useState(initialQuantity);


  const add = async () => {
    setBusy(true);
    await addToCart(product, quantity);
    setBusy(false);
  };

  return (
    <div className="product">
      <Link href={linkTo.product(product)} passHref>
        <a className="product__topbar">
          <img src={image.fallback(product.fotoUrl)} alt={product.name} />
          <span className="topbar__discount">
            {format.discount(product.desconto > 0 ? product.desconto : 5)}
          </span>
        </a>
      </Link>
      <div className="product__infos">
        <strong className="infos__brand">{product.marcaNome}</strong>
        <span className="infos__ref">{product.sku}</span>
        <Link href={linkTo.product(product)} passHref>
          <a href>
            <h3 className="infos__name">
              {product.nome}
            </h3>
          </a>
        </Link>
      </div>
      <div className="product__prices">
        {
          product.precoDe > product.precoPor
          && <span className="prices__old">{format.currency(product.precoDe)}</span>
        }
        <strong className="prices__actual">{format.currency(product.precoPor)}</strong>
        <span className="prices__installments">
          {product.parcelamento}
          x de
          {' '}
          <strong>
            {format.currency(product.valorParcelamento)}
          </strong>
          {' '}
          s/ juros
        </span>
      </div>
      <div className="product__actions">
        <Link href={product.categoryLink || linkTo.product(product)}>
          <a className="actions__link-category">
            {product.categoria || ' '}
          </a>
        </Link>
        <div className="actions__buy">
          <div className="number-input buy__qtd">

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
              <i className="fa-solid fa-chevron-up" />
            </button>
            <button
              disabled={quantity < 2}
              onClick={() => setQuantity(quantity - 1)}
              className="minus"
            >
              <i className="fa-solid fa-chevron-down" />
            </button>
          </div>
          <button type="button" className="buy__button" onClick={async () => add(product, quantity)}>
            {
              busy
                ? <span><i className='fa fa-spin fa-spinner'></i></span>
                : (alreadyIn ? <>ALTERAR</> : <>COMPRAR</>)
            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
