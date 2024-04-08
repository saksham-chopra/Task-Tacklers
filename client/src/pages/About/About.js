import React from 'react'
import "./About.css";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <>
    <Flip bottom>
    <div className="about" id='about'>
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                <img src="https://tse1.mm.bing.net/th?id=OIP.puiGVcTyXaXiLV_N2Zy79wAAAA&pid=Api&P=0&h=180" 
                alt="profile_pic" />
            </div>
            <div className="col-md-6 about-content">
    <h1>About Us</h1>
    <ul>
        <p>Why Hire us..?</p>
        <li>Budget friendly</li>
        <li>user-Friendly Websites</li>
        <li>Animations</li>
        <li>Logos</li>
        <li>Designs</li>
        <li>New Version of Tech</li>
    </ul>
</div>

        </div>
    </div>
    </Flip>
    </>
  )
}

export default About