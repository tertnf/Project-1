$(document).ready(function () {
  $(".feedbacks").slick({
    arrows: false,
    // appendArrows: $(".arrows-feedback-slider"),
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

// $(".feedbacks").slick("setPosition");
// $(".data").slick();
$(".feedback-arrow-left").click(function (event) {
  $(".feedbacks").slick("slickPrev");
});
$(".feedback-arrow-right").click(function (event) {
  $(".feedbacks").slick("slickNext");
});
