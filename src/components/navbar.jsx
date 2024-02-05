import React, {useState} from "react";
import "../css/navbar.css";
import { Fade } from "react-reveal";
const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <div>
      <Fade top>
      <header className="nav-down">
       <div href="#" className="logo">Hark</div>
        <ul className={`nav-menu ${isMenuActive ? "active" : ""}`}>
          <li className="nav-item"><a href="/#home" className="nav-link" onClick={closeMenu}>Home</a></li>
          <li className="nav-item"><a href="/#about" className="nav-link" onClick={closeMenu}>About</a></li>
          <li className="nav-item"><a href="/#skill" className="nav-link" onClick={closeMenu}>Skills</a></li>
          <li className="nav-item"><a href="/#Feats" className="nav-link" onClick={closeMenu}>Feats</a></li>
          <li className="nav-item"><a href="/#project" className="nav-link" onClick={closeMenu}>Project</a></li>
          <li className="nav-item"><a href="/#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
        </ul>
        <div className={`hamburger ${isMenuActive ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>
      </Fade>
    </div>
  );
};
export default Navbar;