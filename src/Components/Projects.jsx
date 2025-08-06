import React from "react";
import records from "./Json";
import { Code, Share } from "lucide-react";

const Projects = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-2 sm:mt-30 px-4 py-8">
      <h2 className="sm:text-6xl text-4xl font-bold text-center  mb-0.5">
        Projects :
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 max-w-6xl w-full pt-10">
        {records.map((record, index) => (
          <div
            key={index}
            className={`relative border-none cursor-pointer hover:scale-101 rounded-lg shadow-lg overflow-hidden bg-center bg-cover
              ${index === 1 ? "  md:row-span-2 " : "h-64"} 
            `}
            style={{ backgroundImage: `url(${record.image})` }}
          >
            <div className="absolute inset-0 bg-black/75"></div>

            <div className="relative z-10 p-6 text-white space-y-2 text-sm flex flex-col justify-center h-full">
              <p>
                <strong>Title:</strong> {record.title}
              </p>
              <p>
                <strong>Description:</strong> {record.description}
              </p>
              <p>
                <strong>Tech Stack:</strong>
                {record.technologies}
              </p>

              <a
                href={record.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 underline"
              >
                <div className="flex gap-1.5">
                  
                  <Share className=" transition-colors duration-200  hover:text-[#0A66C2]  h-4" />
                  <Code className=" transition-colors duration-200  hover:text-[#0A66C2] h-4 " />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
