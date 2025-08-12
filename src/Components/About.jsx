import React from "react";

const About = () => {
  return (
    <div className="w-full max-w-3xl mx-auto text-center px-4">
      {/* Heading */}
      <h2 className="text-3xl  md:text-5xl font-bold mb-4">
        Hello, I&apos;m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
          Tejas
        </span>
      </h2>

      {/* Paragraph */}
      <p className="text-base  md:text-xl font-light leading-relaxed">
        I craft websites and mobile applications for diverse industries,&nbsp;
        <span className="font-normal ">
          focusing on a modular design approach to build flexible and scalable
          user interfaces that feel modern and intuitive.
        </span>
      </p>
      
    </div>
  );
};

export default About;
