import React from 'react';
import HeroImg from '../../assets/coffee2.png';
import { FaCoffee } from "react-icons/fa";

export const Home = () => {
  return (
    <div id="home" className="min-h-screen flex justify-center items-center overflow-visible bg-[#F5F0EA]" style={{color: '#2d2016'}}>
      
      <div className="container pb-5 overflow-visible">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative overflow-visible">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">
            
            <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            className="text-5xl sm:text-4xl lg:text-7xl font-bold" style={{color: '#2E2E2E'}}>
              We serve the richest{" "}
              <span
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true" 
              className="text-primary font-cursive">Coffee</span> in the city.
            </h1>

            {/* GLASS BUTTON */}
            <div className="mt-10">
              <button className="
                flex items-center gap-2
                
                px-6 py-3 rounded-full 
                font-semibold
                
                shadow-lg
                
                transition-all duration-300
                
                hover:scale-105 
                hover:shadow-[0_0_25px_rgba(90,62,43,0.4)]
              " style={{backgroundColor: '#6F4E37', color: '#FFFFFF'}}>
                <FaCoffee />
                Coffee and Code
              </button>
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center items-center relative overflow-visible">
            <img 
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
              src={HeroImg} 
              alt="Coffee" 
              className="w-40 sm:w-96 sm:scale-110 mx-auto animate-spin-slow max-w-full"
            />
          </div>

          {/* FLOATING BOXES */}
          <div 
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-once="true"
          className="absolute top-10 right-160 rounded-xl px-4 py-3 text-white shadow-lg" style={{backgroundColor: '#6F4E37'}}>
            <h1 className="font-medium">Hey Coder</h1>
          </div>

          <div 
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-once="true"
          className="absolute bottom-5 right-20 rounded-xl px-4 py-3 text-white shadow-lg" style={{backgroundColor: '#6F4E37'}}>
            <h1 className="font-medium">Best Coffee</h1>
          </div>

        </div>
      </div>
    </div>
  );
};