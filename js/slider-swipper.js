new Swiper('.swiper',{
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    slidesPerView:3,
    centeredSlides: true,
    grabCursor: true,
    autoHeight: true,
    loop: true,
    autoplay: {
        delay: 3500,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    
});