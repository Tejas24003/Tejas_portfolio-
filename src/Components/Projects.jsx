import React from 'react'

import records from './Json.json'

const Projects = () => {
  return (
    <div className='w-full  '>
      
      {
        records.map( record =>{
          return(

  <div
  className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto p-6"
>
  <div
    className="w-full h-auto min-h-48 border-2 border-dashed border-gray-400 rounded-lg shadow-lg p-6 bg-cover bg-center relative"
    style={{
      backgroundImage: `url('https://your-image-url.com/bg.jpg')`, // Replace with your actual image URL or import
    }}
  >
    {/* Optional overlay to darken background and increase text readability */}
    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg"></div>

    {/* Content */}
    <div className="relative z-10 space-y-2 text-sm text-gray-800">
      <span className="block text-center font-semibold text-gray-600">
        Project Details
      </span>
      <p><strong>Title:</strong> {record.title}</p>
      <p><strong>Description:</strong> {record.description}</p>
      <p><strong>Tech Stack:</strong> {record.technologies}</p>
      <a
        href={record.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 underline"
      >
        View Project
      </a>
    </div>
  </div>
</div>



          )
        })
      }
   

      
      </div>
  )
}

export default Projects