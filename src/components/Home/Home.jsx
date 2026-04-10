import React from 'react';
import HeroImg from '../../assets/coffee2.png';

export const Home = () => {
  return (
    <div className="min-h-[500px] sm:min-h-[600px] bg-brand-dark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">We serve the richest <span className="text-primary font-cursive">Coffee</span> in the city.</h1>
            <div className="mt-8">
              <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-150 duration-200">Coffee and Code</button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={HeroImg} alt="Coffee" className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto animate-spin-slow" />
          </div>
        </div>
      </div>
    </div>

  );
};
