import React from 'react';
import './home.css';
import Typewriter from "typewriter-effect";
import { useTheme } from "../../context/ThemeContext";
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import Fade from "react-reveal/Fade";


const Home = () => {
  const { theme, setTheme } = useTheme(); // Destructure the object returned by useTheme
  const handleTheme = ()=>{
    setTheme((prevState)=>(prevState === 'light'?'dark':'light'));
  };
  return (
    <>
      <div className="container-fluid home-container" id='home'>
        <div className="theme-btn" onClick={handleTheme}>
          {theme === 'light' ? <BsFillMoonStarsFill size={25}/> : <BsFillSunFill size={25}/>}
        </div>
        <div className="container home-content">
          <Fade right>
          <h1>Hi👋</h1>
          <h2>
            <Typewriter
              options={{
                strings: ["We Are Web Developers!", "We are Designers!", "Websites/Logos"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          </Fade>

          <Fade bottom>
          <div className="home-buttons">
            <a className='btn btn-hire' href='https://www.linkedin.com/in/saksham-chopra-320b3022a/' rel='noreferrer'target='_blank'>Hire Me</a>
          </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Home;
