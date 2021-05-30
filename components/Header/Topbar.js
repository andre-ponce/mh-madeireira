import React from 'react';

function Topbar() {
  return (
    <div className="header__topbar">
      <div className="topbar__top">
        <div className="container_serie-ds d-flex justify-content-between align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#header__menu"
          >
            <i className="fas fa-bars menu-icon" />
          </button>
          <a href="index.html" className="logo">
            <img className="logo__img" src="/images/logo_img.png" alt="Braskape Logo" />
            <img className="logo__text" src="/images/logo_text.svg" alt="Braskape" />
            <h1 className="d-none">Braskape</h1>
          </a>
          <span className="topbar__top">
            Varejista de peças automotivas
            {' '}
            <strong className="txt-yellow">desde 1978</strong>

          </span
          >
          <span className="topbar__top"><strong className="txt-yellow">sac@braskape.com.br</strong></span>
          <span className="topbar__top">
            Televendas:
            {' '}
            <strong className="txt-yellow">(11) 5180-1690</strong>

          </span
          >
          <div className="help">
            <img src="/images/help.svg" alt="Ajuda" />
            <span>Ajuda</span>
            <div className="block_hover">
              <span>sac@braskape.com.br</span>
              <span>(11) 5180-1690</span>
              <span>(11) 99999-9999</span>
            </div>
          </div>
          <div className="login">

            <a className="login__container d-flex align-items-center">
              <img src="/images/login.svg" alt="Login" />
              <div className="d-flex flex-column">
                <span>Olá Fulano</span>
                <span>
                  Minha conta
                  {' '}
                  <i style={{ color: '#545454' }} className="fal fa-chevron-down" />

                </span>
              </div>
            </a>
            <div className="block_hover">
              <a href="login.html">Minha conta</a>
              <a href="login.html">Meus pedidos</a>
              <a href="login.html">Sair</a>
            </div>

          </div>
          <div className="cart">
            <img src="/images/cart.svg" alt="Carrinho" />
            <span className="cart__qtd">99</span>

            <div className="cart__cart-container block_hover">
              <span className="cart-container__title">RESUMO DO SEU CARRINHO</span>
              <ul className="cart-container__items">
                <li className="items__item">
                  <button className="item__delete">
                    <img src="/images/remove-cart.svg" alt="X" />
                  </button>
                  <img
                    className="item__image"
                    src="/images/home/product-mini-cart.png"
                    alt="produto"
                  />
                  <span className="item__name">
                    Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore...
                  </span>
                  <div className="item__values">
                    <span className="values__qtd">1un x</span>
                    <span className="values__price">R$ 999,999</span>
                  </div>
                </li>
                <li className="items__item">
                  <button className="item__delete">
                    <img src="/images/remove-cart.svg" alt="X" />
                  </button>
                  <img
                    className="item__image"
                    src="/images/home/product-mini-cart.png"
                    alt="produto"
                  />
                  <span className="item__name">
                    Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore...
                  </span>
                  <div className="item__values">
                    <span className="values__qtd">1un x</span>
                    <span className="values__price">R$ 999,999</span>
                  </div>
                </li>
                <li className="items__item">
                  <button className="item__delete">
                    <img src="/images/remove-cart.svg" alt="X" />
                  </button>
                  <img
                    className="item__image"
                    src="/images/home/product-mini-cart.png"
                    alt="produto"
                  />
                  <span className="item__name">
                    Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore...
                  </span>
                  <div className="item__values">
                    <span className="values__qtd">1un x</span>
                    <span className="values__price">R$ 999,999</span>
                  </div>
                </li>
                <li className="items__item">
                  <button className="item__delete">
                    <img src="/images/remove-cart.svg" alt="X" />
                  </button>
                  <img
                    className="item__image"
                    src="/images/home/product-mini-cart.png"
                    alt="produto"
                  />
                  <span className="item__name">
                    Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore...
                  </span>
                  <div className="item__values">
                    <span className="values__qtd">1un x</span>
                    <span className="values__price">R$ 999,999</span>
                  </div>
                </li>
                <li className="items__item">
                  <button className="item__delete">
                    <img src="/images/remove-cart.svg" alt="X" />
                  </button>
                  <img
                    className="item__image"
                    src="/images/home/product-mini-cart.png"
                    alt="produto"
                  />
                  <span className="item__name">
                    Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore...
                  </span>
                  <div className="item__values">
                    <span className="values__qtd">1un x</span>
                    <span className="values__price">R$ 999,999</span>
                  </div>
                </li>
              </ul>
              <div className="cart-container__subtotal">
                <span className="subtotal__title">SUBTOTAL</span>
                <div className="subtotal__prices">
                  <span className="prices__price">R$ 999,99</span>
                  <span className="prices__installments">
                    Em até
                    <strong>12x</strong>
                    de
                    <strong>R$ R$ 999,99</strong>
                  </span>
                </div>
              </div>
              <div className="cart-container__actions">
                <a href="/" className="actions__return">Ir para o carrinho</a>
                <a href="/" className="actions__buy"> FINALIZAR COMPRA </a>
              </div>
            </div>

          </div>
        </div>
      </div>
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
              placeholder="Digite o que busca ou o código original da peça"
            />
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
    </div>
  );
}

export default Topbar;
