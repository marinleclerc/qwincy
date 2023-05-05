import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

document.addEventListener("DOMContentLoaded", function(event) {
    if(document.getElementsByClassName("lp-accordion").length > 0) {
        const lpAccordion = document.getElementsByClassName("lp-accordion")
        for (let globalIndex = 0; globalIndex < lpAccordion.length; globalIndex++) {
            if(lpAccordion[globalIndex].classList.contains('swiper-style')){
                // Swiper right
                $(function() {
                    if($(".accordion-swiper").length > 0) {
                        const accordionSwiperFirst = new Swiper('.accordion-swiper', {
                            // Optional parameters
                            slidesPerView: 1,
                            preloadImages: false,
                            loop: true,
                            effect: "creative",
                            creativeEffect: {
                                prev: {
                                  translate: [-400, 0, 0],
                                  opacity: 0,
                                },
                                next: {
                                  translate: [290, 20, 0],
                                  opacity: 1,
                                },
                            },
                            lazy: {
                                checkInView: true,
                                enabled: true,
                                loadOnTransitionStart: true,
                            },
                            speed : 500,
                            breakpoints: {
                                1140: {
                                    slidesPerView: "auto",
                                    preloadImages: false,
                                    loop: true,
                                    effect: "creative",
                                    creativeEffect: {
                                        prev: {
                                          translate: [-400, 0, 0],
                                          opacity: 0,
                                        },
                                        next: {
                                          translate: [290, 90, 0],
                                          opacity: 1,
                                        },
                                    },
                                    lazy: {
                                        checkInView: true,
                                        enabled: true,
                                        loadOnTransitionStart: true,
                                    },
                                    speed : 500,
                                  }
                            },
                            pagination: {
                                el: "#accordion-swiper-pagination",
                                clickable: true,
                            },
                            navigation: {
                                nextEl: "#accordion-swiper-navigation-next",
                                prevEl: "#accordion-swiper-navigation-prev",
                            },
                            
                        });
                        

                        // accordionSwiperFirst.on('slideNextTransitionStart', function() {
                        //     setTimeout(function() { accordionSwiperSecond.slideNext(); },100);
                        // });
                        // accordionSwiperFirst.on('slidePrevTransitionStart', function() {
                        //     setTimeout(function() { accordionSwiperSecond.slidePrev(); },100);
                        // });
                    }
                });
                const accordions = lpAccordion[globalIndex].getElementsByClassName('accordion')
                const accordionContents = lpAccordion[globalIndex].getElementsByClassName('accordion-content')
                for (let index = 0; index < accordionContents.length; index++) {
                    accordionContents[index].dataset.height = accordionContents[index].offsetHeight
                    accordionContents[index].style.maxHeight = "0px"
                }
                for (let index = 0; index < accordions.length; index++) {
                    accordions[index].addEventListener('click', function(){
                        if(accordions[index].classList.contains('active')){
                            accordions[index].classList.remove('active')
                            accordionContents[index].style.maxHeight = "0px"
                        }
                        else{
                            for (let index2 = 0; index2 < accordions.length; index2++) {
                                accordions[index2].classList.remove('active')
                                accordionContents[index2].style.maxHeight = "0px"
                            }
                            accordions[index].classList.add('active')
                            accordionContents[index].style.maxHeight = `${accordionContents[index].dataset.height}px`
                        }
                    })
                }
            }
            else{
                const accordions = lpAccordion[globalIndex].getElementsByClassName('accordion')
                const accordionContents = lpAccordion[globalIndex].getElementsByClassName('accordion-content')
                const rightContentPicture = lpAccordion[globalIndex].getElementsByClassName('embeded-picture-right')
                for (let index = 0; index < accordionContents.length; index++) {
                    accordionContents[index].dataset.height = accordionContents[index].offsetHeight
                    accordionContents[index].style.maxHeight = "0px"
                }
                for (let index = 0; index < accordions.length; index++) {
                    accordions[index].addEventListener('click', function(){
                        if(accordions[index].classList.contains('active')){
                            accordions[index].classList.remove('active')
                            accordionContents[index].style.maxHeight = "0px"
                        }
                        else{
                            for (let index2 = 0; index2 < accordions.length; index2++) {
                                accordions[index2].classList.remove('active')
                                accordionContents[index2].style.maxHeight = "0px"
                                rightContentPicture[index2].classList.remove('active')    
                            }
                            accordions[index].classList.add('active')
                            accordionContents[index].style.maxHeight = `${accordionContents[index].dataset.height}px`
                            rightContentPicture[index].classList.add('active')
                            
                        }  
                    })
                }
            }
        }  
    }
})