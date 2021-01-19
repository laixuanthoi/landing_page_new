function extractUrlValue(key, url) {
  if (typeof url === "undefined") {
    url = window.location.href;
  }
  var match = url.match("[?&]" + key + "=([^&#]+)");
  return match ? match[1] : null;
}

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
  const btn_val = atob(extractUrlValue("btn"));
  const link_val = atob(extractUrlValue("link"));
  console.log(btn_val, link_val);
});
