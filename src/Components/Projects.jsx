import React, { useRef } from "react";
import "./Readmore.css";
import records from "./Json";
import { Code, Share } from "lucide-react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animate heading
    gsap.from(".projects-title", {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-title",
        start: "top 80%",
      },
    });

    // Animate each card individually
    gsap.utils.toArray(".project-card").forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 80,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.2, // stagger effect
        scrollTrigger: {
          trigger: card,
          start: "top 85%", // only when card enters view
          toggleActions: "play none none none", // animate once
        },
      });
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col justify-center items-center mt-2 sm:mt-30 px-4 py-8"
    >
      <h2 className="projects-title sm:text-6xl text-4xl font-bold text-center mb-0.5">
        Projects :
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-6xl w-full pt-10">
        {records.map((record, index) => (
          <div key={index} className="project-card flex flex-col">
            {/* Project image card */}
            <div
              className="relative rounded-lg shadow-lg overflow-hidden bg-center bg-cover cursor-pointer h-56 sm:h-72"
              style={{ backgroundImage: `url(${record.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 p-4 text-white flex flex-col justify-end h-full">
                <p className="font-bold">{record.title}</p>

                <div className="flex items-center gap-1.5 mt-1 text-sm">
                  <Share className="hover:text-[#0A66C2] h-4" />
                  <p>Live</p>
                  <Code className="hover:text-[#0A66C2] h-4" />
                  <p>Code</p>
                </div>
              </div>
            </div>

            {/* Project details */}
            <div className="mt-2 text-sm">
              <p>
                <strong className="text-md">Tech Stack:</strong>{" "}
                {record.technologies}
              </p>
              <p className="text-sm leading-relaxed">
                <strong>Description:</strong>{" "}
                <ReactReadMoreReadLess
                  charLimit={50}
                  readMoreText="Read more >"
                  readLessText="< Read less"
                  readMoreClassName="block text-blue-500 hover:text-blue-600 cursor-pointer font-medium transition-colors duration-300 ease-in-out"
                  readLessClassName="block text-blue-500 hover:text-blue-600 cursor-pointer font-medium transition-colors duration-300"
                >
                  {record.description}
                </ReactReadMoreReadLess>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
