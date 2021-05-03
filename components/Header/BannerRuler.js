import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { bannerRulerSettings } from './settings';

function BannerRuler() {
  const [isServer, setServerState] = useState(true);

  const SliderRendered = dynamic(import('react-slick'), {
    ssr: isServer,
  });

  useEffect(() => setServerState(false), []);

  return (
    <div className="container_serie-ds">
      <SliderRendered {...bannerRulerSettings}>
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
      </SliderRendered>
    </div>
  );
}

export default BannerRuler;
