import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Services } from "./components/Services/Services";
import { Banner } from "./components/Banner/Banner";
import AppStore from "./components/AppStote/AppStore";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <div className="w-full min-h-screen overflow-x-hidden font-sans">
      <Navbar />
      <Home />
      <Services/>
      <Banner/>
      <AppStore/>
      <Testimonial/>
      <Footer/>
      
    </div>
  )
};


export default App;