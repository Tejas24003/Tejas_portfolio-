import React, { useRef } from "react";
import "./Readmore.css";
import records from "./Json";
import { ArrowUpRight } from "lucide-react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Heading animation
      gsap.from(".projects-title", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top 80%",
        },
      });

      // Description animation
      gsap.from(".projects-intro", {
        opacity: 0,
        x: 40,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-intro",
          start: "top 80%",
        },
      });

      // Project card animation
      gsap.utils.toArray(".project-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 80,
          duration: 0.9,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <section
      ref={containerRef}
      className="w-full  px-5 sm:px-8 lg:px-[8%] py-20 sm:py-28"
    >
      <div className="max-w-[1550px] mx-auto">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">

          {/* LEFT HEADING */}

          <div className="projects-title">

            <h2
              className="
                font-serif
                uppercase
                font-normal
                leading-[0.85]
                tracking-[-4px]
                text-[clamp(4rem,7vw,7.5rem)]
              "
            >
              <span className="block">
                THE
              </span>

              <span className="block">
                PROJECT
                <span className="text-[#ff3b16]">.</span>
              </span>

              <span className="block">
                INDEX
                <span className="text-[#ff3b16]">.</span>
              </span>
            </h2>

          </div>


          {/* RIGHT DESCRIPTION */}

          <div className="projects-intro lg:pb-3">

            <div className="border-l border-[#ff3b16] pl-5 max-w-[500px]">

              <p className=" text-base sm:text-lg leading-relaxed">
                A collection of projects, experiments, and digital
                experiences built with curiosity, code, and attention
                to detail.
              </p>

              <p className="font-mono text-[10px] tracking-[2px] uppercase  mt-5">
                Click any project to explore.
              </p>

            </div>

          </div>

        </div>


        {/* ================================================= */}
        {/* FILTER / PROJECT COUNT */}
        {/* ================================================= */}

        <div
          className="
            mt-16
            border-y
            border-white/15
            py-4
            flex
            flex-col
            sm:flex-row
            justify-between
            gap-5
          "
        >

          <div className="flex flex-wrap items-center gap-7">

            <span
              className="
                bg-[#f5f4f0]
                text-[#111]
                px-5
                py-3
                font-mono
                text-[10px]
                tracking-[2px]
                uppercase
              "
            >
              All
            </span>

            <span className="font-mono text-[10px] tracking-[2px] uppercase text-gray-400">
              Web Development
            </span>

            <span className="font-mono text-[10px] tracking-[2px] uppercase text-gray-400">
              AI/ML
            </span>

            <span className="font-mono text-[10px] tracking-[2px] uppercase text-gray-400">
             SAP
            </span>

            

          </div>

          <span className="font-mono text-[10px] tracking-[2px] uppercase text-gray-400">
            {records.length} Projects
          </span>

        </div>


        {/* ================================================= */}
        {/* PROJECT GRID */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-12">

          {records.map((record, index) => {

            const projectNumber = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                className="
                  project-card
                  group
                  relative
                  overflow-hidden
                  border
                  border-white/20
                  bg-[#111114]
                "
              >

                {/* ========================================= */}
                {/* IMAGE */}
                {/* ========================================= */}

                <a
                  href={record.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >

                  <div
                    className="
                      relative
                      w-full
                      h-[520px]
                      sm:h-[580px]
                      lg:h-[620px]
                      overflow-hidden
                    "
                  >

                    <img
                      src={record.image}
                      alt={record.title}
                      className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        grayscale
                        transition-all
                        duration-700
                        ease-out
                        group-hover:scale-105
                        group-hover:grayscale-0
                      "
                    />


                    {/* Dark gradient */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black
                        via-black/30
                        to-transparent
                        opacity-90
                      "
                    />


                    {/* Top gradient */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-b
                        from-black/20
                        via-transparent
                        to-transparent
                      "
                    />


                    {/* ===================================== */}
                    {/* PROJECT NUMBER */}
                    {/* ===================================== */}

                    <div
                      className="
                        absolute
                        top-7
                        left-7
                        font-mono
                        text-xs
                        tracking-[3px]
                        text-white
                      "
                    >
                      {projectNumber}
                    </div>


                    {/* ===================================== */}
                    {/* FEATURED */}
                    {/* ===================================== */}

                    {index < 2 && (
                      <div
                        className="
                          absolute
                          top-7
                          right-7
                          bg-[#ff3b16]
                          text-white
                          px-4
                          py-2
                          font-mono
                          text-[9px]
                          tracking-[1.5px]
                          uppercase
                        "
                      >
                        Featured
                      </div>
                    )}


                    {/* ===================================== */}
                    {/* PROJECT CONTENT */}
                    {/* ===================================== */}

                    <div
                      className="
                        absolute
                        left-7
                        right-7
                        bottom-7
                      "
                    >

                      {/* Category */}

                      <p
                        className="
                          text-[#ff3b16]
                          font-mono
                          text-[10px]
                          tracking-[3px]
                          uppercase
                          mb-4
                        "
                      >
                        {record.category || "WEB DEVELOPMENT"}
                      </p>


                      {/* Title */}

                      <h3
                        className="
                          max-w-[700px]
                          font-serif
                          uppercase
                          font-normal
                          text-white
                          leading-[0.9]
                          tracking-[-2px]
                          text-[clamp(2.3rem,4vw,4.5rem)]
                        "
                      >
                        {record.title}
                      </h3>


                      {/* Divider */}

                      <div className="w-full h-px bg-white/30 mt-7 mb-5" />


                      {/* Bottom */}

                      <div className="flex items-center justify-between">

                        <span
                          className="
                            font-mono
                            text-xs
                            uppercase
                            tracking-[1px]
                            text-white
                          "
                        >
                          Open case study
                        </span>


                        {/* Arrow */}

                        <div
                          className="
                            w-12
                            h-12
                            rounded-full
                            border
                            border-white/50
                            flex
                            items-center
                            justify-center
                            text-white
                            transition-all
                            duration-300
                            group-hover:bg-[#ff3b16]
                            group-hover:border-[#ff3b16]
                            group-hover:rotate-45
                          "
                        >
                          <ArrowUpRight size={20} />
                        </div>

                      </div>

                    </div>

                  </div>

                </a>


                {/* ========================================= */}
                {/* DETAILS BELOW CARD */}
                {/* ========================================= */}

                <div
                  className="
                    bg-[#111114]
                    px-6
                    py-5
                    border-t
                    border-white/10
                  "
                >

                  {/* Tech Stack */}

                  <p className="text-xs text-gray-400 mb-2">

                    <span className="text-white font-semibold">
                      Tech Stack:
                    </span>{" "}

                    {record.technologies}

                  </p>


                  {/* Description */}

                  <div className="text-xs leading-relaxed text-gray-500">

                    <span className="text-gray-300 font-semibold">
                      Description:
                    </span>{" "}

                    <ReactReadMoreReadLess
                      charLimit={100}
                      readMoreText="Read more →"
                      readLessText="← Read less"
                      readMoreClassName="
                        inline-block
                        ml-2
                        text-[#ff3b16]
                        hover:text-[#ff5738]
                        cursor-pointer
                        font-medium
                        transition-colors
                        duration-300
                      "
                      readLessClassName="
                        inline-block
                        ml-2
                        text-[#ff3b16]
                        hover:text-[#ff5738]
                        cursor-pointer
                        font-medium
                        transition-colors
                        duration-300
                      "
                    >
                      {record.description}
                    </ReactReadMoreReadLess>

                  </div>

                </div>

              </div>
            );
          })}

        </div>


        {/* ================================================= */}
        {/* BOTTOM */}
        {/* ================================================= */}

       

      </div>
    </section>
  );
};

export default Projects;