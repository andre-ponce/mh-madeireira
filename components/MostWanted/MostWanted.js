import React from 'react';
import Slick from 'react-slick';
import shortid from 'shortid';
import Product from '../Product';

import settings from './settings';

function MostWanted({ products }) {
  return (
    <section data-aos="fade-up" data-aos-duration="1000" className="container_serie-ds">
      <h2 className="title-border-left">Os mais buscados</h2>
      <Slick className="products-carousel" {...settings}>
        {products.map((product) => (
          <Product product={product} mostWanted key={shortid()} />
        ))}
      </Slick>
    </section>
  );
}

export default MostWanted;
