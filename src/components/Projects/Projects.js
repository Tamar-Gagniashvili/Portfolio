import React from 'react';
import './Projects.css';
import weather from '../../assets/projects/weather.png';
import messenger1 from '../../assets/projects/web-messenger1.png';
import messenger2 from '../../assets/projects/web-messenger2.png';
import Particles from 'react-particles-js';
import woman from '../../assets/projects/artificial.jpg';



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
  return (
    <div className="projectPage">
      <div className="particle">
        <ParticleImage
          className="particleMark"
          src={woman}
          scale={0.50}
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
      </div><br />
      <h1>Choose The Project...</h1>
    </div>
  )

}

export default Projects