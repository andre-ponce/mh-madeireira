import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { isEmpty } from 'lodash';
import { linkTo } from '@/helpers';

function MenuNivelOne({ category }) {
  return (
    <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria">
      <Link href={linkTo.category(category)} passHref>
        <a>{category.nome}</a>
      </Link>
      {!isEmpty(category.subMenus) && (
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
            <FontAwesomeIcon icon="fa-chevron-right" />
          </button>

          <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
            <li className="category_father_name">
              <Link href={linkTo.category(category)} passHref>
                <a>{category.nome}</a>
              </Link>
            </li>
            {category.subMenus && category.subMenus.map((subDepartamento) => (
              <li className="menu__item" key={subDepartamento.id}>
                <Link href={linkTo.category(subDepartamento)} passHref>
                  <a>{subDepartamento.nome}</a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
}

export default MenuNivelOne;
