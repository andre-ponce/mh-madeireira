import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { bannerSettings, bannerRullerSettings } from './settings';

function CategoryBanner() {
  return (
    <img
      className="main__banner"
      src="/images/braskape_banner-category.jpg"
      alt="Categoria1"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-offset="300"
    />
  );
}

function Wrapper({ children, isMobile }) {
  return isMobile
    ? <div data-aos="zoom-in" data-aos-duration="1000">{children}</div>
    : <>{children}</>;
}

function Banner({ carousel, isMobile, isCategory }) {
  const [isServer, setServerState] = useState(true);

  const SliderRendered = dynamic(import('react-slick'), {
    ssr: isServer,
  });

  useEffect(() => {
    setServerState(false);
  }, []);

  if (isCategory) {
    return (
      <CategoryBanner />
    );
  }

  const urlImage = ({urlMobile, url}, isMobile) => {
    if (isMobile) {
      return urlMobile || url;
    }

    return url;
  }

  return (
    <>
      <Wrapper isMobile={isMobile}>
        <SliderRendered {...bannerSettings}>
          {
            carousel.map(banner => (
              <a href={banner.href} target={banner.target || '_blank'}>
                <img
                  src={urlImage(banner, isMobile)}
                  title={banner.titulo}
                  alt={banner.textoAlternativo}
                />
              </a>
            ))
          }
        </SliderRendered>
      </Wrapper>

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
