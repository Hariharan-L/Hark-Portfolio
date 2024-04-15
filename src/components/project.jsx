import React from "react";
import { Fade } from "react-awesome-reveal";
import project2 from"../assets/Project2.png"
import project3 from "../assets/web-app.webp";
import project4 from "../assets/IEEE_PROJECT.png";
import project5 from "../assets/Foodwaste.jpg";
import "../css/project.css";
const Project = ()=>{
  return(
    <div className="project-total">
      <Fade duration={2000} triggerOnce="true">
        <div id="project" className="Project-title">Project's</div>
      </Fade>
      <Fade delay={500} duration={2000} triggerOnce="true">
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
          <a href=" " target="blank">
            <img src={project3} alt=""/>
            <h3 className="text3-1">Chatting Web App</h3>
            <h3 className="text3-2">Upcomming</h3>
          </a>
        </div>
        <div className="boxes grid-box4">
        <a href=" " target="blank">
            <img src={project4} alt=""/>
            <h3 className="text3-1">IEEE Project</h3>
            <h3 className="text3-2">on progress</h3>
          </a>
        </div>
        <div className="boxes grid-box5">
          <a href="https://drive.google.com/drive/folders/1HxbEFAAXriKwDkHTpb7RLgMPCWsIS58H" target="blank">
            <img src={project5} alt=""/>
          </a>
            <h3 className="text5-1">Solid Waste Remover</h3>
            <h3 className="text5-2">A Handy device that is used to suck wastes in dry/wet surface ie.food, dust, chewing gum.... 
            It is made for the reason that sanitory workers use to remove foods in the sink using this device instead of using hands.
            In restroom's chewing gum's are stick with the metal plate that needs can be easily removed using this device.</h3>
        </div>
      </div>
      </Fade>
    </div>
  )
}
export default Project;