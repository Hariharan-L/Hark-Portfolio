import React from "react";
import { Fade } from "react-awesome-reveal";
import "../css/contact.css";
const Contact=()=>{
  return(
    <div className="contact-page">
      <Fade direction="down" triggerOnce="true" duration={3000}>
        <div id="contact" className="Contact-title">Contact</div>
      </Fade>
        <h5 className="information">This is all about my portfolio thank you for visiting💫</h5>
        <a className="Resume" href="HarkResume.pdf" download="HarkResume.pdf">Downlod Resume</a>
        <div className="e-mail">hariharanhark7@gmail.com</div>
      <Fade delay={1000} triggerOnce="true" duration={2000}>
        <div className="neon-mist7"></div>
      </Fade>
    </div>
  )
}
export default Contact;