import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { bannerSettings, bannerRullerSettings } from './settings';

function Banner({ carousel, isMobile }) {
  const [isServer, setServerState] = useState(true);

  const SliderRendered = dynamic(import('react-slick'), {
    ssr: isServer,
  });

  useEffect(() => {
    setServerState(false);
  }, []);

  const urlImage = ({ urlMobile, url }) => {
    if (isMobile) {
      return urlMobile || url;
    }

    return url;
  };

  return (
    <>
      <SliderRendered {...bannerSettings}>
        {
          carousel.map((banner) => (
            <a href={banner.href} key={banner.href} target={banner.target || '_blank'}>
              <img
                src={urlImage(banner)}
                alt={banner.textoAlternativo}
              />
            </a>
          ))
        }
      </SliderRendered>

      <div className="container_serie-ds">
        <SliderRendered {...bannerRullerSettings}>
          <a href="/">
            <img src="/images/banner_regua/banner.jpg" alt="Bem vindo à nova loja" />
          </a>
          <a href="/">
            <img src="/images/banner_regua/banner2.jpg" alt="Bem vindo à nova loja" />
          </a>
          <a href="/">
            <img src="/images/banner_regua/banner3.jpg" alt="Bem vindo à nova loja" />
          </a>
          <a href="/">
            <img src="/images/banner_regua/banner4.jpg" alt="Bem vindo à nova loja" />
          </a>
        </SliderRendered>
      </div>
    </>
  );
}

export default Banner;
