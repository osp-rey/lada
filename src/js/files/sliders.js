export default function sliders() {
  const introSlider = document.querySelector(".s-intro__slider");

  if (introSlider) {
    const swiper = new Swiper(introSlider, {
      speed: 900,
      slidesPerView: "auto",
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".s-intro .slider-pagination",
        clickable: true,
      },
      navigation: {
        prevEl: ".s-intro .slider-arrow._prev",
        nextEl: ".s-intro .slider-arrow._next",
      },
    });
  }

  const catalogSlider = document.querySelector(".s-catalog__slider");

  if (catalogSlider) {
    const swiper = new Swiper(catalogSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".s-catalog .slider-pagination",
        clickable: true,
      },
      navigation: {
        prevEl: ".s-catalog .slider-arrow._prev",
        nextEl: ".s-catalog .slider-arrow._next",
      },
      breakpoints: {
        992: {
          slidesPerView: "auto",
          spaceBetween: 35,
        },
      },
    });
  }

  const promoSlider = document.querySelector(".s-promo__slider");

  if (promoSlider) {
    const swiper = new Swiper(promoSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 15,
      autoplay: {
        delay: 5500,
      },
      scrollbar: {
        el: ".s-promo .slider-scrollbar",
        draggable: true,
      },
      navigation: {
        prevEl: ".s-promo .slider-arrow._prev",
        nextEl: ".s-promo .slider-arrow._next",
      },
      breakpoints: {
        992: {
          slidesPerView: "auto",
          spaceBetween: 25,
        },
      },
    });
  }

  const offerSlider = document.querySelector(".s-offer__slider");

  if (offerSlider) {
    const slides = offerSlider.querySelectorAll(".swiper-slide");
    const swiper = new Swiper(offerSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 15,
      autoplay: {
        delay: 5000,
      },
      scrollbar: {
        el: ".s-offer .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      },
      on: {
        slideChange: ({ activeIndex }) => {
          if (window.matchMedia("(min-width: 1200px)").matches) {
            slides.forEach((slide, i) => {
              if (i < activeIndex) {
                slide.classList.add("_hide");
              } else {
                slide.classList.remove("_hide");
              }
            });
          }
        },
      },
    });
  }

  const aboutSlider = document.querySelector(".s-about__slider");

  if (aboutSlider) {
    const thumbSwiper = new Swiper(".s-about__thumb-slider", {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: "auto",
      breakpoints: {
        1200: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
        992: {
          spaceBetween: 15,
          slidesPerView: 3,
        },
        768: {
          spaceBetween: 15,
          slidesPerView: 4,
        },
        576: {
          spaceBetween: 15,
          slidesPerView: 3,
        },
      },
    });

    const swiper = new Swiper(aboutSlider, {
      speed: 900,
      spaceBetween: 20,
      thumbs: {
        swiper: thumbSwiper,
      },
      scrollbar: {
        el: ".s-about .slider-scrollbar",
        draggable: true,
      },
      // autoplay: {
      //   delay: 5500
      // },
      navigation: {
        prevEl: ".s-about .slider-arrow._prev",
        nextEl: ".s-about .slider-arrow._next",
      },
    });
  }
}
