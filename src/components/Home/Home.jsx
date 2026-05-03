import React from 'react';
import HeroImg from '../../assets/coffee2.png';
import { FaCoffee } from "react-icons/fa";

export const Home = () => {
  return (
    <div id="home" className="min-h-screen flex justify-center items-center overflow-visible bg-[#F5F0EA]" style={{color: '#2d2016'}}>
      
      <div className="container pb-5 overflow-visible">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative overflow-visible">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center px-4 sm:px-0">
            
            <h1 
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
            data-aos-once
            className="text-3xl sm:text-4xl lg:text-7xl font-bold" style={{color: '#2E2E2E'}}>
              We serve the richest{" "}
              <span
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="400"
              data-aos-once 
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
            data-aos-duration="700"
            data-aos-delay="300"
            data-aos-once
              src={HeroImg} 
              alt="Coffee" 
              className="w-32 sm:w-64 md:w-96 md:scale-110 mx-auto animate-spin-slow max-w-full"
            />
          </div>

          {/* FLOATING BOXES */}
          <div 
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="500"
          data-aos-once
          className="absolute top-20 right-4 sm:top-10 lg:right-160 rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-white shadow-lg text-sm sm:text-base" style={{backgroundColor: '#6F4E37'}}>
            <h1 className="font-medium">Hey Coder</h1>
          </div>

          <div 
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="600"
          data-aos-once
          className="absolute -bottom-10 right-4 sm:bottom-5 sm:right-20 rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-white shadow-lg text-sm sm:text-base" style={{backgroundColor: '#6F4E37'}}>
            <h1 className="font-medium">Best Coffee</h1>
          </div>

        </div>
      </div>
    </div>
  );
};