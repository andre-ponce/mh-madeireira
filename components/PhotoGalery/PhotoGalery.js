import { useEffect } from "react";
import Slick from 'react-slick';
import { Loader } from "./Loader";

const defaultSettingsGalery = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false
}

export function PhotoGalery({ photos, slickSettings }) {

  const settings = {
    ...defaultSettingsGalery,
    ...slickSettings
  };

  useEffect(() => {

    if (!photos) {
      return;
    }

    const slides = document.querySelectorAll('.slider__product__galery .slick-slide:not(.slick-cloned) img');
    const li = document.querySelectorAll('.slider__product__galery .slick-dots > li');

    slides.forEach((img, index) => {
      if (li[index]) {
        li[index].style.backgroundImage = `url("${img.src}")`;
      }
    });
  }, [photos]);

  /**
   * O Slick só aplica as setas de navegação quando existem mais de uma imagem, o que é o ideal!
   * Mas no layout da galeria, isso deixa uma vazio bem desconfortável, então duplico a imagem,
   * apenas para manter as arrows e suprir esse espaço.
   */
  const galery = [...(photos || [])];
  if (galery.length == 1) {
    galery.push(galery[0]);
  }

  return (
    photos == undefined
      ? (
        <Slick className="slider__product__galery" {...settings}>
          <div>
            <Loader />
          </div>
        </Slick>
      )
      : (
        <Slick className={`slider__product__galery ${photos.length > 1 ? 'slider__product__galery--has-thumbs' : ''}`} {...settings}>
          {galery.map(photo => (
            <div key={photo.id}>
              <img src={photo.url} alt={photo.textoAlternativo} title={photo.titulo} />
            </div>
          ))}
        </Slick>
      )
  );
}
