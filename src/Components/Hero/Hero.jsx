import React, { useState, useRef } from "react";
import Modal from "../../Components/Modal";
import codeguy from "../../assets/coding_guy-removebg-preview.png";
import About from "../About";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Mail, Download } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ✅ Only register ScrollTrigger (not useGSAP)
gsap.registerPlugin(ScrollTrigger);

const Hero = ({ theme, settheme }) => {
  const [show, setShow] = useState(false);
  const containerRef = useRef(null);

  useGSAP(() => {
    // image animation
    gsap.from(".hero-img", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // buttons animation
    gsap.to("#resume", {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    gsap.to(".hero-bt", {
      opacity: 1,
      duration: 1,
      delay: 0.7,
      stagger: 0.2,
      ease: "power2.out",
    });

    // about text animation
    gsap.from(".hero-text", {
      opacity: 0,
      x: 25,
      duration: 1,
      delay: 1,
      ease: "power3.out",
    });

    // ✅ arrow divider fades out as hero section scrolls away
    gsap.to("#arroww", {
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current, // use the hero section as trigger
        start: "top top",              // when hero hits top
        end: "bottom top",             // when hero fully leaves
        scrub: true,                   // smooth fade
      },
    });
  }, { scope: containerRef });

  return (
    <>
    <section className="flex w-full bg-amber-100 h-3">

    </section>
      

      {/* Lottie */}
      <div className="w-full flex items-center justify-center mt-[-38px] sm:mt-0">
        <DotLottieReact
          src="https://lottie.host/a348641b-fc81-451e-b5f5-412ec81e58a4/R1sFNjVlaI.lottie"
          loop
          autoplay
          style={{ width: "120px", height: "120px" }}
        />
      </div>

      {/* Divider that fades out on scroll */}
      <div
        id="arroww"
        className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full"
      />
    </>
  );
};

export default Hero;
