document.addEventListener("DOMContentLoaded", function(event) {
    if(document.getElementsByClassName("lp-compare").length > 0) {
        
        // Gestion responsive
        const responsiveImageWrapper = document.getElementById('picture-responsive-wrapper')
        const responsiveImageSource = document.getElementById('responsive-image-source')
        const desktopImageWrapper = document.getElementById('picture-desktop-wrapper') 
        let responsive = false
        window.matchMedia("(max-width: 900px)").matches ? responsive = false : responsive = true
        
        //petit
        if(window.matchMedia("(max-width: 900px)").matches){
            responsiveImageWrapper.appendChild(responsiveImageSource)
        }
        //grand
        else{
            responsive =  false
        }
        onresize = (event) => {
            //petit
            if(window.matchMedia("(max-width: 900px)").matches){
                if(responsive == false){
                    responsiveImageWrapper.appendChild(responsiveImageSource)
                    responsive = true
                }
                else if(responsive == true){

                }
            }
            //grand
            else{
                if(responsive == true){
                    desktopImageWrapper.appendChild(responsiveImageSource)
                    responsive = false
                }
                else if(responsive == false){

                }
            }
        };
    }
})
