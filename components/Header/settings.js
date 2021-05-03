import { isMobile } from 'react-device-detect';

export const bannerSettings = {
  className: isMobile
    ? 'header__banner header__banner--mobile full-banner'
    : 'header__banner header__banner--desk full-banner',
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: false,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const bannerRulerSettings = {
  className: 'header__banner banner-ruler',
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
