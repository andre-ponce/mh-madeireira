import React from 'react';
import { CatalogFilterItem } from './CatalogFilterItem';

export function CatalogFilterGroup({ filter, onFilterChange, isFilterActive }) {
  return (
    <div className="filters__filter mt-2">

      <button className="navbar-toggler mb-3" type="button" data-toggle="collapse" data-target={`#navbarNav${filter.id}`} aria-controls={`navbarNav${filter.id}`} aria-expanded="true" aria-label="Toggle navigation">
        {filter.nome}
        <i className="fas fa-chevron-down" />
      </button>

      <div className="collapse navbar-collapse show" id={`navbarNav${filter.id}`}>
        <div className="navbar-nav">
          {filter.itens.map((item) => (
            <CatalogFilterItem
              item={item}
              onChange={(id) => onFilterChange(filter.query, id)}
              isActive={(id) => isFilterActive(filter.query, id)} />
          ))}
        </div>
      </div>

    </div>
  );
}
