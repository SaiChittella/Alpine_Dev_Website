"use client"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react"

export default function ScrollArrow() {

    const ref = useRef(null)

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        // Define the animation
        const arrowAnimation = gsap.fromTo(
            ref.current,
            { y: -10 },
            { y: 0, repeat: -1, yoyo: true, duration: 1, ease: "power1.inOut" } // Adjust easing function for smoother effect
        );

        const arrowAnimationScroll = gsap.to(
            ref.current,
            {
                opacity: 0,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top center",
                    end: "top top", 
                    scrub:true
                }
            }
        )

        // Cleanup function to cancel the animation on unmount
        return () => {
            arrowAnimation.kill();
        };
    }, []);
    
    return (
        <img src="/imgs/scroll-down.svg" ref={ref} height="25" width="25"/>
    )
}