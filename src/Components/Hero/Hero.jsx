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
      <section
        ref={containerRef}
        className="w-full min-h-[80vh] flex items-center justify-center px-4 py-10"
      >
        {show && <Modal onclose={() => setShow(false)} />}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-8">
          {/* Left - Image and Buttons */}
          <div className="flex flex-col items-center flex-1 max-w-md gap-6">
            <img
              src={codeguy}
              alt="Developer Illustration"
              className="hero-img w-50 md:w-60 xl:w-70 object-contain"
            />

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="https://drive.google.com/file/d/1HmguiPTm92pGUIKqS0S_kikydgEkzBVY/view?usp=sharing"
                target="_blank"
                id="resume"
                rel="noopener noreferrer"
                className="group opacity-0 text-center flex justify-center items-center gap-0.5 text-lg bg-gradient-to-r from-indigo-400 to-purple-400 text-white font-semibold py-2 px-6 rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                <Download className="group-hover:animate-bounce" />
                Download Resume
              </a>

              <button
                onClick={() => setShow(true)}
                className="hero-bt opacity-0 text-center flex justify-center items-center gap-0.5 text-lg border border-amber-50 font-semibold py-2 px-6 rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                <Mail className="mr-0.5" />
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right - About text */}
          <div className="hero-text flex-1 max-w-md text-center lg:text-left">
            <About />
          </div>
        </div>
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
