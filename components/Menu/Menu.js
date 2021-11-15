import React, { useContext } from 'react';
import Link from 'next/link'
import GlobalDataContext from '../../contexts/GlobalDataContext';

import { linkTo } from '../../helpers'
import MenuSeeAll from './MenuSeeAll';
import MenuNivelOne from './MenuNivelOne';

function Menu() {
  const {
    static: {
      urlBaseEstaticos,
      diretorioCategorias,
    },
    menu,
  } = useContext(GlobalDataContext);

  const staticUrl = `${urlBaseEstaticos}${diretorioCategorias}/`;

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

        {menu && menu.slice(0, 8).map((linha) => (
          <li className="menu__item menu__item--has-subcategoria" key={linha.id}>
            <Link href={linkTo.category(linha)} passHref>
              <a>
                <img src={`${staticUrl}${linha.imagem}`} alt={linha.nome} />
                <span>{linha.nome}</span>
              </a>
            </Link>
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
                <Link href={linkTo.category(linha)} passHref>
                  <a>{linha.nome}</a>
                </Link>
              </li>
              {linha.subMenus && linha.subMenus.map((departamento) => (
                <MenuNivelOne key={departamento.id} category={departamento} />
              ))}
            </ul>
          </li>
        ))}

      </ul>
    </nav>
  );
}

export default Menu;
