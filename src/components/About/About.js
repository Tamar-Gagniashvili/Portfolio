import React, { useEffect } from 'react'
import './About.css';

import fish from '../../assets/about/fish.gif'
import fish2 from '../../assets/about/fish2.gif'

import Aos from 'aos';
import 'aos/dist/aos.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


/**
* @author
* @function About
**/

const About = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  useEffect(() => {

    gsap.to("#fish", {
      scrollTrigger: {
        trigger: document.body,
        scrub: true,
        start: "20px 0%",
        end: "bottom 10px",
        toggleActions: "play pause pause reverse"
      },
      x: 1000,
      duration: 5
      
    });
    gsap.to("#fish2", {
      scrollTrigger: {
        trigger: document.body,
        scrub: true,
        start: "20px 10%",
        end: "bottom 10px",
        toggleActions: "play pause pause reverse",

      },
      x: -800,
      duration: 5
    })
  }, [])

  


  return (
    <div className="aboutWrapper" id="aboutPage">

      <div data-aos="fade-left" id="fish">
        <img src={fish} />
      </div>
      {/* <div className="ztext">
          <Ztext
            depth='3rem'
            direction='both'
            event='pointer'
            eventRotation='30deg'
            eventDirection='default'
            fade={false}
            layers={10}
            perspective='500px'
            style={{
              fontSize: '10rem'
            }}
          >
            <span role='img' aria-label='emoji'>
              👾👾👾
    </span>
          </Ztext>
        </div> */}
      <div className="animationWrapper">
        <span className="text1"><i>html</i>css<i>js</i></span>
        <span className="text2"><i>html</i>css<i>js</i></span>
        <span className="text3"><i>html</i>css<i>js</i></span>
        <span className="text4"><i>html</i>css<i>js</i></span>
        <span className="text5"><i>html</i>css<i>js</i></span>
        <span className="text6"><i>html</i>css<i>js</i></span>
        <span className="text7"><i>html</i>css<i>js</i></span>
        <span className="text8"><i>html</i>css<i>js</i></span>
        <span className="text9"><i>html</i>css<i>js</i></span>
        <span className="text10"><i>html</i>css<i>js</i></span>
        <span className="text11"><i>html</i>css<i>js</i></span>
        <span className="text12"><i>html</i>css<i>js</i></span>
        <span className="text13"><i>html</i>css<i>js</i></span>
        <span className="text14"><i>html</i>css<i>js</i></span>
        <span className="text15"><i>html</i>css<i>js</i></span>
        <span className="text16"><i>html</i>css<i>js</i></span>
      </div>
      <div data-aos="fade-up" className="aboutText">
        <div className="text">
          <p data-aos="flip-left">გამარჯობა is a pay television network and flagship channel owned by AE Networks, a joint venture between Hearst </p>
          <p data-aos="flip-right">History is a pay television network and flagship channel owned by AE Networks, a joint venture between Hearst </p>
          <p data-aos="flip-left">History is a pay television network and flagship channel owned by AE Networks, a joint venture between Hearst </p>
        </div>
        <div className="aboutInfo">
          <ul>
            <li><span>სახელი:</span> თამარ გაგნიაშვილი</li>
            <li><span>ასაკი:</span> 22</li>
            <li><span>მისამართი:</span> თბილისი, Geo</li>
            <li><span>მეილი:</span> tamo.gagniashvili@gmail.com</li>
            <li><span>ტელეფონი:</span> 598 43 22 20</li>
            <li><span>Freelance:</span> ხელმისაწვდომი</li>
            <li><span>Github:</span><a target="blank" href="https://github.com/Tamar-Gagniashvili?tab=repositories">Tamar-Gagniashvili</a> </li>
          </ul>
        </div>
      </div>
      <div data-aos="fade-left" id="fish2">
        <img src={fish2} />
      </div>
    </div>

  )

}

export default About