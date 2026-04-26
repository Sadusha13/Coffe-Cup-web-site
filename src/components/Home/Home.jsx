import React from 'react';
import HeroImg from '../../assets/coffee2.png';
import { FaCoffee } from "react-icons/fa";

export const Home = () => {
  return (
    <div className="min-h-screen bg-brand-dark flex justify-center items-center text-white overflow-visible">
      
      <div className="container pb-5 overflow-visible">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative overflow-visible">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">
            
            <h1 className="text-5xl sm:text-4xl lg:text-7xl font-bold">
              We serve the richest{" "}
              <span className="text-primary font-cursive">Coffee</span> in the city.
            </h1>

            {/* GLASS BUTTON */}
            <div className="mt-10">
              <button className="
                flex items-center gap-2
                
                px-6 py-3 rounded-full 
                text-white font-semibold
                
                bg-white/10 backdrop-blur-md 
                border border-white/20
                
                shadow-lg
                
                transition-all duration-300
                
                hover:bg-white/20 
                hover:scale-105 
                hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]
              ">
                <FaCoffee />
                Coffee and Code
              </button>
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center items-center relative overflow-visible">
            <img 
              src={HeroImg} 
              alt="Coffee" 
              className="w-40 sm:w-96 sm:scale-110 mx-auto animate-spin-slow max-w-full"
            />
          </div>

          {/* FLOATING BOXES */}
          <div className="  bg-linear-to-r from-primary to-secondary absolute top-3 right-100 p-2 rounded-xl">
            <h1>Hey Coder</h1>
          </div>

          <div className= " bg-linear-to-r from-primary to-secondary absolute bottom-5 right-20 p-3 rounded-xl">
            <h1>Best Coffee</h1>
          </div>

        </div>
      </div>
    </div>
  );
};