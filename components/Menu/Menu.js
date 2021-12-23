import React, { useContext, useRef } from 'react';
import Link from 'next/link'
import GlobalDataContext from '../../contexts/GlobalDataContext';

import { linkTo } from '../../helpers'
import MenuSeeAll from './MenuSeeAll';
import MenuNivelOne from './MenuNivelOne';
import { useAutoSizedMenu } from './useAutoSizedMenu';
import { ButtonCloseMenuMobile } from './ButtonCloseMenuMobile';

function Menu({ isFixed, isMenuMobileActive, closeMenuMobile }) {
  const {
    static: {
      urlBaseEstaticos,
      diretorioCategorias,
    },
    menu,
  } = useContext(GlobalDataContext);
  const staticUrl = `${urlBaseEstaticos}${diretorioCategorias}/`;

  const ulRef = useRef();
  useAutoSizedMenu(ulRef);

  return (
    <nav className={`header__menu ${isMenuMobileActive ? 'header__menu--active' : ''} ${isFixed ? 'fixed' : ''}`}>

      <ButtonCloseMenuMobile close={closeMenuMobile} />

      <ul className="container_serie-ds categorias_container--sd" ref={ulRef}>

        <MenuSeeAll itens={menu} />

        <li className="menu__item menu__login">
          <a href="/login" className="item__link">
            <img src="/images/login.svg" alt="Login" />
            <span>Entre ou cadastre-se</span>
          </a>
        </li>

        {menu && menu.map((linha) => (
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
