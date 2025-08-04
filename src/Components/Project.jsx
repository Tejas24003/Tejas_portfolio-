import React from 'react';
import coding from '../assets/coding-pov.png'
import mern from '../assets/mern.avif'
import codeguy from '../assets/coding_guy-removebg-preview.png'
import fle from '../assets/fle.svg'
const Project = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center  m-10 ">
        Technologies I Work With:
      </h2>

      <div className="w-full  flex items-center  justify-center px-4 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
          <div className="bg-gradient-to-r  from-[#1f1a33] to-[#363046] overflow-hidden relative rounded-xl shadow-md md:row-span-2">
         <div className="relative z-10 flex flex-col items-center justify-center h-full  bg-opacity-40 px-4 text-center">
    <h2 className="text-3xl font-extrabold text-amber-400 drop-shadow-md">
      Code Is Craft
    </h2>
    <p className="text-white mt-2 leading-relaxed drop-shadow-sm max-w-md">
      Every line of code is a chance to innovate, solve problems, and make a difference.
    </p>
  </div>
          <img src={coding} className='w-full h-full absolute object-cover top-7' alt="" />

         </div>
          <div className="bg-gradient-to-r from-[#1f1a33] to-[#363046]  flex flex-wrap rounded-xl shadow-lg space-y-4">
     <img src={fle} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={fle} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={fle} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={fle} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={fle} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={fle} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={fle} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={fle} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={fle} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={fle} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={fle} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
</div>

          <div className="bg-white p-0 rounded-xl shadow-md"> <img src={mern} alt="Coding" className="w-full h-full object-cover rounded-xl 
           " /></div>
         
        </div>
      </div>
    </>
  );
};

export default Project;
