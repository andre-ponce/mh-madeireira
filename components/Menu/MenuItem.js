import React, { useState } from 'react';
import Link from 'next/link';
import { linkTo } from '@/helpers';
import { url } from '@/services/statics.service';
import MenuNivelOne from './MenuNivelOne';
import Image from 'next/image';

export function MenuItem({ linha }) {
  const [isSubMenuActive, setIsSubMenuActive] = useState();

  const subMenuClassName = isSubMenuActive ? 'menu__item--subcategoria-active' : '';
  const iconSrc = url.imageCategory(linha.imagem, '');
  return (
    <li className={`menu__item menu__item--has-subcategoria ${subMenuClassName} menu__item--invisible`}>
      <Link href={linkTo.category(linha)} passHref>
        <a href>
          {!!iconSrc && <Image src={iconSrc} alt={linha.nome} width={35} height={35} />}
          <span>{linha.nome}</span>
        </a>
      </Link>

      <button className="navbar-toggler" type="button" onClick={() => setIsSubMenuActive(!isSubMenuActive)}>
        <i className="fa-solid fa-chevron-right" />
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
