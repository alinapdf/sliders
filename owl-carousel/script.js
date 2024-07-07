$(".owl-carousel").owlCarousel({
  stagePadding: 50,
  loop: true,
  margin: 10,
  nav: true,
  dotsEach: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
