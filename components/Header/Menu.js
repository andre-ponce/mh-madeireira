import React from 'react';
import { isEmpty } from 'lodash';

function Menu({ categories }) {
  const { menu } = categories;

  return (
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
            {menu && menu.map((item) => (
              <li className="menu__item">
                <a href="#">{item.nome}</a>
              </li>
            ))}
          </ul>
        </li>

        <li className="menu__item menu__login">
          <a href="/categoria.html" className="item__link">
            <img src="/images/login.svg" alt="Login" />
            <span>Entre ou cadastre-se</span>
          </a>
        </li>

        {menu && menu.slice(0, 5).map((item) => (
          <li className="menu__item menu__item--has-subcategoria">
            <a href="/categoria.html">
              <img src="/images/icons-menu/icon.png" alt={item.nome} />
              <span>{item.nome}</span>
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
                <a href="categoria.html">{item.nome}</a>
              </li>
              {item.subMenus && item.subMenus.map((subMenu) => (
                <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
                  <a href="categoria.html">{subMenu.nome}</a>
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
                  {!isEmpty(subMenu.subMenus) && (
                    <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                      <li className="category_father_name">
                        <a href="categoria.html">{subMenu.nome}</a>
                      </li>
                      {subMenu.subMenus && subMenu.subMenus.map((sub) => (
                        <li className="menu__item">
                          <a href="categoria.html">{sub.nome}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
