import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Project from "./Components/Project";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

const App = () => {
  const [theme, settheme] = useState("dark");

  return (
    <>
      <div
        className={`
          min-h-screen
          transition-colors
          duration-500
          ${
            theme === "light"
              ? "bg-[#F5F4F0] text-[#111111]"
              : "bg-[#0D0D0F] text-[#F5F4F0]"
          }
        `}
      >
        <Navbar
          theme={theme}
          settheme={settheme}
        />

        <Hero
          theme={theme}
          settheme={settheme}
        />

        <Project />

        <Projects />

        <Footer />
      </div>
    </>
  );
};

export default App;