import React from 'react';
import coding from '../assets/coding-pov.png'
import mern from '../assets/mern.avif'

const Project = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center  m-10 ">
        Technologies I Work With:
      </h2>

      <div className="w-full  flex items-center  justify-center px-4 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
          <div className="bg-gradient-to-r from-[#1f1a33] to-[#363046]  rounded-xl shadow-md md: row-span-2">
           <img src={coding} alt="Coding" className="w-full h-full object-cover -z-10  pb-6 
           " />
           

         </div>
          <div className="bg-gradient-to-r from-[#1f1a33] to-[#363046] p-8 rounded-xl shadow-lg space-y-4">
  <h2 className="text-2xl font-extrabold text-center text-amber-500">
    Code Is Craft
  </h2>
  <p className="text-white text-center leading-relaxed">
    Every line of code is a chance to innovate, solve problems, and make a difference.
  </p>
</div>

          <div className="bg-white p-0 rounded-xl shadow-md"> <img src={mern} alt="Coding" className="w-full h-full object-cover rounded-xl 
           " /></div>
         
        </div>
      </div>
    </>
  );
};

export default Project;
