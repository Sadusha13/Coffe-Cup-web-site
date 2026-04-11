import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Services } from "./components/Services/Services";

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
      
    </div>
  )
};


export default App;