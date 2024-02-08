import React from "react";
import { Fade } from "react-awesome-reveal";
import "../css/feats.css";
import coding from"../assets/coding.jpg";
import presentation from"../assets/presentation.jpg";
const Feats=()=>{
  return(
    <div id="Feats">
        <div className="neon-mist4"></div>
        <div className="Feats-page">
          <Fade direction="down"  triggerOnce="true" duration={1000}>
            <div className="Feats-title">Feats</div>
          </Fade>
          <Fade direction="down" triggerOnce="true" delay={0} duration={1000}>
          <div className="Feats-Container">
            <div className="coding-container"><img src={coding} alt="coding"/></div>
            <div className="presentation-container"><img src={presentation} alt="presentation"/></div>
          </div>
          </Fade>
        </div>
    </div>
  )
}
export default Feats;