import React from 'react';
import Filter from '../Filter';
import Pagination from '../Pagination';
import Product from '../Product';

function Category({ products, filters }) {
  return (
    <main>
      <div className="container_serie-ds">
        <div className="row mx-0 mt-4">
          <Filter filters={filters} />
          <section className="col-12 col-lg-9 main__gallery d-flex pr-0" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="-200">
            <div className="gallery__order-by mb-3">
              ORDENAR POR
              <div className="dropdown">
                <button type="button" className="btn btn-secondary" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="-38,0">
                  Selecione
                  <i className="fas fa-chevron-down" />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                  <a className="dropdown-item" href="#">Nome A-Z</a>
                  <a className="dropdown-item" href="#">Nome Z-A</a>
                  <a className="dropdown-item" href="#">Menor Preço</a>
                  <a className="dropdown-item" href="#">Maior Preço</a>
                  <a className="dropdown-item" href="#">Mais vendidos</a>
                </div>
              </div>
            </div>
            <div className="gallery__products">
              {products.map((product) => (
                <Product product={product} />
              ))}
            </div>
            <Pagination />
            <p className="gallery__description" data-aos="fade-left" data-aos-duration="1000">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
              ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Category;
