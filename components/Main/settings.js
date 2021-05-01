export const mostWantedSettings = {
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 690,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export const brandsSettings = {
  className: 'store-front-brands__carousel',
  slidesToShow: 7,
  variableWidth: true,
  centerMode: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
