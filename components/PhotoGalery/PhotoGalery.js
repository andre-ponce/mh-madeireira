import { url } from '@/services/statics.service';
import Image from 'next/image';
import Slick from 'react-slick';
import { Loader } from './Loader';

const defaultSettingsGalery = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
};

const SliderWrap = ({ children, ...settings }) => (
  <Slick className="slider__product__galery" {...settings}>{children}</Slick>
);

export function PhotoGalery({ photos, slickSettings }) {
  const settings = {
    ...defaultSettingsGalery,
    ...slickSettings,
  };

  if (photos === undefined) return (<SliderWrap {...settings}><div><Loader /></div></SliderWrap>);
  if (!photos.length) return (<SliderWrap {...settings}><Photo /></SliderWrap>);

  return (
    <SliderWrap {...settings}>
      {photos.map((photo) => <Photo key={photo.id} {...photo} />)}
    </SliderWrap>
  );
}

function Photo({ url: photoUrl, textoAlternativo, titulo }) {
  return (
    <div>
      <div className="slider__product__galery--photo">
        <Image
          src={url.imageProduct(photoUrl)}
          alt={textoAlternativo}
          title={titulo}
          height={400}
          width={400}
        />
      </div>
    </div>
  );
}
