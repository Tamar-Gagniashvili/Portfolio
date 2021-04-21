import React from 'react';
import './Projects.css';
import weather from '../../assets/projects/weather.png';
import messenger1 from '../../assets/projects/web-messenger1.png';
import messenger2 from '../../assets/projects/web-messenger2.png';
import Particles from 'react-particles-js';
import woman from '../../assets/projects/artificial.jpg';
import useWindowSize from "@rooks/use-window-size";
import 'aos/dist/aos.css';



import ParticleImage, { forces } from "react-particle-image";
import { useEffect } from 'react/cjs/react.production.min';

const particleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#8dbda6"
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
    <div className="projectPage">
      <div data-aos="fade-up" className="projectText1">
        <h1>There are some of my projects</h1>
      </div>
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
      <div className="projectsWrapper">
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
      </div>
      <h1 data-aos="fade-right">Choose The Project...</h1>
      <div data-aos="fade-up" className="boxWrapper">
        <div className="box">
          <div className="imgBox">
            <img src={weather} />
          </div>
          <div className="content">
            <h2><a target="blank"href="#">The weather app</a><br /><span>Find the weather around the world</span></h2>
          </div>
        </div>


        <div className="box">
          <div className="imgBox">
            <img src={messenger1} />
          </div>
          <div className="content">
            <h2><a target="blank"href="#">Web-Messenger</a><br /><span>Chat with your friends</span></h2>
          </div>
        </div>


        <div className="box">
          <div className="imgBox">
            <img src={messenger2} />
          </div>
          <div className="content">
            <h2><a target="blank"href="#">To Do List</a><br /><span>Plan your actions, now in your personal application</span></h2>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Projects