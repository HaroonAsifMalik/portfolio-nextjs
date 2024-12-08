"use client"
import { useState, useEffect } from 'react';


const HeroSection = () => {
    const skills = ["Web Developer", "Full-Stack", "JavaScript", "Django Developer", "React Expert"];
    const [currentSkill, setCurrentSkill] = useState(0);
  
    // Cycle through skills dynamically
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSkill((prev) => (prev + 1) % skills.length);
      }, 2000); // Change text every 2 seconds
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="relative flex flex-col justify-center items-center min-h-screen bg-primary text-white overflow-hidden">
        {/* Large Text on Background */}
        <h1 className="absolute text-[12rem] mb-96 font-bold text-white opacity-10  transform">
        <p><span className="text-secondary">{skills[currentSkill]}</span></p>
        </h1>
  


        {/* Watermark with name */}
        <h1 className="absolute text-[15rem] font-bold text-white opacity-20 -z-10">
          Haroon Asif
        </h1>
  
       
        {/* Main Content */}
        <div className="text-center z-20 px-6">
          <h2 className="text-5xl font-bold mb-4">Hi, I'm Haroon Asif</h2>
          <p className="text-2xl mb-6">A <span className="text-secondary">{skills[currentSkill]}</span></p>
          <p className="text-lg max-w-xl mx-auto mb-6">
            I specialize in building dynamic and high-performance web applications that are as visually stunning as they are functionally efficient.
          </p>
          <button className="bg-secondary text-primary py-3 px-6 rounded-lg font-semibold hover:bg-[#fdd54a] transition duration-300">
            Explore My Work
          </button>
        </div>
  
        {/* Decorative Objects */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-third rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-third rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-third rounded-full animate-spin"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-secondary opacity-50 rounded-full animate-pulse"></div>
  
        {/* Floating Particles */}
        <div className="absolute w-[200px] h-[200px] bg-gradient-to-r from-third to-secondary rounded-full opacity-30 top-40 -left-16 filter blur-3xl"></div>
        <div className="absolute w-[150px] h-[150px] bg-gradient-to-l from-third to-secondary rounded-full opacity-40 bottom-20 right-20 filter blur-3xl"></div>
      </div>
    );
  };
  
  export default HeroSection;
  