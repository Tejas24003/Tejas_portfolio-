import React from 'react'
import Modal from '../../Components/Modal'

import codeguy from '../../assets/coding_guy-removebg-preview.png'
import About from '../About'
const Hero = ({ theme, settheme }) => {
  return (
    <>
      <div className="w-full h-[90vh] flex justify-center items-center text-xl">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-1/2 mx-auto px-4 py-3 uppercase gap-4">
          <div className="left flex-1 flex sm:flex-col flex-row normal-case mb-15 sm:mb-0  text-center">
            <img  className='h-1/2 w-1/2' src={codeguy} alt="" />
            <div className='flex  flex-col sm:ml-1 mt-8 ml-8'>
              <button className="bg-gradient-to-r sm:w-1/2 w-full mb-2 from-indigo-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-2xl hover:scale-105 transition duration-300">
                 <a href="https://drive.google.com/file/d/1HmguiPTm92pGUIKqS0S_kikydgEkzBVY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    Resume
                   </a>
             </button>
             <button className="bg-gradient-to-r sm:w-1/2 w-full from-indigo-500 to-purple-500 text-white mb-2.5 font-semibold py-2 px-6 rounded-2xl hover:scale-105 transition duration-300"><Modal/></button>
               

            </div>
             
            
            
            </div>
          
          <div className="right flex-1 text-center">
            <About/>
          
          </div>
          
        </div>
        
      </div>
      <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full'/>
    </>
  )
}

export default Hero



