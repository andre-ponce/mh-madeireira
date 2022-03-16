import React from 'react';
import MenuSeeAllItem from './MenuSeeAllItem';

function MenuSeeAll({ itens }) {
  return (
    <li className="menu__see-all">
      <i className="fas fa-bars menu-icon" />
      <span>TODAS CATEGORIAS</span>
      <i className="fal fa-angle-down" />

      <ul className="see-all__submenus">
        {itens.map((item) => <MenuSeeAllItem item={item} key={item.id} />)}
      </ul>
    </li>
  );
}

export default MenuSeeAll;
