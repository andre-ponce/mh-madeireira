import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuSeeAllItem from './MenuSeeAllItem';

function MenuSeeAll({ itens }) {
  return (
    <li className="menu__see-all">
      <FontAwesomeIcon icon="fa-bars" className="menu-icon" />
      <span>TODAS CATEGORIAS</span>
      <FontAwesomeIcon icon="fa-angle-down" />

      <ul className="see-all__submenus">
        {itens.map((item) => <MenuSeeAllItem item={item} key={item.id} />)}
      </ul>
    </li>
  );
}

export default MenuSeeAll;
