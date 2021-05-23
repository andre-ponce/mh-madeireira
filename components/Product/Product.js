import React from 'react';

import styles from './Product.module.css';

function Product({ product }) {
  return (
    <div className={styles.product}>
      <a href={product.link} className={styles.product__topbar}>
        <img src={product.image} alt={product.name} />
        <span className={styles.topbar__discount}>{product.discount}</span>
      </a>
      <div className={styles.product__infos}>
        <strong className={styles.infos__brand}>{product.brand}</strong>
        <span className={styles.infos__ref}>{product.ref}</span>
        <a href={product.link}>
          <h3 className={styles.infos__name}>
            {product.name}
          </h3>
        </a>
      </div>
      <div className={styles.product__prices}>
        <span className={styles.prices__old}>{product.oldPrice}</span>
        <strong className={styles.prices__actual}>{product.price}</strong>
        <span className={styles.prices__installments}>
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
      <div className={styles.product__actions}>
        <a
          className={styles.actions__link_category}
          href={product.categoryLink}
        >
          {product.category}

        </a>
        <div className={styles.actions__buy}>
          <div className={styles.number_input}>
            <input className={styles.quantity} min="0" name="quantity" value="1" type="number" />
            <button
              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
              className={styles.plus}
            >
              <i className="far fa-chevron-up" />
            </button>
            <button
              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
              className={styles.minus}
            >
              <i className="far fa-chevron-down" />
            </button>
          </div>
          <button className={styles.buy__button}>COMPRAR</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
