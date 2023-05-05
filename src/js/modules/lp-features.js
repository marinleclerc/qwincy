//INIT GSAP
const { gsap } = require("gsap/dist/gsap");
var scrollTrigger = require('gsap/scrollTrigger');
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(scrollTrigger,ScrollTrigger);
//INIT GSAP

document.addEventListener("DOMContentLoaded", function (event) {
    if (document.querySelector('.lp-features')) {
        
        ScrollTrigger.create({
            trigger: ".lp-features",
            start:"top +=300",
            onEnter() {
                document.querySelector('#animated-blue-box').classList.add('active')
            },
        })
    }
});