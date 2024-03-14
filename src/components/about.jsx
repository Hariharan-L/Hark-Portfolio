import React from "react";
import { Fade } from "react-awesome-reveal";
import "../css/about.css";
import hp from "../assets/IMG-20220710-WA0006.jpg";

const About = () => {
  return (
    <div id="about" className="container-about-1">
        <Fade direction="down" triggerOnce="true" duration={1000} delay={1000}>
          <h3 className="about-heading">About me</h3>
          </Fade>
      <div className="image">
        <Fade direction="down" triggerOnce="true" duration={1000} delay={400}>
          <img src={hp} alt="hp" />
        </Fade>
      </div>
      <Fade direction="down" triggerOnce="true"  duration={1000} delay={500}>
        <div><p className="details" >
          Passionate programmer with a flair for creative website designs, I see coding as an art form.
          Daily mobile game sessions fuel my creativity, bringing a unique perspective to my work.
          Thriving in teamwork, I contribute ideas while being supportive and entertaining.
          Beyond technical skills, I create a friendly atmosphere, promoting a positive and collaborative work environment.
          Whether it's crafting seamless code or enhancing user experiences, I'm dedicated to the art of innovation.
          Let's collaborate and build amazing things together!.
        </p>
        </div>
      </Fade>
      <div className="Education">
        <div className="text-gradient">My Education  </div>      
        <div className="Studies">
        <Fade direction="down" triggerOnce="true" duration={1000} delay={400}>
          <div className="Education-container-1">
            <div className="Education-title1">B.E Electronics and Communication.</div>
            <p>2021-2025<br/>Currently studiying 6th semester at <br/>Kongu Engineering College, Erode.<br/>CGPA: 8.19.</p>
          </div>
          <div className="Education-container-2">
          <div className="Education-title2">Class 10th & 12th.</div>
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


export default About;