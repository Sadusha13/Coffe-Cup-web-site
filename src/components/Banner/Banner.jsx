import React from "react";
import bannerImg from "../../assets/bannerImg.png";

export const Banner = () => {
  return (
    <section className="relative w-full bg-[#ececec] py-10 sm:py-12 flex justify-center items-center overflow-hidden">
      
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-72 h-40 bg-orange-200 rounded-bl-[100px] opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-60 h-40 bg-pink-200 rounded-tr-[100px] opacity-40"></div>
      <div className="absolute left-10 top-10 w-40 h-40 border border-black/20 rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center md:justify-start gap-10">
          
          {/* Coffee Image */}
          <div className="shrink-0">
            <div className="w-30 h-30 rounded-full p-1 bg-linear-to-br from-gray-300 via-gray-400 to-gray-600 shadow-lg overflow-hidden gap-5">
              <img
                src={bannerImg}
                alt="Coffee"
                className="block w-full h-full object-cover rounded-full animate-spin-slow"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="max-w-md text-left">
            <h2 className="text-3xl sm:text-3xl font-cursive text-black">
              Premium Blen Coffee
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              incidunt in evenore iste ratione ex alias quis magni at optio
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;