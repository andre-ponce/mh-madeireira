import React from 'react';
import shortid from 'shortid';

import Product from '../Product';

import productsMock from '../Product/productsMock';

function Highlights() {
  return (
    <section
      className="main__vitrine-destaques container_serie-ds"
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-offset="500"
    >
      <h2 className="title-border-left">Destaques</h2>
      <div className="vitrine-destaques__produtos">
        {productsMock.map((product) => (
          <Product product={product} key={shortid()} />
        ))}
      </div>
    </section>
  );
}

export default Highlights;
