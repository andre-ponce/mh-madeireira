import React from 'react';
import Slick from 'react-slick';

import settings from './settings';

function Brands({ brands }) {
  const { staticUrl, marcas } = brands;

  return (
    <section
      className="main__store-front-brands"
      data-aos="fade-up-right"
      data-aos-duration="2000"
      data-aos-offset="500"
    >
      <div className="container_serie-ds">
        <h2 className="title-border-left">Top Marcas</h2>
        <Slick {...settings}>
          {marcas && marcas.map((marca) => (
            <a href="#">
              <img src={`${staticUrl}${marca.imagem}`} alt={marca.nome} />
            </a>
          ))}
        </Slick>
      </div>
    </section>
  );
}

export default Brands;
