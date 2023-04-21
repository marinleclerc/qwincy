import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

document.addEventListener("DOMContentLoaded", function(event) {
    if(document.getElementsByClassName("lp-reviews").length > 0) {
        $(function() {
            if($(".google-reviews-swiper").length > 0) {
                const reviewsSwiper = new Swiper('.google-reviews-swiper', {
                    // Optional parameters
                    slidesPerView: 1,
                    loop: true,
                    centeredSlides: true,
                    preloadImages: false,
                    spaceBetween: 20,
                    navigation: {
                        nextEl: ".google-reviews-swiper-navigation-prev",
                        prevEl: ".google-reviews-swiper-navigation-next",
                    },
                    lazy: {
                        checkInView: true,
                        enabled: true,
                        loadOnTransitionStart: true,
                    }
                });
            }
        });
    }
})