import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import "../css/home.css";
import { useTypewriter} from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ['Python Developer.','MERN Stack Developer.'],
    loop: {},
    typeSpeed: 180,
    deleteSpeed: 110
  });
  const [isFonLeftVisible, setIsFonLeftVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust the value based on when you want to hide the fon-left element
      const hidePosition = 480;

      if (scrollY < hidePosition) {
        setIsFonLeftVisible(false);
      } else {
        setIsFonLeftVisible(true);
      }
    };
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="home">
      <div className="neon-mist1"></div>
      <div className="neon-mist2"></div>
      <div className="home">
      <hr className={` line-top ${isFonLeftVisible ? 'fon-left-visible' : ''}`}/>
      <Fade direction="up" triggerOnce="true">
        <div>
        <div className="fname">Hello 👋, I'm</div>
        <div className="name">Hariharan L</div>
        <span>{text}</span> 
        <div className="fon">
        <a href="https://twitter.com/Hariharan_Hark" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://github.com/Hariharan-L" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/hari-haran-82aa4224b" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      </div>
      </Fade> 
          
      <div className={`fon-left ${isFonLeftVisible ? 'fon-left-visible' : ''}`}>
        <a href="https://twitter.com/Hariharan_Hark" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://github.com/Hariharan-L" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/hari-haran-82aa4224b" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <hr className={` line-bottom ${isFonLeftVisible ? 'fon-left-visible' : ''}`}/>
    </div> 
    </div>
  );
}
export default Home;