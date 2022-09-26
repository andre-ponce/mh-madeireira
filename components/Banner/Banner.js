import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { url } from '@/services/statics.service';
import { bannerSettings } from './settings';

function Banner({ carousel, isMobile }) {
  const [isServer, setServerState] = useState(true);

  const SliderRendered = dynamic(import('react-slick'), {
    ssr: isServer,
  });

  useEffect(() => {
    setServerState(false);
  }, []);

  const urlImage = ({ urlMobile, url: urlDesktop }) => {
    if (isMobile) {
      return urlMobile || urlDesktop;
    }

    return urlDesktop;
  };

  return (
    <>
      <SliderRendered {...bannerSettings}>
        {
          carousel.map((banner) => (
            <a href={banner.href} key={banner.href} target={banner.target || '_blank'}>
              <img
                src={url.imageBanner(urlImage(banner))}
                alt={banner.textoAlternativo}
              />
            </a>
          ))
        }
      </SliderRendered>
    </>
  );
}

export default Banner;
