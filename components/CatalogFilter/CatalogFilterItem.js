import React from 'react';

export function CatalogFilterItem({ item, onChange, isActive }) {
  return (
    <div className="custom-control custom-checkbox mb-1">

      <input
        type="checkbox"
        className="custom-control-input"
        id={`catalogFilterItem_${item.uid}`}
        checked={isActive(item.uid)} onChange={() => onChange(item.uid)}
      />

      <label
        className="custom-control-label"
        htmlFor={`catalogFilterItem_${item.uid}`}
      >
        {item.nome} ({item.correspondecias})
      </label>

    </div>
  );
}
