import React, { useState, useRef } from "react";
import Modal from "../../Components/Modal";
import codeguy from "../../assets/lnadscape.jpg";
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
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full min-h-screen px-6 sm:px-10 lg:px-16 pt-18 pb-10 overflow-hidden"
      >
        {show && <Modal onclose={() => setShow(false)} />}

        <div className="w-full max-w-[1500px] mx-auto">

          {/* Small top label */}
          <div className="flex justify-items-start gap-3 mb-2">
            <span className="w-2 h-2 bg-[#ff3b16] rounded-full"></span>

            <span className="font-mono text-[10px] sm:text-xs tracking-[3px] uppercase">
              Available for Winter 2026
            </span>
          </div>

          {/* Main Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">

            {/* LEFT — Existing About */}
            <div className="hero-text order-2 lg:order-1 max-w-[850px]">

             
             

              {/* Existing About component */}
              <div className="text-left">
                <About />
              </div>

              {/* Existing buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-4">

                <a
                  href="https://drive.google.com/drive/folders/1RaqS6x8uiNtHJzbiR6mqfCjFcRTtijiD?usp=sharing"
                  target="_blank"
                  id="resume"
                  rel="noopener noreferrer"
                  className="group opacity-0 flex justify-center items-center gap-2 text-xs sm:text-sm uppercase tracking-[2px] border border-current py-4 px-7 hover:bg-[#ff3b16] hover:text-white hover:border-[#ff3b16] transition-all duration-300"
                >
                  <Download size={16} />
                  Resume
                </a>

                <button
                  onClick={() => setShow(true)}
                  className="hero-bt opacity-0 flex justify-center items-center gap-2 text-xs sm:text-sm uppercase tracking-[2px] border border-current py-4 px-7 hover:bg-[#ff3b16] hover:text-white hover:border-[#ff3b16] transition-all duration-300"
                >
                  <Mail size={16} />
                  Contact
                </button>

              </div>
            </div>


            {/* RIGHT — Existing Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">

              <div className="relative w-full max-w-[600px]">

                <img
                  src={codeguy}
                  alt="Developer Illustration"
                  className="hero-img w-full h-[55vh] lg:h-[72vh] object-cover grayscale rounded-none"
                />

                {/* Open to work box — screenshot style */}
                <div className="absolute top-5 right-5 w-[75px] h-[75px] border border-white/70 text-white flex flex-col justify-center items-center text-[9px] font-semibold leading-3 rotate-[12deg]">
                  <span>OPEN</span>
                  <span>TO</span>
                  <span>WORK</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* Lottie — KEPT */}
      <div className="w-full flex items-center justify-center mt-[-38px] sm:mt-0">
        <DotLottieReact
          src="https://lottie.host/a348641b-fc81-451e-b5f5-412ec81e58a4/R1sFNjVlaI.lottie"
          loop
          autoplay
          style={{ width: "120px", height: "120px" }}
        />
      </div>


      {/* Divider — KEPT */}
      <div
        id="arroww"
        className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full"
      />
    </>
  );
};

export default Hero;