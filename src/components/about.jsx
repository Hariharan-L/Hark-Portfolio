import React from "react";
import { Fade } from "react-reveal";
import { useInView } from 'react-intersection-observer';
import "../css/about.css";
import hp from "../assets/IMG-20220710-WA0006.jpg";

export const About = () => {
  const [imgRef, imgInView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const [paraRef, paraInView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div id="about" className="container-about-1">
      <div className="image" ref={imgRef}>
        <Fade bottom when={imgInView} duration={1000} delay={300 }>
          <img src={hp} alt="hp" />
        </Fade>
      </div>
      <Fade bottom when={paraInView} duration={1000} delay={500 }>
        <p className="details" ref={paraRef}>
          Passionate programmer with a flair for creative website designs, I see coding as an art form.
          Daily mobile game sessions fuel my creativity, bringing a unique perspective to my work.
          Thriving in teamwork, I contribute ideas while being supportive and entertaining.
          Beyond technical skills, I create a friendly atmosphere, promoting a positive and collaborative work environment.
          Whether it's crafting seamless code or enhancing user experiences, I'm dedicated to the art of innovation.
          Let's collaborate and build amazing things together!.
        </p>
      </Fade>
      <div className="Education">
        My Education        
        <div className="Studies">
        <Fade top cascade duration={1000} delay={400}>
          <div className="Education-container-1">
            B.E Electronics and Communication.
            <p>2021-2025<br/>Currently studiying 6th semester at <br/>Kongu Engineering College, Erode.<br/>CGPA: 8.19.</p>
          </div>
          <div className="Education-container-2">
            Class 10th & 12th.
            <p>2019-2021<br/>
              Malco Vidiyalaya Hr.Sec School, Salem.<br/>
              10th std: 88.7%.<br/>
              12th std: 89.9%.              
            </p>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};


