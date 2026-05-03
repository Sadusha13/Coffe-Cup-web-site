import React from "react";
import bannerImg from "../../assets/bannerImg.png";
import { FaGem } from "react-icons/fa";
import { FaMugHot } from "react-icons/fa";
import { FaSnowflake } from "react-icons/fa";

export const Banner = () => {
  return (
    <section id="#about" className="relative w-full py-20 sm:py-32 flex justify-center items-center overflow-hidden bg-[#EDE3D9]">
      
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-72 h-40 bg-orange-200 rounded-bl-[100px] opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-60 h-40 bg-pink-200 rounded-tr-[100px] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Coffee Image */}
          <div className="flex justify-center col-span-1">
            <div className="w-40 h-40 sm:w-64 sm:h-64 rounded-full p-2 bg-linear-to-br from-gray-300 via-gray-400 to-gray-600 shadow-lg overflow-hidden">
              <img
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-delay="300"
              data-aos-once
                src={bannerImg}
                alt="Coffee"
                className="block w-full h-full object-cover rounded-full animate-spin-slow"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center gap-5 col-span-1 md:col-span-2 top-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-cursive" style={{color: '#2E2E2E'}}>
              Premium Blend Coffee
            </h2>

            <p className="text-sm sm:text-base leading-relaxed" style={{color: '#6D6D6D'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              incidunt in evenore iste ratione ex alias quis magni at optio
            </p>

            {/* Coffee Types Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              
              {/* Coffee Types Column */}
              <div className="space-y-6">
                {/* Premium Coffee */}
                <div className="flex items-center gap-4">
                  <div 
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="400"
                  data-aos-once
                  className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center shadow-sm">
                    <FaSnowflake className="text-red-600 text-lg" />
                  </div>
                  <span className="font-medium" style={{color: '#2E2E2E'}}>Cold Coffee</span>
                </div>

                {/* Hot Coffee */}
                <div className="flex items-center gap-4">
                  <div 
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="500"
                  data-aos-once
                  className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center shadow-sm">
                    <FaMugHot className="text-orange-600 text-lg" />
                  </div>
                  <span className="font-medium" style={{color: '#2E2E2E'}}>Hot Coffee</span>
                </div>

                {/* Cold Coffee */}
                <div className="flex items-center gap-4">
                  <div 
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="600"
                  data-aos-once
                  className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center shadow-sm">
                    <FaGem className="text-yellow-600 text-lg" />
                  </div>
                  <span className="font-medium" style={{color: '#2E2E2E'}}>Premium Coffee</span>
                </div>
              </div>

              {/* Tea Lover Section */}
              <div 
              data-aos="slide-up"
              data-aos-duration="700"
              data-aos-delay="700"
              data-aos-once
              className="border-l-4 border-primary/40 pl-6">
                <h3 className="text-2xl font-semibold font-cursive mb-3" style={{color: '#2E2E2E'}}>
                  Tea Lover
                </h3>
                <p className="text-sm leading-relaxed" style={{color: '#6D6D6D'}}>
                  Much like writing code, brewing the perfect cup of tea requires patience, precision, and a dash of passion to create a comforting blend of flavors.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;