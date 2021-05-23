export default {
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
