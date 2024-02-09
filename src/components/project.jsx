import { Fade } from "react-awesome-reveal";
import React from "react";
import "../css/project.css";
// import lunar1 from "../assets/Lunar-newyear1.png";
// import lunar2 from "../assets/Lunar-newyear2.png";
// import lunar3 from "../assets/Lunar-newyear3.png";
const Project = ()=>{
  return(
    <div id="project">
      <Fade direction="down"  triggerOnce="true" duration={1000}>
        <div className="Project-title">Project's</div>
      </Fade>
    </div>
  )
}
export default Project;