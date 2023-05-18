import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { linkTo } from '@/helpers';
import { url } from '@/services/statics.service';
import MenuNivelOne from './MenuNivelOne';
import { RemoteImage } from '../Image';

export function MenuItem({ linha }) {
  const [isSubMenuActive, setIsSubMenuActive] = useState();

  const subMenuClassName = isSubMenuActive ? 'menu__item--subcategoria-active' : '';
  const iconSrc = url.imageCategory(linha.imagem, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=');
  return (
    <li className={`menu__item menu__item--has-subcategoria ${subMenuClassName} menu__item--invisible`}>
      <Link href={linkTo.category(linha)} passHref>
        <a href>
          <RemoteImage src={iconSrc} alt={linha.nome} width={35} height={35} />
          <span className="menu__item--name">{linha.nome}</span>
        </a>
      </Link>

      {
        !!linha.subMenus?.length && (
          <button className="navbar-toggler" type="button" onClick={() => setIsSubMenuActive(!isSubMenuActive)}>
            <FontAwesomeIcon icon="fa-chevron-right" />
          </button>
        )
      }

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
