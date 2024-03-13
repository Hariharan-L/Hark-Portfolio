import React from "react";
import "../css/skill.css";
import { Fade } from "react-awesome-reveal";
import java from "../assets/java.png";
import c from "../assets/C.png";
import cpp from "../assets/C++.png";
import python from "../assets/python.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/React.png";
import mongodb from "../assets/Mongodb.png";
import mysql from "../assets/MySql.png";
import git from "../assets/git.png";
import js from "../assets/js.png";

const Skills = () =>{
  return(
    <div>
      <div id="skill" className="Skill-total">
      <div className="neon-mist3"></div>
          <div className="Skill">
            <Fade direction="down"  triggerOnce="true" delay={100}>
            <div className="title">Programing Skills</div>
            </Fade>
            <Fade direction="down" triggerOnce="true" delay={200}>
            <div className="first-row">
              <img src={html} alt="html"/>
              <img src={css} alt="css"/>
              <img src={js} alt="js"/>
              <img src={react} alt="react"/>
              <img className="mongo-db" src={mongodb} alt="mongodb"/>
              <img className="sql"src={mysql} alt="mysql"/>
            </div>
            </Fade>
            <Fade direction="down" cascade="true" triggerOnce="true" delay={800}>
            <div className="second-row">
              <img className="python" src={python} alt="python"/>
              <img className="java" src={java} alt="java"/>
              <img className="c" src={c} alt="c"/>
              <img className="cpp" src={cpp} alt="cpp"/>
              <img className="git" src={git} alt="git"/>
            </div>
            </Fade>
        </div>
        </div>
    </div>
  )
}
export default Skills;