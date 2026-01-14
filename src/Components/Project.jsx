import React, { useRef } from "react";
import coding from "../assets/pet.jpg";
import fle from "../assets/fle.svg";
import js from "../assets/js.svg";
import java from "../assets/java.svg";
import cpp from "../assets/cpp.svg";
import css from "../assets/css.svg";
import git from "../assets/git.svg";
import html5 from "../assets/HTML5.svg";
import nodejss from "../assets/nodejss.svg";
import php from "../assets/php.svg";
import python from "../assets/python.svg";
import react from "../assets/react.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Heading
    gsap.from(".project-heading", {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-heading",
        start: "top 80%", // when heading enters viewport
      },
    });

    // Left coding card
    gsap.from(".project-card", {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-card",
        start: "top 80%",
      },
    });

    // Tech icons with stagger
    gsap.from(".tech-icon", {
      opacity: 0,
      scale: 0.5,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".tech-icon",
        start: "top 85%",
      },
    });

    // Marquee box
    gsap.from(".marquee-box", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".marquee-box",
        start: "top 85%",
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <h2 className="project-heading text-3xl font-bold text-center m-10">
        Technologies I Work With:
      </h2>

      <div className="w-full flex items-center justify-center px-4 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        
          <div className="project-card relative overflow-hidden rounded-xl shadow-md bg-gradient-to-r from-[#1f1a33] to-[#363046] md:row-span-2 h-80 md:h-[22rem]">
            <img
              src={coding}
              alt="Coding"
              className="absolute inset-0 w-full h-full opacity-40 object-cover"
            />
            <div className="relative z-10 h-full flex flex-col items-center justify-center md:items-start md:justify-start">
              <div className="p-4 md:ml-6 mt-4 md:mt-6 text-center md:text-left max-w-md">
                <h2 className="text-2xl md:text-3xl font-extrabold text-amber-400 md:text-amber-600 drop-shadow-md">
                  Code Is Craft
                </h2>
                <p className="text-amber-50 mt-2 leading-relaxed drop-shadow-sm">
                  Every line of code is a chance to innovate, solve problems,
                  and make a difference. <br />
                  <br />I’m a full-stack web developer focused on building scalable, high-performance applications, handling everything from responsive frontends to secure backends using React, Tailwind CSS, PHP, Java, and Python. I’m driven by continuous learning and meaningful development.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Icons */}
          <div className="bg-gradient-to-r from-[#1f1a33] to-[#363046] flex flex-wrap rounded-xl shadow-lg p-4 gap-4">
            {[html5, css, js, react, nodejss, php, git, java, cpp, python, fle].map((icon, idx) => (
              <div key={idx} className="relative group tech-icon">
                <img src={icon} alt="tech" className="h-14 cursor-pointer hover:scale-105" />
              </div>
            ))}
          </div>

          {/* Marquee */}
          <div className="marquee-box bg-white rounded-xl shadow-md overflow-hidden">
            <div className="marquee-track flex gap-12 px-4 py-3">
              <div className="marquee-group flex gap-12">
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">UI Design</span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">UX Research</span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">Wireframes</span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">Prototypes</span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">Design Systems</span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">Figma</span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">Adobe XD</span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">User Flows</span>
              </div>
              <div className="marquee-group flex gap-12" aria-hidden="true">
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">UI Design</span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">UX Research</span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">Wireframes</span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">Prototypes</span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">Design Systems</span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">Figma</span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">Adobe XD</span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">User Flows</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
