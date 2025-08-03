import React from 'react';

const About = () => {
  return (
 
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 normal-case ">
          Hello, I'm <span className="text-blue-400">Tejas</span>
        </h2>

        {/* Paragraph */}
        <p className="text-lg font-light  leading-relaxed">
          I create websites and mobile applications for different industries,{' '}
          <span className=" font-normal">
            focusing on a modular design approach to build flexible and scalable interfaces.
          </span>
        </p>
      </div>
  
  );
};

export default About;
