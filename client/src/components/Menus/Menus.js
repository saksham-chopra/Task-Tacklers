import React from 'react';
import './Menus.css';
import {FcAbout, FcBiotech, FcBusinessContact, FcHome, FcVideoProjector} from "react-icons/fc";
import {Link} from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
        <>
        <Zoom>
         <div className="navbar-profile-pic">
         <img src="post4.png" 
         alt="profile pic" />
     </div>
     </Zoom>
     <Fade left>
     <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
            <Link to="home" spy={true} offset={-100} smooth={true} duration={100}>
                <FcHome/>
                Home
              </Link>
              </div>
              <div className="nav-link">
                <Link to="about" spy={true} offset={-100} smooth={true} duration={100}>
                <FcAbout/>
                About Us
                </Link>
              </div>
              <div className="nav-link">
                <Link to="tech" spy={true} offset={-100} smooth={true} duration={100}>
                <FcBiotech/>
                Tech stack 
                </Link>
              </div>
              <div className="nav-link">
                <Link to="projects" spy={true} offset={-100} smooth={true} duration={100}>
                <FcVideoProjector/>
                Projects 
                </Link>
              </div>
              <div className="nav-link">
                <Link to="contact" spy={true} offset={-100} smooth={true} duration={100}>
                <FcBusinessContact/>
                Contact
                </Link>
              </div>
        </div>
        
     </div>
     </Fade>
     </>
    ):(
        <>
        <Fade left>
        <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
            <Link to="home" spy={true} offset={-100} smooth={true} duration={100}>
                <FcHome title='home'/>
                </Link>
              </div>
              <div className="nav-link">
              <Link to="about" spy={true} offset={-100} smooth={true} duration={100}>
                <FcAbout title='about us'/>
                </Link>
              </div>
              <div className="nav-link">
              <Link to="tech" spy={true} offset={-100} smooth={true} duration={100}>
                <FcBiotech title='tech stack'/>          
                </Link>   
              </div>
              <div className="nav-link">
              <Link to="projects" spy={true} offset={-100} smooth={true} duration={100}>
                <FcVideoProjector title='projects'/>  
                </Link>              
              </div>
              <div className="nav-link">
              <Link to="contact" spy={true} offset={-100} smooth={true} duration={100}>
                <FcBusinessContact title='contact'/>     
                </Link>          
              </div>
        </div>
        
     </div>
          
          </Fade>
     
        </>
    )}
    
    </>
  )
}

export default Menus