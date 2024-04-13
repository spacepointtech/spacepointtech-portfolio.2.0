import './App.css'
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
import Project from "./Screens/Project";
import Skills from "./Screens/Skills";
import AnimatedCursor from './Hooks/AnimatedCursor';
import { useEffect, useState } from 'react';
import Loader from './Components/Loader';

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);
  console.log(
    '%c Oh, you found the console! Feeling adventurous, huh? 🕵️‍♂️',
    'background: #ff5252; color: #fff; padding: 10px; font-size: 16px; font-weight: bold;'
  );

  return (
    <>
      <Loader load={load} />
      <div className="bg-white dark:bg-gray-800 ">
        <Navbar />
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 166, 0"
          outerAlpha={0.4}
          innerScale={0.7}
          clickables={
            ['h1',
              'h2',
              'span',
              'p',
              '.link',
              'a'
            ]
          } outerScale={5}

        />
        <Home />
        <Project />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}


export default App;
