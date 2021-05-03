import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { bannerSettings } from './settings';

function BannerMobile() {
  const [isServer, setServerState] = useState(true);

  const SliderRendered = dynamic(import('react-slick'), {
    ssr: isServer,
  });

  useEffect(() => setServerState(false), []);

  return (
    <SliderRendered {...bannerSettings}>
      <a href="#">
        <img src="/images/full-banner-mobile.png" alt="Bem vindo à nova loja" />
      </a>
      <a href="#">
        <img src="/images/full-banner-mobile.png" alt="Bem vindo à nova loja" />
      </a>
      <a href="#">
        <img src="/images/full-banner-mobile.png" alt="Bem vindo à nova loja" />
      </a>
      <a href="#">
        <img src="/images/full-banner-mobile.png" alt="Bem vindo à nova loja" />
      </a>
    </SliderRendered>
  );
}

export default BannerMobile;
