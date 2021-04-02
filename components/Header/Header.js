import React from 'react';
import { isMobile } from 'react-device-detect';
import BannerFull from './BannerFull';
import BannerMobile from './BannerMobile';
import BannerRuler from './BannerRuler';
import Topbar from './Topbar';

function Header() {
  return (
    <header className="header">
      <Topbar />

      <div className="header__topbar--fixed d-none">
        <div className="container_serie-ds d-flex justify-content-between align-items-center">
          <a href="index.html" className="logo">
            <img className="logo__img" src="/images/logo_img.png" alt="Braskape Logo" />
            <img className="logo__text" src="/images/logo_text.svg" alt="Braskape" />
          </a>
          <button
            className="topbar--fixed__menu"
            data-toggle="collapse"
            data-target="#header__menu"
            aria-controls="header__menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars menu-icon" />
          </button>
          <form className="form-search d-flex">
            <input
              type="text"
              className="input-text"
              placeholder="Digite o que busca ou o código original da peça"
            />
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

      <nav id="header__menu" className="header__menu collapse">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#header__menu"
        >
          <img src="/images/icons-menu/close-menu.png" alt="menu" />
        </button>
        <ul className="container_serie-ds categorias_container--sd">
          <li className="menu__see-all">
            <i className="fas fa-bars menu-icon" />
            <span>TODAS CATEGORIAS</span>
            <i className="fal fa-angle-down" />
            <ul className="see-all__submenus">
              <li className="menu__item">
                <a href="categoria.html"> Subcategoria </a>
              </li>
              <li className="menu__item">
                <a href="categoria.html"> Subcategoria </a>
              </li>
              <li className="menu__item">
                <a href="categoria.html"> Subcategoria </a>
              </li>
              <li className="menu__item">
                <a href="categoria.html"> Subcategoria </a>
              </li>
              <li className="menu__item">
                <a href="categoria.html"> Subcategoria </a>
              </li>
              <li className="menu__item">
                <a href="categoria.html"> Subcategoria </a>
              </li>
            </ul>
          </li>
          <li className="menu__item menu__login">
            <a href="/categoria.html" className="item__link">
              <img src="/images/login.svg" alt="Login" />
              <span>Entre ou cadastre-se</span>
            </a>
          </li>
          <li className="menu__item menu__item--has-subcategoria">
            <a href="/categoria.html">
              <img src="/images/icons-menu/icon.png" alt="motor" />
              <span>Lorem Ipsum</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#filtros"
              aria-controls="filtros"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-chevron-right" />
            </button>
            <ul className="item__subcategorias collapse navbar-collapse nvl-1" id="filtros">
              <li className="category_father_name">
                <a href="categoria.html">Lorem Ipsum</a>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
            </ul>
          </li>
          <li className="menu__item menu__item--has-subcategoria">
            <a href="/categoria.html">
              <img src="/images/icons-menu/icon2.png" alt="motor" />
              <span>Lorem Ipsum</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#filtros1"
              aria-controls="filtros"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-chevron-right" />
            </button>
            <ul className="item__subcategorias collapse navbar-collapse nvl-1" id="filtros1">
              <li className="category_father_name">
                <a href="categoria.html">Lorem Ipsum</a>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
            </ul>
          </li>
          <li className="menu__item menu__item--has-subcategoria">
            <a href="/categoria.html">
              <img src="/images/icons-menu/icon3.png" alt="motor" />
              <span>Lorem Ipsum</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#filtros2"
              aria-controls="filtros"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-chevron-right" />
            </button>
            <ul className="item__subcategorias collapse navbar-collapse nvl-1" id="filtros2">
              <li className="category_father_name">
                <a href="categoria.html">Lorem Ipsum</a>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
            </ul>
          </li>
          <li className="menu__item menu__item--has-subcategoria">
            <a href="/categoria.html">
              <img src="/images/icons-menu/icon4.png" alt="motor" />
              <span>Lorem Ipsum</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#filtros3"
              aria-controls="filtros"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-chevron-right" />
            </button>
            <ul className="item__subcategorias collapse navbar-collapse nvl-1" id="filtros3">
              <li className="category_father_name">
                <a href="categoria.html">Lorem Ipsum</a>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
            </ul>
          </li>
          <li className="menu__item menu__item--has-subcategoria">
            <a href="/categoria.html">
              <img src="/images/icons-menu/icon5.png" alt="motor" />
              <span>Lorem Ipsum</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#filtros4"
              aria-controls="filtros"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-chevron-right" />
            </button>
            <ul className="item__subcategorias collapse navbar-collapse nvl-1" id="filtros4">
              <li className="category_father_name">
                <a href="categoria.html">Lorem Ipsum</a>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
            </ul>
          </li>
          <li className="menu__item menu__item--has-subcategoria">
            <a href="/categoria.html">
              <img src="/images/icons-menu/icon6.png" alt="motor" />
              <span>Lorem Ipsum</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#filtros5"
              aria-controls="filtros"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-chevron-right" />
            </button>
            <ul className="item__subcategorias collapse navbar-collapse nvl-1" id="filtros5">
              <li className="category_father_name">
                <a href="categoria.html">Lorem Ipsum</a>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
            </ul>
          </li>
          <li className="menu__item menu__item--has-subcategoria">
            <a href="/categoria.html">
              <img src="/images/icons-menu/icon7.png" alt="motor" />
              <span>Lorem Ipsum</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#filtros6"
              aria-controls="filtros"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-chevron-right" />
            </button>
            <ul className="item__subcategorias collapse navbar-collapse nvl-1" id="filtros6">
              <li className="category_father_name">
                <a href="categoria.html">Lorem Ipsum</a>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#subcategorias"
                  aria-controls="subcategorias"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                  <li className="category_father_name">
                    <a href="categoria.html">Aruela encosto</a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                  <li className="menu__item">
                    <a href="categoria.html"> Subcategoria </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
              <li className="menu__item menu__item-subcategoria">
                <a href="categoria.html">Aruela Encosto</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {isMobile ? <BannerMobile /> : <BannerFull /> }

      <BannerRuler />
    </header>
  );
}

export default Header;
