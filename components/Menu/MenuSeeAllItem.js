import React from 'react';
import { isEmpty } from 'lodash';

function MenuSeeAllItem({ item: linha }) {
  return (
    <li className={`menu__item ${isEmpty(linha.subMenus) ? '' : 'menu__item--has-subcategoria'}`}>

      <a href="/categoria.html">
        <img src="./src/images/icons-menu/icon.png" alt="motor" />
        <span>{linha.nome}</span>
      </a>

      {!isEmpty(linha.subMenus) &&
        <>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#filtros" aria-controls="filtros" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-chevron-right"></i>
          </button>

          <ul className="item__subcategorias collapse navbar-collapse nvl-1" id="filtros">
            <li className="category_father_name">
              <a href={`/category/${linha.slug}`}>{linha.nome}</a>
            </li>
            {linha.subMenus.map(departamento => <li key={departamento.id} className={`menu__item menu__item-subcategoria ${isEmpty(departamento.subMenus) ? '' : 'menu__item--has-subcategoria'}`}>
              <a href={`/category/${departamento.slug}`}>{departamento.nome}</a>
              {!isEmpty(departamento.subMenus) &&
                <>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#subcategorias" aria-controls="subcategorias" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="far fa-chevron-right"></i>
                  </button>

                  <ul className="subcategoria__group collapse navbar-collapse nvl-2" id="subcategorias">
                    {departamento.subMenus.map(subDepartamento => <li key={subDepartamento.id} className="menu__item">
                      <a href={`/category/${subDepartamento.slug}`}>
                        {subDepartamento.nome}
                      </a>
                    </li>
                    )}
                  </ul>
                </>}
            </li>
            )}
          </ul>
        </>}
    </li>
  );
}

export default MenuSeeAllItem;
