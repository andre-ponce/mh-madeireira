import React from 'react';

export default function SearchBar() {
  return (
    <div className="topbar__search">
      <div className="container_serie-ds d-flex align-items-center">
        <div className="search__selections d-flex">
          <select name="montadora" className="active-select" id="select-montadora">
            <option value="">Selecione a Montadora</option>
            <option value="">Volkswagen</option>
          </select>

          <select name="veiculo" className="d-none active-select" id="select-veiculo">
            <option value="">Selecione o Veículo</option>
            <option value="">Gol Quadrado</option>
          </select>

          <select name="ano" className="d-none active-select" id="select-ano">
            <option value="">Ano</option>
            <option value="">2000</option>
          </select>

          <select name="modelo" className="d-none active-select" id="select-modelo">
            <option value="">Selecione o Modelo</option>
            <option value="">4 portas</option>
          </select>
          <span className="active-line" />
        </div>
        <span className="txt-busca">Busca Avançada</span>
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
