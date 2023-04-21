import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

document.addEventListener("DOMContentLoaded", function(event) {
    if(document.getElementsByClassName("lp-compare").length > 0) {
        $(function() {
            if($(".lp-compare-swiper").length > 0) {
                const lpCompareSwiper = new Swiper('.lp-compare-swiper', {
                    // Optional parameters
                    slidesPerView: 1,
                    loop: true,
                    centeredSlides: true,
                    preloadImages: false,
                    navigation: {
                        nextEl: ".lp-compare-swiper-navigation-next",
                        prevEl: ".lp-compare-swiper-navigation-prev",
                    },
                    lazy: {
                        checkInView: true,
                        enabled: true,
                        loadOnTransitionStart: true,
                    }
                });
            }
        });
        const lpCompare = document.getElementsByClassName("lp-compare")[0]
        const selectContainer = document.querySelector('.select-container');
        const selectValue = selectContainer.querySelector('.select-value');
        const selectDropdown = selectContainer.querySelector('.select-dropdown');
        const selectOptions = selectContainer.querySelectorAll('.select-option');
        
        selectValue.addEventListener('click', function() {
          selectDropdown.classList.toggle('show');
        });
        
        selectOptions.forEach(function(option) {
          option.addEventListener('click', function(event) {
            selectValue.innerHTML = option.innerHTML;
            selectDropdown.classList.remove('show');
            const competitors = lpCompare.getElementsByClassName("swiper-slide")
            console.log(option)
            for (let index = 0; index < competitors.length; index++) {
              const competitorValues = competitors[index].getElementsByClassName('competitor-value')              
              for (let index2 = 0; index2 < competitorValues.length; index2++) {
                competitorValues[index2].classList.remove('active')
              }
              competitorValues[option.dataset.index].classList.add('active')
            }
          });
        });
        
        document.addEventListener('click', function(event) {
          if (!selectContainer.contains(event.target)) {
            selectDropdown.classList.remove('show');
          }
        });
    }
})