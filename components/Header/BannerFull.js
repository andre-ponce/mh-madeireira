import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { bannerSettings } from './settings';

function BannerFull() {
  const [isServer, setServerState] = useState(true);

  const SliderRendered = dynamic(import('react-slick'), {
    ssr: isServer,
  });

  useEffect(() => {
    setServerState(false);
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <SliderRendered {...bannerSettings}>
        <a href="#">
          <img src="/images/braskape-banner.jpg" alt="Bem vindo à nova loja" />
        </a>
        <a href="#">
          <img src="/images/braskape-banner.jpg" alt="Bem vindo à nova loja" />
        </a>
        <a href="#">
          <img src="/images/braskape-banner.jpg" alt="Bem vindo à nova loja" />
        </a>
        <a href="#">
          <img src="/images/braskape-banner.jpg" alt="Bem vindo à nova loja" />
        </a>
      </SliderRendered>
    </div>
  );
}

export default BannerFull;
