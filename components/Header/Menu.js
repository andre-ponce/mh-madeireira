import React from 'react';
import { isEmpty } from 'lodash';
import shortid from 'shortid';

function MenuSeeAll({ itens }) {
  return (
    <li className="menu__see-all">
      <i className="fas fa-bars menu-icon" />
      <span>TODAS CATEGORIAS</span>
      <i className="fal fa-angle-down" />

      <ul className="see-all__submenus">
        {itens.map((item) =>
          <MenuSeeAllItem item={item} key={item.id} />
        )}
      </ul>
    </li>
  )
}

function MenuSeeAllItem({ item: linha }) {
  return (
    <li className={`menu__item ${isEmpty(linha.subMenus) ? '' : 'menu__item--has-subcategoria'}`}>

      <a href="/categoria.html">
        <img src="./src/images/icons-menu/icon.png" alt="motor" />
        <span>{linha.nome}</span>
      </a>

      {
        !isEmpty(linha.subMenus) &&
        <>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#filtros" aria-controls="filtros" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-chevron-right"></i>
          </button>

          <ul className="item__subcategorias collapse navbar-collapse nvl-1" id="filtros">
            <li className="category_father_name">
              <a href={`/category/${linha.slug}`}>{linha.nome}</a>
            </li>
            {
              linha.subMenus.map(departamento =>
                <li key={departamento.id} className={`menu__item menu__item-subcategoria ${isEmpty(departamento.subMenus) ? '' : 'menu__item--has-subcategoria'}`}>
                  <a href={`/category/${departamento.slug}`}>{departamento.nome}</a>
                  {
                    !isEmpty(departamento.subMenus) &&
                    <>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#subcategorias" aria-controls="subcategorias" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="far fa-chevron-right"></i>
                      </button>

                      <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                        {
                          departamento.subMenus.map(subDepartamento =>
                            <li key={subDepartamento.id}  className="menu__item">
                              <a href={`/category/${subDepartamento.slug}`}>
                                {subDepartamento.nome}
                              </a>
                            </li>
                          )
                        }
                      </ul>
                    </>
                  }
                </li>
              )
            }
          </ul>
        </>
      }
    </li>
  )
}

function Menu({ categories }) {
  const { staticUrl, menu } = categories;
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

        <MenuSeeAll itens={menu} />

        <li className="menu__item menu__login">
          <a href="/login" className="item__link">
            <img src="/images/login.svg" alt="Login" />
            <span>Entre ou cadastre-se</span>
          </a>
        </li>

        {menu && menu.slice(0, 5).map((linha) => (
          <li className="menu__item menu__item--has-subcategoria" key={linha.id}>
            <a href={`/category/${linha.slug}`}>
              <img src={`${staticUrl}${linha.imagem}`} alt={linha.nome} />
              <span>{linha.nome}</span>
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
                <a href={`/category/${linha.slug}`}>{linha.nome}</a>
              </li>
              {linha.subMenus && linha.subMenus.map((departamento) => (
                <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria" key={departamento.id}>
                  <a href={`/category/${departamento.slug}`}>{departamento.nome}</a>
                  {!isEmpty(departamento.subMenus) && (
                    <>
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
                          <a href={`/category/${departamento.slug}`}>{departamento.nome}</a>
                        </li>
                        {departamento.subMenus && departamento.subMenus.map((subDepartamento) => (
                          <li className="menu__item" key={subDepartamento.id}>
                            <a href={`/category/${subDepartamento.slug}`}>{subDepartamento.nome}</a>
                          </li>
                        ))}
                      </ul>
                    </>
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
