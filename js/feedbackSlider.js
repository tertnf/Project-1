$(document).ready(function () {
  $(".feedbacks").slick({
    infinite: true,
    speed: 500,
    easing: "ease",
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,

      //     slidesToScroll: 1,
      //   },
      // },
      // {
      //   breakpoint: 400,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
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
