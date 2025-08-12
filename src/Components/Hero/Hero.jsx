import React from "react";
import { useState } from "react";
import Modal from "../../Components/Modal";
import codeguy from "../../assets/coding_guy-removebg-preview.png";
import About from "../About";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Mail, Download } from "lucide-react";

const Hero = ({ theme, settheme }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="w-full min-h-[80vh] flex items-center justify-center px-4 py-10">
        {show && <Modal onclose={() => setShow(false)} />}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-8">
          {/* Left - Image and Buttons */}
          <div className="flex flex-col  items-center flex-1 max-w-md gap-6">
            <img
              src={codeguy}
              alt="Developer Illustration"
              className="w-50 md:w-60 xl:w-70 object-contain"
            />

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="https://drive.google.com/file/d/1HmguiPTm92pGUIKqS0S_kikydgEkzBVY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group  text-center flex justify-center items-center gap-0.5 text-lg  bg-gradient-to-r from-indigo-400 to-purple-400 text-white font-semibold py-2 px-6 rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                <Download className="group-hover:animate-bounce"  />
                Download Resume
              </a>

              <button
                onClick={() => setShow(true)}
                className="flex-2/5 text-center flex justify-center items-center gap-0.5 text-lg border border-amber-50  font-semibold py-2 px-6 rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out animate-fade-in"
              >
                <Mail className="mr-0.5" />
                Get In Touch
              </button>
            </div>
          </div>

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
