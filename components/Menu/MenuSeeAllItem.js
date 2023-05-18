import React from 'react';
import { isEmpty } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { linkTo } from '@/helpers';

function MenuSeeAllItem({ item: linha }) {
  return (
    <li className={`menu__item ${isEmpty(linha.subMenus) ? '' : 'menu__item--has-subcategoria'}`}>

      <Link href={linkTo.category(linha)} passHref>
        <a>
          <img src="./src/images/icons-menu/icon.png" alt={linha.nome} />
          <span>{linha.nome}</span>
        </a>
      </Link>

      {
        !isEmpty(linha.subMenus)
        && (
          <>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#departamentos" aria-controls="departamentos" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon="fa-chevron-right" />
            </button>

            <ul className="item__subcategorias collapse navbar-collapse nvl-1" id="departamentos">
              <li className="category_father_name">
                <Link href={linkTo.category(linha)} passHref><a>{linha.nome}</a></Link>
              </li>
              {
                linha.subMenus.map((departamento) => (
                  <li key={departamento.id} className={`menu__item menu__item-subcategoria ${isEmpty(departamento.subMenus) ? '' : 'menu__item--has-subcategoria'}`}>
                    <Link href={linkTo.category(departamento)} passHref>
                      <a>{departamento.nome}</a>
                    </Link>
                    {
                      !isEmpty(departamento.subMenus)
                      && (
                        <>
                          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#subdepartamentos" aria-controls="subdepartamentos" aria-expanded="false" aria-label="Toggle navigation">
                            <FontAwesomeIcon icon="fa-chevron-right" />
                          </button>
                          <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subdepartamentos">
                            {
                              departamento.subMenus.map((subDepartamento) => (
                                <li key={subDepartamento.id} className="menu__item">
                                  <Link href={linkTo.category(subDepartamento)} passHref>
                                    <a>{subDepartamento.nome}</a>
                                  </Link>
                                </li>
                              ))
                            }
                          </ul>
                        </>
                      )
                    }
                  </li>
                ))
              }
            </ul>
          </>
        )
      }
    </li>
  );
}

export default MenuSeeAllItem;
