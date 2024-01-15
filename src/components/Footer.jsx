import "../styles/footer.css"
import React from 'react'
import clublogo from '../Assets/Icons/clubLogo.png'
import instaicon from "../Assets/Icons/instagram.png"
import facebookIcon from "../Assets/Icons/facebook.png"
import linkedInIcon from "../Assets/Icons/linkedinIcon.png"
import mailIcon from "../Assets/Icons/mail.png"
import { Link } from "react-router-dom"

function Footer() {

  return (
    <div id="footer">
      <div id="footerBanner">
        <p className="quote">Smaller Contributions lead to Bigger</p>
        <p className="by">~ Navyadius Wildurn</p>
        <div className="button">Our Team</div>
      </div>
      <div id="footerContent">
        <div className="logo">
          <img src={clublogo} alt="" />
        </div>
        <div className="links">
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/event" >Event</Link>
          <Link to="/gallery" >gallery</Link>
          <Link to="/team">Team</Link>
        </div>
        <div className="socials">
          <Link to={"#"} ><img src={instaicon} alt="instaicon" /></Link>
          <Link to={"#"} ><img src={facebookIcon} alt="facebookIcon" /></Link>
          <Link to={"#"} ><img src={linkedInIcon} alt="linkedInIcon" /></Link>
          <Link to={"#"} ><img src={mailIcon} alt="mailIcon" /></Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
