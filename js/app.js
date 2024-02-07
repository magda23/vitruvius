var swiper = new Swiper(".s1", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    300: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
var swiper2 = new Swiper(".s2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".s2 .swiper-button-next",
    prevEl: ".s2 .swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
