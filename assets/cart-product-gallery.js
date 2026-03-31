document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".card-product-media-swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Optional responsive
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    },
  });
});
