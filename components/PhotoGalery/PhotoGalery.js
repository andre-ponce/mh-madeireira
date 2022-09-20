import { url } from '@/services/statics.service';
import Image from 'next/image';
import { useEffect } from 'react';
import Slick from 'react-slick';
import { Loader } from './Loader';

const defaultSettingsGalery = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
};

export function PhotoGalery({ photos, slickSettings }) {
  const settings = {
    ...defaultSettingsGalery,
    ...slickSettings,
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

  const galery = [...(photos || [])];

  return (
    photos === undefined
      ? (
        <Slick className="slider__product__galery" {...settings}>
          <div>
            <Loader />
          </div>
        </Slick>
      )
      : (
        <Slick className={`slider__product__galery ${photos.length > 1 ? 'slider__product__galery--has-thumbs' : ''}`} {...settings}>
          {galery.map((photo) => (
            <div className="slider__product__galery--photo" key={photo.id}>
              <Image
                src={url.imageProduct(photo.url)}
                alt={photo.textoAlternativo}
                title={photo.titulo}
                height={400}
                width={400}
              />
            </div>
          ))}
        </Slick>
      )
  );
}
