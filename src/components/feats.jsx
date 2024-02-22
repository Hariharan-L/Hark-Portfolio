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
          <Fade direction="down" triggerOnce="true" duration={1000}>
            <div className="Feats-title">Feats</div>
          </Fade>
          <Fade direction="down" triggerOnce="true" delay={100} duration={1000}>
          <div className="Feats-Container">
            <div className="coding-container"><img src={coding} alt="coding"/>
              <div className="text-area-coding">
                <h3>Coding contest</h3>
                <ul>
                  <li>National level: All India NeoCodethon 2nd prize.</li>
                  <li>IIT Madras: Finalist and participated in Reverse Codingx(2024)</li>
                  <li>IIT Madras: Participated in final round E-contest(2024).</li>
                </ul>
              </div>
            </div>
            <div className="presentation-container"><img src={presentation} alt="presentation"/>
            <div className="text-area-presentation">
                <h3>Paper presentation</h3>
                <ul>
                  <li>IIT Madras MECHANICA: Presented paper and selected for final round on "Dynamic behaviour of high-speed gears with active vibration control." </li>
                  <li>MIT CSMIT: Participated and Presented a paper on "Wireless Sensors Networks".</li>
                  <li>KEC IEEE: Presented a paper and won KEC - 2nd prize on "Electric Vehicle".</li>
                </ul>
                <h3>Project presentation</h3>
                <h4>Solid Waste remover</h4>
                <ul>
                  <li>IDEATHON-2K23-KEC: Presented a idea and won 3rd prize.</li>
                  <li>Proof-of-Concept - KEC: Presented prototype and won 3rd prize.</li>
                </ul>
              </div>
            </div>
          </div>
          </Fade>
        </div>
    </div>
  )
}
export default Feats;