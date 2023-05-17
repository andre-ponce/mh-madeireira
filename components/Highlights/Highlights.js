import React from 'react';
import shortid from 'shortid';

import ProductCatalog from '../Product';

function Highlights({ products }) {
  return (
    <section
      className="main__vitrine-destaques app-container"
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-offset="500"
    >
      <h2 className="title-border-left">Destaques</h2>
      <div className="vitrine-destaques__produtos">
        {products.map((product) => (
          <ProductCatalog product={product} key={shortid()} />
        ))}
      </div>
    </section>
  );
}

export default Highlights;
