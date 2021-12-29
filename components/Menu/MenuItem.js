import React, { useState } from 'react';
import Link from 'next/link';
import { linkTo } from '../../helpers';
import MenuNivelOne from './MenuNivelOne';

export function MenuItem({ linha, staticUrl }) {
  const [isSubMenuActive, setIsSubMenuActive] = useState();

  const subMenuClassName = isSubMenuActive ? 'menu__item--subcategoria-active' : '';

  return (
    <li className={`menu__item menu__item--has-subcategoria ${subMenuClassName}`}>
      <Link href={linkTo.category(linha)} passHref>
        <a>
          <img src={`${staticUrl}${linha.imagem}`} alt={linha.nome} />
          <span>{linha.nome}</span>
        </a>
      </Link>

      <button className="navbar-toggler" type="button" onClick={() => setIsSubMenuActive(!isSubMenuActive)}>
        <i className="fas fa-chevron-right" />
      </button>

      <ul className="item__subcategorias navbar-collapse nvl-1">
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
  );
}
