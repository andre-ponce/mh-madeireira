import React from 'react';
import { isEmpty } from 'lodash';

function MenuNivelOne({ category }) {
  return (
    <li className="menu__item menu__item-subcategoria menu__item--has-subcategoria" key={category.id}>
      <a href={`/category/${category.slug}`}>{category.nome}</a>
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
            <i className="far fa-chevron-right" />
          </button>

          <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
            <li className="category_father_name">
              <a href={`/category/${category.slug}`}>{category.nome}</a>
            </li>
            {category.subMenus && category.subMenus.map((subDepartamento) => (
              <li className="menu__item" key={subDepartamento.id}>
                <a href={`/category/${subDepartamento.slug}`}>{subDepartamento.nome}</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
}

export default MenuNivelOne;
