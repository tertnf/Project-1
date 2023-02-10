$(document).ready(function () {
  $(".feedbacks").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    easing: "linear",
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 650,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  });
});

// $(".slider").slick("setPosition");
// $(".data").slick();
// $(".feedback-arrow-left").click(function (event) {
//   $(".slider").slick("slickPrev");
// });
// $(".feedback-arrow-right").click(function (event) {
//   $(".slider").slick("slickNext");
// });
