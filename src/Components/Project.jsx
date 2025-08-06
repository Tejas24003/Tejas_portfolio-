import React from "react";
import coding from "../assets/coding-pov.png";
import mern from "../assets/mern.avif";
import codeguy from "../assets/coding_guy-removebg-preview.png";
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
const Project = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center  m-10 ">
        Technologies I Work With:
      </h2>

      <div className="w-full  flex items-center  justify-center px-4 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
          <div className="relative overflow-hidden rounded-xl shadow-md bg-gradient-to-r from-[#1f1a33] to-[#363046] md:row-span-2 h-80 md:h-[22rem]">
            {/* Background Image */}
            <img
              src={coding}
              alt="Coding"
              className="absolute inset-0 w-full h-full opacity-40 object-cover"
            />

            {/* Overlay Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center md:items-start md:justify-start">
              {/* Inner Text Box */}
              <div className=" md:rounded-lg md:shadow-md p-4 md:ml-6 mt-4 md:mt-6 text-center md:text-left max-w-md">
                <h2 className="text-2xl md:text-3xl font-extrabold text-amber-400 md:text-amber-600 drop-shadow-md">
                  Code Is Craft
                </h2>
                <p className="text-amber-50  mt-2 leading-relaxed drop-shadow-sm">
                  Every line of code is a chance to innovate, solve problems,
                  and make a difference. <br />
                  <br />I build practical, high-performance solutions—from
                  secure authentication to dynamic content management—using{" "}
                  <b> React, Tailwind CSS, Flutter, PHP, Java, and Python </b>.
                  I'm always eager to learn and improve.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1f1a33] to-[#363046] flex flex-wrap rounded-xl shadow-lg p-4 gap-4">
            {/* HTML5 */}
            <div className="relative group ">
              <img src={html5} alt="HTML5" className="h-14 cursor-pointer hover:scale-105" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2  mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                HTML5
              </span>
            </div>

            {/* CSS */}
            <div className="relative group">
              <img src={css} alt="CSS3" className="h-14 cursor-pointer  hover:scale-105" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                CSS3
              </span>
            </div>

            {/* JavaScript */}
            <div className="relative group">
              <img src={js} alt="JavaScript" className="h-14 cursor-pointer  hover:scale-105" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                JavaScript
              </span>
            </div>

            {/* React */}
            <div className="relative group">
              <img src={react} alt="React" className="h-14 cursor-pointer  hover:scale-105" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                React
              </span>
            </div>

            {/* Node.js */}
            <div className="relative group">
              <img
                src={nodejss}
                alt="Node.js"
                className="h-14 cursor-pointer  hover:scale-105"
              />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                Node.js
              </span>
            </div>

            {/* PHP */}
            <div className="relative group">
              <img src={php} alt="PHP" className="h-14 cursor-pointer  hover:scale-105" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                PHP
              </span>
            </div>

            {/* Git */}
            <div className="relative group">
              <img src={git} alt="Git" className="h-14 cursor-pointer  hover:scale-105" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                Git
              </span>
            </div>

            {/* Java */}
            <div className="relative group">
              <img src={java} alt="Java" className="h-14 cursor-pointer  hover:scale-105" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                Java
              </span>
            </div>

            {/* C++ */}
            <div className="relative group">
              <img src={cpp} alt="C++" className="h-14 cursor-pointer  hover:scale-105" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                C++
              </span>
            </div>

            {/* Python */}
            <div className="relative group">
              <img src={python} alt="Python" className="h-14 cursor-pointer  hover:scale-105" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                Python
              </span>
            </div>

            {/* Flutter */}
            <div className="relative group">
              <img src={fle} alt="Flutter" className="h-14 cursor-pointer  hover:scale-105" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                Flutter
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="marquee-track flex gap-12 px-4 py-3">
              <div className="marquee-group flex gap-12">
                <span className="text-base sm:text-xl font-bold mt-2  text-gray-700 whitespace-nowrap">
                  UI Design
                </span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">
                  UX Research
                </span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">
                  Wireframes
                </span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">
                  Prototypes
                </span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">
                  Design Systems
                </span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">
                  Figma
                </span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">
                  Adobe XD
                </span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">
                  User Flows
                </span>
              </div>

              {/* Duplicate for seamless loop */}
              <div className="marquee-group flex gap-12" aria-hidden="true">
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">
                  UI Design
                </span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">
                  UX Research
                </span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">
                  Wireframes
                </span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">
                  Prototypes
                </span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">
                  Design Systems
                </span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">
                  Figma
                </span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">
                  Adobe XD
                </span>
                <span className="text-base sm:text-xl font-bold mt-2 text-gray-700 whitespace-nowrap">
                  User Flows
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
