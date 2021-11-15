import React from 'react';

export function CatalogFilterItem({ item, onChange, isActive }) {
  return (
    <div className="custom-control custom-checkbox mb-1">
      <input type="checkbox" className="custom-control-input" id={`catalogFilterItem_${item.id}`} checked={isActive(item.id)} onChange={() => onChange(item.id)} />
      <label className="custom-control-label" htmlFor={`catalogFilterItem_${item.id}`}>{item.nome} ({item.correspondecias})</label>
    </div>
  );
}
