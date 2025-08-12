import React from "react";
import './Readmore.css';
import records from "./Json";
import { Code, Share,Terminal } from "lucide-react";
import ReactReadMoreReadLess from "react-read-more-read-less";
const Projects = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-2 sm:mt-30 px-4 py-8">
      <h2 className="sm:text-6xl text-4xl font-bold text-center mb-0.5">
        Projects :
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-3   max-w-6xl w-full pt-10">
        {records.map((record, index) => (
          <div key={index} className="flex flex-col">
            {/* Project image card */}
            <div
              className="relative  rounded-lg shadow-lg overflow-hidden bg-center bg-cover cursor-pointer h-56 sm:h-72"
              style={{ backgroundImage: `url(${record.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 p-4 text-white flex flex-col justify-end h-full">
                <p className="font-bold">{record.title}</p>
                 
                <div className="flex  items-center gap-1.5 mt-1 text-sm ">
                  <Share className="hover:text-[#0A66C2] h-4" /><p>Live</p>
                  <Code className="hover:text-[#0A66C2] h-4" /><p>Code</p>
                </div>
              </div>
            </div>

         
            <div className="mt-2 text-sm ">
               <p >
                <strong className="text-md">Tech Stack:</strong> {record.technologies}
              </p>
             <p className="text-sm leading-relaxed">
  <strong >Description:</strong>{" "}
  <ReactReadMoreReadLess
    charLimit={50} 
    readMoreText='Read more >' 
    readLessText="< Read less "
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
