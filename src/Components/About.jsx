import React, { useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(TextPlugin); // ✅ register text plugin

const About = () => {
  const nameRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      nameRef.current,
      { text: "" }, // start with empty text
      {
        text: "Tejas", // animate to "Tejas"
        duration: 1.5,
        ease: "none",
        delay: 1,
      }
    );
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto text-center px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Hello, I&apos;m{" "}
        <span
          ref={nameRef}
          className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"
        >
          {/* GSAP will inject text here */}
        </span>
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-xl font-light leading-relaxed">
        I craft websites and mobile applications for diverse industries,&nbsp;
        <span className="font-normal">
          focusing on a modular design approach to build flexible and scalable
          user interfaces that feel modern and intuitive.
        </span>
      </p>
    </div>
  );
};

export default About;
