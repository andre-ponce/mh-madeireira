import React from 'react';
import Slick from 'react-slick';
import Product from '../Product';

import settings from './settings';
import productsMock from './productsMock';

function MostWanted() {
  return (
    <section data-aos="fade-up" data-aos-duration="1000" className="container_serie-ds">
      <h2 className="title-border-left">Os mais buscados</h2>
      <Slick className="products-carousel" {...settings}>
        {productsMock.map((product) => (
          <Product product={product} />
        ))}
      </Slick>
    </section>
  );
}

export default MostWanted;
