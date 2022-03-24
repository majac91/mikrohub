import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Animate text 
export const slideUp = (elem, delay, startPercent) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: elem,
            start: `top ${startPercent ? startPercent : 'bottom'}`,
        }
    })

    tl.from(elem, {
        y: 30,
        opacity: 0,
        transformOrigin: 'bottom center',
        delay: delay ? delay : .3,

    });
};

//Animate image zoom out - image has 'scale' prop as a starting point
export const zoomOut = (elem) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: elem,
            start: "bottom bottom",
        }
    })

    tl.to(elem, {
        scale: 1,
        delay: .3,
        duration: 2,
    });
};
