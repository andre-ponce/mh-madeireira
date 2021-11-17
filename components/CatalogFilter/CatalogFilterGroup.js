import React, { useState } from 'react';
import { CatalogFilterItem } from './CatalogFilterItem';

export function CatalogFilterGroup({ filter, onFilterChange, isFilterActive }) {
  const [seeAll, setSeeAll] = useState(false);

  return (
    <div className="filters__filter mt-2">

      <button className="navbar-toggler mb-3" type="button" data-toggle="collapse" data-target={`#navbarNav${filter.id}`} aria-controls={`navbarNav${filter.id}`} aria-expanded="true" aria-label="Toggle navigation">
        {filter.nome}
        <i className="fas fa-chevron-down" />
      </button>

      <div className="collapse navbar-collapse show" id={`navbarNav${filter.id}`}>
        <div className="navbar-nav">

          {(seeAll ? filter.itens : filter.itens.slice(0, 5)).map((item) => (
            <CatalogFilterItem
              key={item.id}
              item={item}
              onChange={(id) => onFilterChange(filter.query, id)}
              isActive={(id) => isFilterActive(filter.query, id)} />
          ))}

          <span
            style={{
              color: 'blue',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '12px'
            }}
            onClick={() => setSeeAll(!seeAll)}
          >
            {seeAll ? 'esconder' : 'veja todos'}
          </span>

        </div>
      </div>

    </div>
  );
}
