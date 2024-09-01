(function(){

const swiper = new Swiper('.gallery__slider', {
    spaceBetween:5,
    slidesPerView:4.2,

    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },
  });
})()