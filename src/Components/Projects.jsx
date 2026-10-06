import React, { useState } from "react";
import "./Readmore.css";
import records from "./Json";
import { Code, Share } from "lucide-react";
import ReactReadMoreReadLess from "react-read-more-read-less";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

<<<<<<< Updated upstream
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
=======
  const filters = [
    "All",
    "Web Development",
    "AI/ML",
    "SAP",
  ];

  // FILTER PROJECTS
  const filteredProjects =
    activeFilter === "All"
      ? records
      : records.filter(
          (project) =>
            project.category?.trim().toLowerCase() ===
            activeFilter.trim().toLowerCase()
        );

  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 py-20">

      <div className="max-w-[1500px] mx-auto">

        {/* ================= HEADER ================= */}

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">

          <div>
            <p className="font-mono text-xs tracking-[3px] text-[#ff3b16] mb-4">
              01 / SELECTED WORK
            </p>

            <h2 className="
              font-serif
              uppercase
              font-normal
              leading-[0.85]
              tracking-[-4px]
              text-6xl
              sm:text-7xl
              lg:text-8xl
            ">
              THE
              <br />
              PROJECT
              <span className="text-[#ff3b16]"> INDEX.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base opacity-70 leading-relaxed">
            A collection of projects, experiments and digital
            experiences built with code, creativity and curiosity.
          </p>

        </div>


        {/* ================= FILTER BAR ================= */}

        <div className="
          border-y
          border-current/20
          py-4
          flex
          flex-col
          sm:flex-row
          justify-between
          items-start
          sm:items-center
          gap-5
        ">

          {/* FILTERS */}

          <div className="flex flex-wrap gap-2 sm:gap-4">

            {filters.map((filter) => (

              <button
                key={filter}
                type="button"

                onClick={() => {
                  console.log("FILTER CLICKED:", filter);
                  setActiveFilter(filter);
                }}

                className={`
                  px-5
                  py-3
                  font-mono
                  text-[10px]
                  tracking-[2px]
                  uppercase
                  border
                  cursor-pointer
                  transition-all
                  duration-300

                  ${
                    activeFilter === filter
                      ? "bg-[#f5f4f0] text-black border-[#f5f4f0]"
                      : "bg-transparent border-transparent opacity-70 hover:text-[#ff3b16] hover:opacity-100"
                  }
                `}
              >
                {filter}
              </button>

            ))}

          </div>


          {/* PROJECT COUNT */}

          <div className="
            font-mono
            text-[10px]
            tracking-[2px]
            uppercase
            opacity-60
          ">
            {filteredProjects.length} PROJECT
            {filteredProjects.length !== 1 && "S"}
          </div>

        </div>


        {/* ================= PROJECT GRID ================= */}

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-7
          mt-12
        ">

          {filteredProjects.map((record, index) => (

            <div
              key={record.id}
              className="
                group
                relative
                overflow-hidden
                border
                border-current/30
              "
            >

              {/* IMAGE */}

              <div className="
                relative
                h-[450px]
                sm:h-[550px]
                overflow-hidden
              ">

                <img
                  src={record.image}
                  alt={record.title}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />


                {/* DARK OVERLAY */}

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                " />


                {/* PROJECT NUMBER */}

                <div className="
                  absolute
                  top-7
                  left-7
                  font-mono
                  text-xs
                  tracking-[3px]
                  text-white
                ">
                  {String(index + 1).padStart(2, "0")}
                </div>


                {/* FEATURED */}

                {index < 2 && (

                  <div className="
                    absolute
                    top-7
                    right-7
                    bg-[#ff3b16]
                    text-white
                    px-5
                    py-3
                    font-mono
                    text-[9px]
                    tracking-[2px]
                    uppercase
                  ">
                    Featured
                  </div>

                )}


                {/* CONTENT */}

                <div className="
                  absolute
                  left-7
                  right-7
                  bottom-7
                  text-white
                ">

                  {/* CATEGORY */}

                  <p className="
                    text-[#ff3b16]
                    font-mono
                    text-[10px]
                    tracking-[3px]
                    uppercase
                    mb-4
                  ">
                    {record.category}
                  </p>


                  {/* TITLE */}

                  <h3 className="
                    font-serif
                    uppercase
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    leading-[0.9]
                    tracking-[-2px]
                    max-w-3xl
                  ">
                    {record.title}
                  </h3>


                  {/* LINE */}

                  <div className="
                    h-px
                    bg-white/40
                    w-full
                    mt-7
                    mb-5
                  " />


                  {/* BOTTOM */}

                  <div className="
                    flex
                    items-center
                    justify-between
                  ">

                    <a
                      href={record.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-sm
                        hover:text-[#ff3b16]
                        transition-colors
                      "
                    >
                      Open case study
                    </a>


                    <a
                      href={record.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-12
                        h-12
                        rounded-full
                        border
                        border-white/60
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                        group-hover:bg-[#ff3b16]
                        group-hover:border-[#ff3b16]
                      "
                    >
                      <ArrowUpRight size={20} />
                    </a>

                  </div>

                </div>

              </div>


              {/* ================= DETAILS ================= */}

              <div className="
                p-5
                border-t
                border-current/20
              ">

                <p className="text-sm mb-2">

                  <strong>
                    Tech Stack:
                  </strong>{" "}

                  {record.technologies}

                </p>


                <div className="
                  text-sm
                  opacity-70
                  leading-relaxed
                ">

                  <strong>
                    Description:
                  </strong>{" "}

                  <ReactReadMoreReadLess
                    charLimit={100}
                    readMoreText="Read more →"
                    readLessText="← Read less"
                    readMoreClassName="
                      text-[#ff3b16]
                      cursor-pointer
                      ml-2
                    "
                    readLessClassName="
                      text-[#ff3b16]
                      cursor-pointer
                      ml-2
                    "
                  >
                    {record.description}
                  </ReactReadMoreReadLess>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* ================= EMPTY ================= */}

        {filteredProjects.length === 0 && (

          <div className="
            py-20
            text-center
            font-mono
            text-sm
            opacity-60
          ">
            No projects found.
          </div>

        )}

      </div>

    </section>
>>>>>>> Stashed changes
  );
};

export default Projects;
