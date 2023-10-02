export default {
  className: 'store-front-brands__carousel',
  slidesToShow: 7,
  variableWidth: true,
  centerMode: false,
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
