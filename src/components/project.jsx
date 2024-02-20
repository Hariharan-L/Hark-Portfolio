import React from "react";
import { Fade } from "react-awesome-reveal";
import project2 from"../assets/Project2.png"
import project3 from "../assets/web-app.webp";
import "../css/project.css";
const Project = ()=>{
  return(
    <div>
      <Fade duration={2000} triggerOnce="true">
        <div id="project" className="Project-title">Project's</div>
      </Fade>
      <Fade triggerOnce="true">
      <div className="grid-projects">
        <div className="neon-mist5-1"></div>
        <div className="neon-mist5-2"></div>
        <div className="neon-mist6"></div>
        <div className="boxes grid-box1">
        </div>
        <div className="boxes grid-box2">
          <a href="https://hark.web.app" target="blank">
            <img src={project2} className="project2" alt=""/>
            <h3 className="text2-1">Game Store Website</h3>
            <h3 className="text2-2">A simple web store build while learning web development.</h3>
          </a>
        </div>
        <div className="boxes grid-box3">
          <a href="https://hark.web.app" target="blank">
            <img src={project3} alt=""/>
            <h3 className="text2-1">Chatting Web App</h3>
            <h3 className="text2-2">A Web App for chatting build using REACT.</h3>
          </a>
        </div>
        <div className="boxes grid-box4">
        </div>
        <div className="boxes grid-box5">
        </div>
      </div>
      </Fade>
    </div>
  )
}
export default Project;