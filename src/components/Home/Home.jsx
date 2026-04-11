import React from 'react';
import HeroImg from '../../assets/coffee2.png';

export const Home = () => {
  return (
    <div className="min-h-150 sm:min-h-0 bg-brand-dark flex justify-center items-center text-white overflow-x-hidden">
     <div className="container pb-5  overflow-x-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative overflow-x-hidden">
          <div className="flex flex-col justify-center">
            <div className="order-2 sm:order-1 flex flex-col justify-center gap-6">
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">We serve the richest <span className="text-primary font-cursive">Coffee</span> in the city.</h1>
            <div className="mt-8">
              <button className="bg-linear-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-150 duration-200">Coffee and Code</button>
            </div>
          </div>
          <div className="min-h-150 sm:min-w-0 flex justify-center items-center order-1 sm:order-2 relative overflow-x-hidden mx-auto">
            <img src={HeroImg} alt="Coffee" className="w-8 sm:w-96 sm:scale-110 mx-auto animate-spin-slow max-w-full" />
          </div>
          <div className="hidden sm:block bg-linear-to-r from-primary to-secondary absolute top-15 right-130 p-3 rounded-xl max-w-full">
           <h1> Hey Corder </h1></div>
           <div className="hidden sm:block bg-linear-to-r from-primary to-secondary absolute bottom-12 right-4 p-3 rounded-xl max-w-full">
           <h1> Best Coffee</h1></div>
        </div>
      </div>
    </div>

  );
};
