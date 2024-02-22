import React from "react";
import { Fade } from "react-awesome-reveal";
import "../css/contact.css";
// import resume from "../assets/Hark's_Resume.pdf";
const Contact=()=>{
  return(
    <div>
      <Fade triggerOnce="true" duration={3000}>
        <div id="contact" className="Contact-title">Contact</div>
      </Fade>
      <a href="Hark's_Resume.pdf" download="true.pdf">hello</a>
      <Fade delay={500} triggerOnce="true" duration={2000}>
        <div className="neon-mist7"></div>
      </Fade>
    </div>
  )
}
export default Contact;