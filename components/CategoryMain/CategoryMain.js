import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CatalogFilter from '../CatalogFilter';
import ProductCatalog from '../Product';

function Category({
  products,
  filters,
  onFilterChange,
  isFilterActive,
  orderBy,
  pagination,
}) {
  const orderValues = {
    'a-z': 'Nome A-Z',
    'z-a': 'Nome Z-A',
    'maior-preco': 'Menor Preço',
    'menor-preco': 'Maior Preço',
  };

  const [orderCode] = orderBy.currentOrder;
  const currentOrder = orderValues[orderCode] || 'Relevância';

  return (

    <main>
      <div className="app-container">
        <div className="row mx-0 mt-4">

          <CatalogFilter
            filters={filters}
            onFilterChange={onFilterChange}
            isFilterActive={isFilterActive}
          />

          <section className="col-12 col-lg-9 main__gallery d-flex pr-0" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="-200">

            <div className="gallery__top-filter mb-3">
              {/* <CategorySearch categoyName={name} /> */}
              {/* <div className="gallery__order-by">
                ORDENAR POR
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn
                    btn-secondary"
                    id="dropdownMenuOffset"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-offset="-38,0"
                  >
                    {currentOrder}
                    <FontAwesomeIcon icon="fa-chevron-down" />
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                    <button
                      type="button"
                      disabled={!orderCode}
                      onClick={() => orderBy.reorder('')}
                      className="dropdown-item"
                    >
                      Relevância
                    </button>
                    {
                      Object.keys(orderValues).map((order) => (
                        <button
                          type="button"
                          disabled={order === orderCode}
                          onClick={() => orderBy.reorder(order)}
                          className="dropdown-item"
                        >
                          {orderValues[order]}
                        </button>
                      ))
                    }
                  </div>
                </div>
              </div> */}

            </div>

            <div className="gallery__products">
              {products.map((product) => (
                <ProductCatalog key={product.id} product={product} />
              ))}
            </div>

            {pagination}

            {/* <p className="gallery__description" data-aos="fade-left" data-aos-duration="1000">
              {description}
            </p> */}
          </section>
        </div>
      </div>
    </main>
  );
}

export default Category;
