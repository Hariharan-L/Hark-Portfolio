import React from "react";
import { Fade } from "react-awesome-reveal";
import "../css/contact.css";
const Contact=()=>{
  return(
    <div>
      <Fade triggerOnce="true" duration={3000}>
        <div id="contact" className="Contact-title">Contact</div>
      </Fade>
      <Fade delay={1000} triggerOnce="true" duration={3000}>
        <div className="neon-mist7"></div>
      </Fade>
    </div>
  )
}
export default Contact;