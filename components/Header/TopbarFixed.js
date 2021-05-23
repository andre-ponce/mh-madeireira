import React from 'react';

function TopbarFixed() {
  return (
    <div className="header__topbar--fixed d-none">
      <div className="container_serie-ds d-flex justify-content-between align-items-center">
        <a href="index.html" className="logo">
          <img className="logo__img" src="/images/logo_img.png" alt="Braskape Logo" />
          <img className="logo__text" src="/images/logo_text.svg" alt="Braskape" />
        </a>
        <button className="topbar--fixed__menu" data-toggle="collapse" data-target="#header__menu" aria-controls="header__menu" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars menu-icon" />
        </button>
        <form className="form-search d-flex">
          <input type="text" className="input-text" placeholder="Digite o que busca ou o código original da peça" />
          <button className="yellow-button">
            <i className="far fa-search" />
          </button>
        </form>
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
          <a href="cadastro.html" className="login__container d-flex align-items-center">
            <img src="/images/login.svg" alt="Login" />
            <div className="d-flex flex-column">
              <span>Entre ou</span>
              <span>Cadastre-se</span>
            </div>
          </a>

        </div>
        <div className="cart">
          <img src="/images/cart.svg" alt="Carrinho" />
          <span className="cart__qtd">0</span>
          <div className="cart__cart-container block_hover cart__cart-container--empty">
            <span className="cart-container__title">SEU CARRINHO ESTÁ VAZIO</span>
            <img src="/images/cart-empty.png" alt="carrinho vazio" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default TopbarFixed;
