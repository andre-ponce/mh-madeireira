import React from 'react';
import { CatalogFilterGroup } from './CatalogFilterGroup';

function CatalogFilter({ filters, onFilterChange, isFilterActive }) {
  return (
    <section className="main__filters col-12 col-lg-3 pl-0" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="-200">

      <button className="navbar-toggler mb-4 filters__title" type="button" data-toggle="collapse" data-target="#filtros" aria-controls="filtros" aria-expanded="true" aria-label="Toggle navigation">
        FILTRAR POR
        <i className="fas fa-filter" />
      </button>

      <div className="collapse navbar-collapse show" id="filtros">
        {filters.sort((one, another) => one > another ? 1 : -1).map((filter) => (
          <CatalogFilterGroup
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
