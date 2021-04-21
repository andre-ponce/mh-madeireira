import React from 'react';
import Slick from 'react-slick';
import { brandsSettings } from './settings';

function Brands() {
  return (
    <section
      className="main__store-front-brands"
      data-aos="fade-up-right"
      data-aos-duration="2000"
      data-aos-offset="500"
    >
      <div className="container_serie-ds">
        <h2 className="title-border-left">Top Marcas</h2>
        <Slick className="store-front-brands__carousel" {...brandsSettings}>
          <a href="#">
            <img src="/images/braskape-logo-textar.png" alt="marca1" />
          </a>
          <a href="#">
            <img src="/images/braskape-logo-bosh.png" alt="marca1" />
          </a>
          <a href="#">
            <img src="/images/braskape-logo-fram.png" alt="marca1" />
          </a>
          <a href="#">
            <img src="/images/braskape-logo-philips.png" alt="marca1" />
          </a>
          <a href="#">
            <img src="/images/braskape-logo-fremax.png" alt="marca1" />
          </a>
          <a href="#">
            <img src="/images/braskape-logo-kyb.png" alt="marca1" />
          </a>
          <a href="#">
            <img src="/images/braskape-logo-luk.png" alt="marca1" />
          </a>
          <a href="#">
            <img src="/images/braskape-logo-philips.png" alt="marca1" />
          </a>
        </Slick>
      </div>
    </section>
  );
}

export default Brands;
