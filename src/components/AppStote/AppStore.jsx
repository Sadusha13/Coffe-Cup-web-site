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
    <section style={backgroundStyle} className="py-14 sm:py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-md">
          <h2 className="text-3xl text-center sm:text-left font-bold pl-3 text-white/90">
            Download Our App
          </h2>
          <p className="text-xl text-center sm:text-left font-semibold pl-3 text-white/90">
            Order your favorite coffee from anywhere.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3  mx-auto">
            <img
              src={app_store}
              alt="App Store"
              className="w-40 sm:w-48 object-contain"
            />
            <img
              src={play_store}
              alt="Play Store"
              className="w-40 sm:w-48 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppStore