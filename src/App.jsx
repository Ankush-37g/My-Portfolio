import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Galaxy from "./3dcomponents/galaxy.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(()=> {
    AOS.refresh();
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="relative min-h-screen overflow-hidden">

        {/* Galaxy Background (Only Dark Mode) */}
        {darkMode && (
          <>
            <div className="fixed inset-0 -z-10 pointer-events-none"  style={{
              background: "black",
              isolation: "isolate",
            }}>
              <Galaxy
                mouseInteraction
                mouseRepulsion
                density={1}
                glowIntensity={0.3}
                hueShift={140}
                starSpeed={0.4}
              />
            </div>

            {/* Overlay */}
            <div className="fixed inset-0 bg-black/40 -z-0"></div>
          </>
        )}

        {/* Main Content */}
        <div className="relative z-10">

          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <Hero darkMode={darkMode} />
          {/* <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Contact darkMode={darkMode} /> */}

        </div>

    </div>
   
  );
};

export default App;