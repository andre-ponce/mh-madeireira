import React, { useContext, useRef } from 'react';
import GlobalDataContext from '@/contexts/GlobalDataContext';

import MenuSeeAll from './MenuSeeAll';
import { useAutoSizedMenu } from './useAutoSizedMenu';
import { ButtonCloseMenuMobile } from './ButtonCloseMenuMobile';
import UserTag from '../UserTag/UserTag'; import { MenuItem } from './MenuItem';

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
    <>
      {
        isFixed && (
          <nav className="header__menu">
            <ul className="container_serie-ds categorias_container--sd" />
          </nav>
        )
      }
      <nav className={`header__menu ${isMenuMobileActive ? 'header__menu--active' : ''} ${isFixed ? 'fixed' : ''}`}>
        <ButtonCloseMenuMobile close={closeMenuMobile} />
        <ul className="container_serie-ds categorias_container--sd calculating" ref={ulRef}>
          <MenuSeeAll itens={menu} />
          <li className="menu__item menu__login">
            <UserTag isMobile />
          </li>
          {menu && menu.map((linha) => (
            <MenuItem key={linha.id} linha={linha} staticUrl={staticUrl} />
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Menu;
