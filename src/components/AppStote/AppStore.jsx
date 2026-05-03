import React from 'react';
import app_store from "../../assets/app_store.png";
import play_store from "../../assets/play_store.png";
import BgPng from "../../assets/coffee-beans.jpg";

const backgroundStyle = {
    backgroundImage: `url(${BgPng})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
};
const AppStore = () => {
  return (
    <section id="contact" style={backgroundStyle} className="py-14 sm:py-10">
      <div className="container mx-auto px-4">
        <div 
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="300"
        data-aos-once
        className="max-w-md sm:max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl text-center sm:text-left font-bold pl-0 sm:pl-3 text-white/90">
            Download Our App
          </h2>
          <p className="text-base sm:text-lg text-center sm:text-left font-semibold pl-0 sm:pl-3 text-white/90 mt-2">
            Order your favorite coffee from anywhere.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
            <img
              src={app_store}
              alt="App Store"
              className="w-32 sm:w-40 md:w-48 object-contain"
            />
            <img
              src={play_store}
              alt="Play Store"
              className="w-32 sm:w-40 md:w-48 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppStore