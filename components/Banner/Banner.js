import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { bannerSettings, bannerRullerSettings } from './settings';

function Banner({ isMobile }) {
  const [isServer, setServerState] = useState(true);

  const SliderRendered = dynamic(import('react-slick'), {
    ssr: isServer,
  });

  useEffect(() => {
    setServerState(false);
  }, []);

  return (
    <>
      {isMobile ? (
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
      ) : (
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
      )}
      <div className="container_serie-ds">
        <SliderRendered {...bannerRullerSettings}>
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
    </>
  );
}

export default Banner;
