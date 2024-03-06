import React from "react";
import { Fade } from "react-awesome-reveal";
import "../css/contact.css";
const Contact=()=>{
  return(
    <div className="contact-page">
      <Fade triggerOnce="true" duration={3000}>
        <div id="contact" className="Contact-title">Contact</div>
      </Fade>
      <Fade delay={1000} triggerOnce="true" duration={2000}>
        <h5 className="information">This is all about my portfolio thank you for visiting💫</h5>
        <a className="Resume" href="Hark's_Resume.pdf" download="Hark's_Resume.pdf">Downlod Resume</a>
        <div className="e-mail">hariharanhark7@gmail.com</div>
      </Fade>
      <Fade delay={1000} triggerOnce="true" duration={2000}>
        <div className="neon-mist7"></div>
      </Fade>
      {/* <Fade delay={1000} triggerOnce="true" duration={2000}>
        <div className="e-mail">hariharanhark7@gmail.com</div>
      </Fade> */}
    </div>
  )
}
export default Contact;