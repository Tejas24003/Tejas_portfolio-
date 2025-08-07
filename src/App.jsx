import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';
import Modal from './Components/Modal';
import { createBrowserRouter } from 'react-router-dom'
import Project from './Components/Project';
import Projects from './Components/Projects';
import Footer from './Components/Footer';



const App = () => {
const [theme, settheme] = useState('lucide-moon');
  return (
    <>
   <div    className={`min-h-screen transition-colors duration-500 ${
        theme === 'light' ? 'bg-[ bg-gradient-to-tr from-white via-sky-100 to-blue-100] text-black' : 'bg-[     bg-gradient-to-br from-gray-800 via-gray-900 to-black  ] text-white'
      }`} >
     <Navbar theme={theme} settheme={settheme} />
     <Hero theme={theme} settheme={settheme}/>
     <Project/>
     <Projects/>
     <Footer/>
   </div>
    
    </>
  )
}

export default App