import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { CatalogFilterGroup } from './CatalogFilterGroup';

function CatalogFilter({ filters, onFilterChange, isFilterActive }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(!isMobile);
  }, isMobile);

  return (
    <section className="main__filters col-12 col-lg-3 pl-0" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="-200">

      <button className="navbar-toggler mb-4 filters__title" type="button" data-toggle="collapse" data-target="#filtros" aria-controls="filtros" aria-expanded="true" aria-label="Toggle navigation">
        FILTRAR POR
        <i className="fa-solid fa-filter" />
      </button>

      <div className={`collapse navbar-collapse ${show ? 'show' : ''}`} id="filtros">
        {filters.sort((one, another) => (one > another ? 1 : -1)).map((filter) => (
          <CatalogFilterGroup
            key={filter.query}
            filter={filter}
            onFilterChange={onFilterChange}
            isFilterActive={isFilterActive}
          />
        ))}
      </div>
    </section>
  );
}

export default CatalogFilter;
