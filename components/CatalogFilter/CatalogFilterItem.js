import React from 'react';
import Link from 'next/link';
import { linkTo } from '@/helpers';

export function CatalogFilterItem({ item, onChange, isActive }) {
  return (
    <div className="custom-control custom-checkbox mb-1">
      <input
        type="checkbox"
        className="custom-control-input"
        id={`catalogFilterItem_${item.uid}`}
        checked={isActive(item.uid)}
        onChange={() => onChange(item.uid)}
      />
      <label
        className="custom-control-label"
        htmlFor={`catalogFilterItem_${item.uid}`}
      >
        {`${item.nome} (${item.correspondecias})`}
      </label>
    </div>
  );
}

export function CatalogFilterLink({ item }) {
  return (
    <div className="filter__link mb-2">
      <Link href={linkTo.category(item)} passHref>
        <a>
          {item.nome}
        </a>
      </Link>
      {`(${item.correspondecias})`}
    </div>
  );
}
