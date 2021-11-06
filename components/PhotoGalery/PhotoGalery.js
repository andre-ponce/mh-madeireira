import { useEffect } from "react";
import Slick from 'react-slick';

export function PhotoGalery({ photos }) {

  const settingsGalery = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplay: false,
    autoplaySpeed: 2000,
  }

  useEffect(() => {
    const gl = document.querySelectorAll('.slider__product__galery .slick-slide:not(.slick-cloned)');
    const bl = document.querySelectorAll('.slider__product__galery .slick-dots > li');

    for (a = 0; a < gl.length; a++) {
      const urlImg = gl[a].querySelector('img').getAttribute('src');
      bl[a].style.backgroundImage = 'url("' + urlImg + '")';
    }
  }, []);

  return (
    <Slick className="slider__product__galery" {...settingsGalery}>
      {photos.map(photo => (
        <div key={photo.id}><img src={photo.src} alt={photo.alt} key={photo.id} /></div>
      ))}
    </Slick>
  );
}
