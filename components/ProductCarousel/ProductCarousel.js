import React from 'react';
import Slick from 'react-slick';
import Product from '../Product';

import settings from './settings';

function ProductCarousel({ products, title }) {
  return (
    <section data-aos="fade-up" data-aos-duration="1000" className="app-container">
      <h2 className="title-border-left">{title}</h2>
      <Slick className="products-carousel" {...settings}>
        {products.map((product) => (
          <Product product={product} mostWanted key={product.id} />
        ))}
      </Slick>
    </section>
  );
}

export default ProductCarousel;
