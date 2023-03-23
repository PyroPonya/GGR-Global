// smooth scrolling for same-page anchors - start
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// smooth scrolling for same-page anchors - end

// swiper setup start
 // swiper element
 const swiperEl_web3 = document.querySelector('swiper-container#web3');
  const swiperEl_paysys = document.querySelector('swiper-container#paysys');

  // swiper parameters
  const swiperParams = {
    slidesPerView: 5,
    freeMode: true,
    spaceBetween: 20,
    breakpoints: {
      400: {
        slidesPerView: 1,
      },
      740: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1320: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 5,
      },
    },
    on: {
      init() {
        // ...
      },
    },
  };
  const swiperParams_short = {
    slidesPerView: 5,
    freeMode: true,
    spaceBetween: 20,
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      505: {
        slidesPerView: 2,
      },
      670: {
        slidesPerView: 3,
      },
      840: {
        slidesPerView: 4,
      },
      1010: {
        slidesPerView: 5,
      },
    },
    on: {
      init() {
        // ...
      },
    },
  };

  // now we need to assign all parameters to Swiper element
  Object.assign(swiperEl_web3, swiperParams_short);
  Object.assign(swiperEl_paysys, swiperParams);

  // and now initialize it
  swiperEl_web3.initialize();
  swiperEl_paysys.initialize();
// swiper setup end
