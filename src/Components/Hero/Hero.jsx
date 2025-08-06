import React from "react";
import Modal from "../../Components/Modal";
import codeguy from "../../assets/coding_guy-removebg-preview.png";
import About from "../About";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Hero = ({ theme, settheme }) => {
  return (
    <>
      <section className="w-full min-h-[80vh] flex items-center justify-center px-4 py-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-8">
          
          {/* Left - Image and Buttons */}
          <div className="flex flex-col items-center lg:items-start flex-1 max-w-md gap-6">
            <img
              src={codeguy}
              alt="Developer Illustration"
              className="w-52 md:w-64 xl:w-72 object-contain"
            />

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="https://drive.google.com/file/d/1HmguiPTm92pGUIKqS0S_kikydgEkzBVY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-2xl hover:scale-105 transition duration-300"
              >
                Resume
              </a>

              <button
                className="flex-1 text-center text-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-2xl hover:scale-105 transition duration-300"
              >
                <Modal />
              </button>
            </div>
          </div>

          {/* Right - About Component */}
          <div className="flex-1 max-w-md text-center lg:text-left">
            <About />
          </div>
        </div>

      </section>
      <div className="w-full flex items-center justify-center mt-[-38px] sm:mt-0">
  <DotLottieReact
    src="https://lottie.host/a348641b-fc81-451e-b5f5-412ec81e58a4/R1sFNjVlaI.lottie"
    loop
    autoplay
    style={{ width: "120px", height: "120px" }}
  />
</div>


      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
    </>
  );
};

export default Hero;
