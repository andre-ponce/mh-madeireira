import React from 'react';

export default function SearchBar() {
  return (
    <div className="topbar__search">
      <div className="container_serie-ds d-flex align-items-center">
        <form className="search__input-search form-search d-flex">
          <input
            type="text"
            className="input-text"
            placeholder="Digite o que busca ou o código original da peça" />
          <button className="yellow-button">
            <i className="far fa-search" />
          </button>
        </form>
        <button id="btn_clean-filter" className="btn_clean-filter d-none">
          <span>Limpar</span>
          <span>Filtro</span>
        </button>
      </div>
    </div>
  );
}
