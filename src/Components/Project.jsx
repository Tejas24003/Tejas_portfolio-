import React from 'react';
import coding from '../assets/coding-pov.png'
import mern from '../assets/mern.avif'
import codeguy from '../assets/coding_guy-removebg-preview.png'
import fle from '../assets/fle.svg'
import js from '../assets/js.svg'
import java from '../assets/java.svg'
import cpp from '../assets/cpp.svg'
import css from '../assets/css.svg'
import git from '../assets/git.svg'
import nodejss from '../assets/nodejss.svg'
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
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay Content */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center md:items-start md:justify-start">
    {/* Inner Text Box */}
    <div className=" md:rounded-lg md:shadow-md p-4 md:ml-6 mt-4 md:mt-6 text-center md:text-left max-w-md">
      <h2 className="text-2xl md:text-3xl font-extrabold text-amber-400 md:text-amber-600 drop-shadow-md">
        Code Is Craft
      </h2>
      <p className="text-amber-50  mt-2 leading-relaxed drop-shadow-sm">
        Every line of code is a chance to innovate, solve problems, and make a difference.
      </p>
    </div>
  </div>
</div>

          <div className="bg-gradient-to-r from-[#1f1a33] to-[#363046]  flex flex-wrap rounded-xl shadow-lg space-y-4">
     <img src={fle} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={css} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={js} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={fle} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={nodejss} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={fle} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={git} alt="" className='h-14 mt-2 ml-2  cursor-pointer' />
          <img src={java} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={cpp} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={fle} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
          <img src={fle} alt="" className='h-14 mt-2 ml-2 cursor-pointer' />
</div>

          <div className="bg-white p-0 rounded-xl  shadow-md"> </div>
         
        </div>
      </div>
    </>
  );
};

export default Project;
