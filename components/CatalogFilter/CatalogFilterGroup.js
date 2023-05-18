import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CatalogFilterItem, CatalogFilterLink } from './CatalogFilterItem';

export function CatalogFilterGroup({ filter, onFilterChange, isFilterActive }) {
  const [seeAll, setSeeAll] = useState(false);
  const vizibleItems = 5;

  return (
    <div className="filters__filter mb-4">

      <button className="navbar-toggler mb-3" type="button" data-toggle="collapse" data-target={`#navbarNav_${filter.query}`} aria-controls={`navbarNav_${filter.query}`} aria-expanded="true" aria-label="Toggle navigation">
        {filter.nome}
        <FontAwesomeIcon icon="fa-chevron-down" />
      </button>

      <div className="collapse navbar-collapse show" id={`navbarNav_${filter.query}`}>
        <div className="navbar-nav">

          {(seeAll ? filter.itens : filter.itens.slice(0, vizibleItems)).map((item) => (
            filter.tratarComoLink
              ? (
                <span>
                  <CatalogFilterLink
                    key={item.id}
                    item={item}
                  />
                </span>
              )
              : (
                <CatalogFilterItem
                  key={item.id}
                  item={item}
                  onChange={(id) => onFilterChange(filter.query, id)}
                  isActive={(id) => isFilterActive(filter.query, id)}
                />
              )
          ))}

          {
            filter.itens.length > vizibleItems && (
              <span
                style={{
                  color: 'blue',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontSize: '12px',
                }}
                onClick={() => setSeeAll(!seeAll)}
              >
                {seeAll ? 'esconder' : 'veja todos'}
              </span>
            )
          }

        </div>
      </div>

    </div>
  );
}
