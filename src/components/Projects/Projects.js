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
      <h1 data-aos="fade-right">ზოგიერთი ჩემი პროქტი...</h1>
      <div data-aos="fade-up" className="projectBox">
        <div className="boxWrapper">

          <div className="box">
            <div className="imgBox">
              <img src={weather} />
            </div>
            <div className="content">
              <h2><a target="blank" href="#">The weather app</a></h2>
            </div>
          </div>

          <div className="box">
            <div className="imgBox">
              <img src={messenger} />
            </div>
            <div className="content">
              <h2><a target="blank" href="#">Web-Messenger</a></h2>
            </div>
          </div>

          <div className="box">
            <div className="imgBox">
              <img src={todo} />
            </div>
            <div className="content">
              <h2><a target="blank" href="#">To Do List</a></h2>
            </div>
          </div>
        </div>

        <div className="boxWrapper">
          <div className="box">
            <div className="imgBox">
              <img src={calculator} />
            </div>
            <div className="content">
              <h2><a target="blank" href="#">Calculator</a></h2>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={drum} />
            </div>
            <div className="content">
              <h2><a target="blank" href="#">Drum Machine</a></h2>
            </div>
          </div>

          <div className="box">
            <div className="imgBox">
              <img src={clock} />
            </div>
            <div className="content">
              <h2><a target="blank" href="#">25 Plus 5 Clock</a></h2>
            </div>
          </div>
        </div>

        <div className="boxWrapper">
          <div className="box">
            <div className="imgBox">
              <img src={burger} />
            </div>
            <div className="content">
              <h2><a target="blank" href="#">Order a Burger</a></h2>
            </div>
          </div>
        </div>

        <div className="boxWrapper iconsBox">
          <h2>See my projects on GitHub and CodePen</h2>
          <div className="iconsWrapper">
            <a target="blank" href="https://github.com/Tamar-Gagniashvili?tab=repositories"><AiOutlineGithub className="gitIcon" /></a>
            <a target="blank" href="https://codepen.io/your-work/"><AiOutlineCodepen className="codeIcon" /></a>
          </div>
        </div>
      </div>


    </div>
  )

}

export default Projects