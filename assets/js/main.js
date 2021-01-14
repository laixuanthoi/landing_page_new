$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 4,
      },
    },
  });
});
