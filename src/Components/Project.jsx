import React, { useRef } from "react";
import "./Readmore.css";

import coding from "../assets/download.gif";
import man from "../assets/man.gif";
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

  useGSAP(
    () => {
      // Left heading
      gsap.from(".project-heading", {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-heading",
          start: "top 80%",
        },
      });

      // Capability rows
      gsap.from(".capability-row", {
        opacity: 0,
        x: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".capability-list",
          start: "top 80%",
        },
      });

      // Tags
      gsap.from(".tech-tag", {
        opacity: 0,
        y: 15,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".capability-list",
          start: "top 75%",
        },
      });

      // Marquee
      gsap.from(".marquee-box", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".marquee-box",
          start: "top 85%",
        },
      });
    },
    {
      scope: containerRef,
    }
  );

  const technologies = [
    html5,
    css,
    js,
    react,
    nodejss,
    php,
    git,
    java,
    cpp,
    python,
    fle,
  ];

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#F5F4F0] text-[#111111] px-6 sm:px-10 lg:px-[10%] py-24 sm:py-32"
    >
      <div className="max-w-[1500px] mx-auto">

        {/* ============================================= */}
        {/* MAIN CAPABILITIES SECTION */}
        {/* ============================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-16 lg:gap-24">

          {/* =========================================== */}
          {/* LEFT SIDE */}
          {/* =========================================== */}

          <div className="project-heading">

            {/* Section number */}

            <div className="flex items-center gap-3 mb-8">

              <span className="font-mono text-[11px] tracking-[3px] text-[#ff3b16]">
                02
              </span>

              <span className="font-mono text-[11px] tracking-[3px] text-[#ff3b16]">
                /
              </span>

              <span className="font-mono text-[11px] tracking-[3px] text-[#ff3b16] uppercase">
                Capabilities
              </span>

            </div>


            {/* Main heading */}

            <h2
              className="
                font-serif
                font-normal
                uppercase
                leading-[0.85]
                tracking-[-4px]
                text-[clamp(4rem,6vw,7rem)]
              "
            >
              <span className="block">
                TOOLS FOR
              </span>

              <span className="block">
                THINKING
              </span>

              <span className="block text-[#ff3b16]">
                OUT LOUD.
              </span>
            </h2>


            {/* Description */}

            <p className="mt-12 max-w-[430px] text-[#55545a] text-base sm:text-lg leading-relaxed">
              I work across design and development, using code as a
              material to build thoughtful, scalable and interactive
              digital experiences.
            </p>


            {/* Existing technology images kept */}

            <div className="flex flex-wrap gap-4 mt-10">

              {technologies.map((icon, index) => (
                <div
                  key={index}
                  className="tech-icon opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={icon}
                    alt="Technology"
                    className="w-8 h-8 object-contain grayscale"
                  />
                </div>
              ))}

            </div>

          </div>


          {/* =========================================== */}
          {/* RIGHT SIDE */}
          {/* =========================================== */}

          <div className="capability-list border-t border-[#d7d5d0]">

            {/* ================= BUILD ================= */}

            <div className="capability-row grid grid-cols-[60px_1fr] lg:grid-cols-[70px_1fr_1.4fr] gap-6 items-start py-8 border-b border-[#d7d5d0]">

              {/* Number */}

              <span className="font-mono text-[11px] text-[#ff3b16]">
                01
              </span>


              {/* Title */}

              <h3
                className="
                  font-serif
                  uppercase
                  font-normal
                  text-4xl
                  sm:text-5xl
                  tracking-[-2px]
                "
              >
                Build
              </h3>


              {/* Tags */}

              <div className="col-start-2 lg:col-start-3 flex flex-wrap justify-start lg:justify-end gap-2">

                <span className="tech-tag capability-tag">
                  REACT
                </span>

                <span className="tech-tag capability-tag">
                  JAVASCRIPT
                </span>

                <span className="tech-tag capability-tag">
                  NODE.JS
                </span>

                <span className="tech-tag capability-tag">
                  EXPRESS
                </span>

                <span className="tech-tag capability-tag">
                  MONGODB
                </span>

                <span className="tech-tag capability-tag">
                  REST APIs
                </span>

              </div>

            </div>


            {/* ================= DESIGN ================= */}

            <div className="capability-row grid grid-cols-[60px_1fr] lg:grid-cols-[70px_1fr_1.4fr] gap-6 items-start py-8 border-b border-[#d7d5d0]">

              {/* Number */}

              <span className="font-mono text-[11px] text-[#ff3b16]">
                02
              </span>


              {/* Title */}

              <h3
                className="
                  font-serif
                  uppercase
                  font-normal
                  text-4xl
                  sm:text-5xl
                  tracking-[-2px]
                "
              >
                Design
              </h3>


              {/* Tags */}

              <div className="col-start-2 lg:col-start-3 flex flex-wrap justify-start lg:justify-end gap-2">

                <span className="tech-tag capability-tag">
                  UI DESIGN
                </span>

                <span className="tech-tag capability-tag">
                  UX
                </span>

                <span className="tech-tag capability-tag">
                  TAILWIND CSS
                </span>

                <span className="tech-tag capability-tag">
                  RESPONSIVE DESIGN
                </span>

                <span className="tech-tag capability-tag">
                  GSAP
                </span>

              </div>

            </div>


            {/* ================= SOLVE ================= */}

            <div className="capability-row grid grid-cols-[60px_1fr] lg:grid-cols-[70px_1fr_1.4fr] gap-6 items-start py-8 border-b border-[#d7d5d0]">

              {/* Number */}

              <span className="font-mono text-[11px] text-[#ff3b16]">
                03
              </span>


              {/* Title */}

              <h3
                className="
                  font-serif
                  uppercase
                  font-normal
                  text-4xl
                  sm:text-5xl
                  tracking-[-2px]
                "
              >
                Solve
              </h3>


              {/* Tags */}

              <div className="col-start-2 lg:col-start-3 flex flex-wrap justify-start lg:justify-end gap-2">

                <span className="tech-tag capability-tag">
                  JAVA
                </span>

                <span className="tech-tag capability-tag">
                  PYTHON
                </span>

                <span className="tech-tag capability-tag">
                  SQL
                </span>

                <span className="tech-tag capability-tag">
                  DSA
                </span>

                <span className="tech-tag capability-tag">
                  REST APIs
                </span>

                <span className="tech-tag capability-tag">
                  PROBLEM SOLVING
                </span>

              </div>

            </div>


            {/* ================= CURRENTLY LEARNING ================= */}

            <div className="py-7">

              <p className="font-mono text-[10px] sm:text-xs tracking-[2px] uppercase text-[#66636a]">
                Always Learning / Currently Exploring:{" "}
                <span className="text-[#ff3b16]">
                  AI + Generative AI + SAP
                </span>
              </p>

            </div>

          </div>

        </div>


        {/* ============================================= */}
        {/* MARQUEE */}
        {/* ============================================= */}

        <div
          className="
            marquee-box
            mt-20
            border-y
            border-[#d7d5d0]
            overflow-hidden
          "
        >

          <div className="marquee-track flex gap-16 px-4 py-5 whitespace-nowrap">

            <div className="marquee-group flex gap-16">

              <span className="font-serif text-2xl sm:text-4xl uppercase">
                UI Design
              </span>

              <span className="text-[#ff3b16] text-2xl sm:text-4xl">
                +
              </span>

              <span className="font-serif text-2xl sm:text-4xl uppercase">
                Development
              </span>

              <span className="text-[#ff3b16] text-2xl sm:text-4xl">
                +
              </span>

              <span className="font-serif text-2xl sm:text-4xl uppercase">
                Problem Solving
              </span>

              <span className="text-[#ff3b16] text-2xl sm:text-4xl">
                +
              </span>

              <span className="font-serif text-2xl sm:text-4xl uppercase">
                AI Experiments
              </span>

            </div>


            <div
              className="marquee-group flex gap-16"
              aria-hidden="true"
            >

              <span className="font-serif text-2xl sm:text-4xl uppercase">
                UI Design
              </span>

              <span className="text-[#ff3b16] text-2xl sm:text-4xl">
                +
              </span>

              <span className="font-serif text-2xl sm:text-4xl uppercase">
                Development
              </span>

              <span className="text-[#ff3b16] text-2xl sm:text-4xl">
                +
              </span>

              <span className="font-serif text-2xl sm:text-4xl uppercase">
                Problem Solving
              </span>

              <span className="text-[#ff3b16] text-2xl sm:text-4xl">
                +
              </span>

              <span className="font-serif text-2xl sm:text-4xl uppercase">
                AI Experiments
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Project;