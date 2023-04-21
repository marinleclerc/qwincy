

document.addEventListener("DOMContentLoaded", function(event) {
    if(document.getElementsByClassName("lp-drawers").length > 0) {
        const badges = document.getElementsByClassName('drawers-badge')
        const wrappers = document.getElementsByClassName('drawer-wrapper')
        const drawerNavPrev = document.getElementById('drawer-navigation-prev')
        const drawerNavNext = document.getElementById('drawer-navigation-next')
        var activeIndex = 0
        
        for (let index = 0; index < badges.length; index++) {
            badges[index].addEventListener('click', function(){
                for (let index2 = 0; index2 < badges.length; index2++) {
                    badges[index2].classList.remove('active')
                    wrappers[index2].classList.remove('active')    
                }
                activeIndex = index
                badges[activeIndex].classList.add('active')
                wrappers[activeIndex].classList.add('active') 
            })  
        }
        drawerNavPrev.addEventListener('click', function(){
            if(activeIndex > 0 ){
                for (let index2 = 0; index2 < badges.length; index2++) {
                    badges[index2].classList.remove('active')
                    wrappers[index2].classList.remove('active')    
                }
                activeIndex -= 1
                badges[activeIndex].classList.add('active')
                wrappers[activeIndex].classList.add('active')
            }
        })
        drawerNavNext.addEventListener('click', function(){
            if(activeIndex < badges.length - 1){
                for (let index2 = 0; index2 < badges.length; index2++) {
                    badges[index2].classList.remove('active')
                    wrappers[index2].classList.remove('active')    
                }
                activeIndex += 1
                badges[activeIndex].classList.add('active')
                wrappers[activeIndex].classList.add('active')
            }
        })
    }
})