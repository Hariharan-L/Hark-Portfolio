import React from "react";
import { Fade } from "react-awesome-reveal";
import "../css/contact.css";
const Contact=()=>{
  return(
    <div>
      <Fade triggerOnce="true" duration={4000}>
        <div id="contact" className="Contact-title">Contact</div>
      </Fade>
      <Fade delay={300} triggerOnce="true" duration={1000}>
        <div className="neon-mist7"></div>
      </Fade>
    </div>
  )
}
export default Contact;