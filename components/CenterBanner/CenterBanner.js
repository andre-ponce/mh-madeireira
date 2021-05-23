import React from 'react';

function CenterBanner() {
  return (
    <div className="main__banners-centrais container_serie-ds">
      <a href="#" data-aos="fade-right" data-aos-duration="1000">
        <img src="/images/braskape-image-mosaico-1.jpg" alt="Ofertas 50% OFF" />
      </a>
      <div className="banners-centrais__group" data-aos="fade-left" data-aos-duration="1000">
        <a href="#">
          <img src="/images/braskape-image-mosaico-2.jpg" alt="Ofertas 30% OFF" />
        </a>
        <a href="#">
          <img src="/images/braskape-image-mosaico-3.jpg" alt="Ofertas 30% OFF" />
        </a>
      </div>
    </div>
  );
}

export default CenterBanner;
