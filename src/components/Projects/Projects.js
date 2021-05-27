import React from 'react';
import './Projects.css';
import weather from '../../assets/projects/weather.png';
import messenger from '../../assets/projects/web-messenger.png';
import burger from '../../assets/projects/burger.png';
import todo from '../../assets/projects/todo.png';
import calculator from '../../assets/projects/calculator.png';
import clock from '../../assets/projects/clock.png';
import drum from '../../assets/projects/drum.png';
import woman from '../../assets/projects/artificial.jpg';
import useWindowSize from "@rooks/use-window-size";
import 'aos/dist/aos.css';
import { AiOutlineCodepen, AiOutlineGithub } from "react-icons/ai";
import { useTranslation } from 'react-i18next';


import ParticleImage, { forces } from "react-particle-image";

const particleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#a9cdd3"
};


const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};
/**
* @author
* @function Projects
**/



const Projects = (props) => {
  const { t } = useTranslation();

  const { innerWidth, innerHeight } = useWindowSize();

  return (
    <div className="projectPage" id="projectPage">
      <div className="particle">
        <ParticleImage
          width={Number(innerWidth)}
          height={Number(innerHeight)}
          className="particleMark"
          src={woman}
          scale={0.75}
          entropy={10}
          maxParticles={9200}
          particleOptions={particleOptions}
          mouseMoveForce={motionForce}
          touchMoveForce={motionForce}
          backgroundColor="transparent"
        />
      </div>
      {/* <div className="projectsWrapper">
        <span className="photo1">
          <a target="blank" href="https://find-world-weather.netlify.app/"><img src={weather} alt="" /></a>
        </span>
        <span className="photo2">
          <a target="blank" href="https://web-messenger.netlify.app/login"><img src={messenger1} alt="" /></a>
        </span>
        <span className="photo3">
          <a target="blank" href="https://web-messenger.netlify.app/login"><img src={messenger2} alt="" /></a>
        </span>
        <span className="photo4">
          <a target="blank" href="https://web-messenger.netlify.app/login"><img src={weather} alt="" /></a>
        </span>
        <span className="photo5">
          <a target="blank" href="https://web-messenger.netlify.app/login"><img src={messenger1} alt="" /></a>
        </span>
        <span className="photo6">
          <a target="blank" href="https://web-messenger.netlify.app/login"><img src={messenger2} alt="" /></a>
        </span>
        <span className="photo5">
          <a target="blank" href="https://web-messenger.netlify.app/login"><img src={messenger1} alt="" /></a>
        </span>
        <span className="photo6">
          <a target="blank" href="https://web-messenger.netlify.app/login"><img src={messenger2} alt="" /></a>
        </span>
        <span className="photo7">
          <a target="blank" href="https://web-messenger.netlify.app/login"><img src={messenger1} alt="" /></a>
        </span>
        <span className="photo8">
          <a target="blank" href="https://web-messenger.netlify.app/login"><img src={messenger2} alt="" /></a>
        </span>
      </div> */}
      <h1>{t("projectH1")}...</h1>
      <div  className="projectBox">
        <div className="boxWrapper">

          <div className="box">
            <div className="imgBox">
              <img src={weather} alt=""/>
            </div>
            <div className="content">
              <h2><a target="blank" href="https://find-world-weather.netlify.app/">The weather app</a></h2>
            </div>
          </div>

          <div className="box">
            <div className="imgBox">
              <img src={messenger} alt="" />
            </div>
            <div className="content">
              <h2><a target="blank" href="https://web-messenger.netlify.app/login">Web-Messenger</a></h2>
            </div>
          </div>

          <div className="box">
            <div className="imgBox">
              <img src={todo} alt=""/>
            </div>
            <div className="content">
              <h2><a target="blank" href="https://in-your-element.netlify.app/">To Do List</a></h2>
            </div>
          </div>
        </div>

        <div className="boxWrapper">
          <div className="box">
            <div className="imgBox">
              <img src={calculator} alt=""/>
            </div>
            <div className="content">
              <h2><a target="blank" href="https://calculate-online.netlify.app/">Calculator</a></h2>
            </div>
          </div>

          <div className="box">
            <div className="imgBox">
              <img src={drum} alt=""/>
            </div>
            <div className="content">
              <h2><a target="blank" href="https://fun-with-drum.netlify.app/">Drum Machine</a></h2>
            </div>
          </div>

          <div className="box">
            <div className="imgBox">
              <img src={clock} alt=""/>
            </div>
            <div className="content">
              <h2><a target="blank" href="https://25-plus-5-clock.netlify.app/">25 Plus 5 Clock</a></h2>
            </div>
          </div>
        </div>

        <div className="boxWrapper">
          <div className="box">
            <div className="imgBox">
              <img src={burger} alt=""/>
            </div>
            <div className="content">
              <h2><a target="blank" href="https://order-a-burger.netlify.app/">Order a Burger</a></h2>
            </div>
          </div>
        </div>

        <div className="iconsBox">
          <h2>{t("projectH2")}</h2>
          <div className="iconsWrapper">
            <a target="blank" href="https://github.com/Tamar-Gagniashvili"><AiOutlineGithub className="gitIcon" /></a>
            <a target="blank" href="https://codepen.io/your-work/"><AiOutlineCodepen className="codeIcon" /></a>
          </div>
        </div>
      </div>


    </div>
  )

}

export default Projects