import React from 'react';
import Slider from 'react-slick';
import { bannerRulerSettings } from './settings';

function BannerRuler() {
  return (
    <div className="container_serie-ds">
      <Slider
        className="header__banner banner-ruler"
        {...bannerRulerSettings}
      >
        <a href="#">
          <img src="/images/banner_regua/banner.jpg" alt="Bem vindo à nova loja" />
        </a>
        <a href="#">
          <img src="/images/banner_regua/banner2.jpg" alt="Bem vindo à nova loja" />
        </a>
        <a href="#">
          <img src="/images/banner_regua/banner3.jpg" alt="Bem vindo à nova loja" />
        </a>
        <a href="#">
          <img src="/images/banner_regua/banner4.jpg" alt="Bem vindo à nova loja" />
        </a>
      </Slider>
    </div>
  );
}

export default BannerRuler;
