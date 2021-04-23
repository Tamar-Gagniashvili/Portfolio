import React, { useRef, useEffect } from 'react';
import './Home.css';
// import mark from '../../assets/images.png';
// import Particles from 'react-particles-js';
// import Typist from 'react-typist';
import stars from '../../assets/Home/stars.png';
import mountainsBehind from '../../assets/Home/mountains_behind.png';
import mountainsFront from '../../assets/Home/mountains_front.png';
import moon from '../../assets/Home/moon.png';
import Typist from 'react-typist';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';




// import ParticleImage, { forces } from "react-particle-image";
// import { useEffect } from 'react/cjs/react.production.min';

// const particleOptions = {
//     filter: ({ x, y, image }) => {
// Get pixel
// const pixel = image.get(x, y);
// Make a particle for this pixel if blue > 50 (range 0-255)
//         return pixel.b > 50;
//     },
//     color: ({ x, y, image }) => "#8dbda6"
// };


// const motionForce = (x, y) => {
//     return forces.disturbance(x, y, 5);
// };
/**
* @author
* @function Home
**/

const Home = (props) => {

    let star;
    let moonSun;
    let mountainBehind;
    let mountainFront;

    useEffect(() => {
        star = document.getElementById('stars');
        moonSun = document.getElementById('moon');
        mountainBehind = document.getElementById('mountainsBehind');
        mountainFront = document.getElementById('mountainsFront');

        window.addEventListener('scroll', function () {
            let value = window.scrollY;
            console.log(star)
            star.style.left = value + 'px';
            moonSun.style.top = value * 1.05 + 'px';
            mountainBehind.style.top = value * 0.5 + 'px';
            mountainFront.style.top = value * 0 + 'px';
        })
    }, [])



    return (
        <div className="home">
            <section>
                <img src={stars} id="stars" />
                <img src={moon} id="moon" />
                <img src={mountainsBehind} id="mountainsBehind" />
                <Typist>
                    <h2 id="text">თ.გაგნიაშვილი</h2><br />
                </Typist>
                <Typist>
                    <p id="paragraph">ვებ-დეველოპერი</p>
                </Typist>
                <img src={mountainsFront} id="mountainsFront" />
            </section>
            <div id="sec2">
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>











            {/* <div className="leftItems">
                <ParticleImage
                    className="particleMark"
                    src={mark}
                    scale={0.40}
                    entropy={10}
                    maxParticles={1200}
                    particleOptions={particleOptions}
                    mouseMoveForce={motionForce}
                    touchMoveForce={motionForce}
                    backgroundColor="#0e1212"
                />
                <div className="homeTextWrapper">
                    <Typist>
                        <h1>თამარ გაგნიაშვილი</h1>
                        <h2>Front-End Developer</h2>
                    </Typist>
                </div>
            </div>

            <div className="imgWrapper">
                <div className="particleWrapper">
                    <Particles
                        params={{
                            "particles": {
                                "number": {
                                    "value": 25
                                },
                                "size": {
                                    "value": 2
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                }
                            }
                        }}
                        width="100%"
                    />
                </div>
            </div> */}

        </div>
    )

}

export default Home