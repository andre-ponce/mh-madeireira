import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  async function doSearch(ev) {
    ev.preventDefault();
    if (!search) return;
    await router.push({
      pathname: '/busca',
      query: { q: search },
    });
  }

  return (
    <div className="topbar__search">
      <div className="container_serie-ds d-flex align-items-center">
        <form className="search__input-search form-search d-flex" onSubmit={doSearch}>
          <input
            value={search}
            required
            onChange={(ev) => setSearch(ev.target.value)}
            type="search"
            className="input-text"
            placeholder="Digite o que busca ou o código original da peça"
          />
          <button className="yellow-button" type="submit">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </form>
        <button id="btn_clean-filter" className="btn_clean-filter d-none" type="button">
          <span>Limpar</span>
          <span>Filtro</span>
        </button>
      </div>
    </div>
  );
}
