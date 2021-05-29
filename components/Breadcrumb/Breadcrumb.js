import React from 'react';

function Breadcrumb() {
  return (
    <nav className="container_serie-ds">
      <ul className="main__breadcrumb">
        <li>
          <a href="index.html">HOME</a>
        </li>
        <li className="breadcrumb__icon">
          <i className="fas fa-chevron-right" />
        </li>
        <li>
          <a href="index.html">
            <h1>Categoria</h1>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumb;
