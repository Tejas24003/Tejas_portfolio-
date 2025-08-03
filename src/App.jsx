import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';
import Modal from './Components/Modal';
import { createBrowserRouter } from 'react-router-dom'
import Project from './Components/Project';


const App = () => {
const [theme, settheme] = useState('lucide-moon');
  return (
    <>
   <div    className={`min-h-screen transition-colors duration-500 ${
        theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
      }`} >
     <Navbar theme={theme} settheme={settheme} />
     <Hero theme={theme} settheme={settheme}/>
     <Project/>
   </div>
    
    </>
  )
}

export default App