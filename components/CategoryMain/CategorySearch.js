import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function CategorySearch({ categoyName }) {
  const router = useRouter();
  const [search, setSearch] = useState(router.query.q);

  return (
    <div className="gallery__search">
      <label htmlFor="categorySearch">Buscar dentro de <strong>{categoyName}</strong></label>
      <input id="categorySearch" name="categorySearch" className="" value={search} onChange={(e) => setSearch(e.target.value)} />
      {!router.query.q &&
        <button
          className="yellow-button"
          onClick={() => {
            const query = { ...router.query, q: search };
            router.push({ query }, { ...router.asPath }, { scroll: false });
          }}
        >
          <i className="far fa-search" />
        </button>}
      {router.query.q &&
        <button
          className="yellow-button"
          onClick={() => {
            const query = { ...router.query };
            delete query.q;
            router.push({ query }, { ...router.asPath }, { scroll: false });
            setSearch('');
          }}
        >
          <i className="far fa-times" />
        </button>}
    </div>
  );
}
