import React, { useEffect } from 'react'
import './About.css';
import frog1 from '../../assets/frog/frog1.png'
import frog2 from '../../assets/frog/frog2.png'
import frog3 from '../../assets/frog/frog3.png'
import frog4 from '../../assets/frog/frog4.png'
import frog5 from '../../assets/frog/frog5.png'
import frog6 from '../../assets/frog/frog6.png'
import frog7 from '../../assets/frog/frog7.png'
import frog8 from '../../assets/frog/frog8.png'
import frog9 from '../../assets/frog/frog9.png'
import fish from '../../assets/about/fish.gif'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Ztext from 'react-ztext';


/**
* @author
* @function About
**/

const About = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  // let fishMove;

  // useEffect(() => {
  //     fishMove = document.getElementById('fish');
  //     window.addEventListener('scroll', function () {
  //         let value = window.scrollY;
  //         fishMove.style.left = value * 1.5 + 'px';
  // }, [])


  return (
    <div className="aboutWrapper">
      <div data-aos="fade-left" id="fish">
        <img src={fish} />
      </div>
      <div className="ztext">
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
      </div>
      <div data-aos="fade-up" className="aboutText">
        <div className="text">
          <p data-aos="flip-left">History is a pay television network and flagship channel owned by AE Networks, a joint venture between Hearst </p>
          <p data-aos="flip-right">History is a pay television network and flagship channel owned by AE Networks, a joint venture between Hearst </p>
          <p data-aos="flip-left">History is a pay television network and flagship channel owned by AE Networks, a joint venture between Hearst </p>
        </div>
      </div>
      <div data-aos="fade-right" className="aboutPhoto">
        <span className="frog1"></span>
        <img src={frog1} />
        <span className="frog2"></span>
        <img src={frog2} />
        <span className="frog3"></span>
        <img src={frog3} />
        <span className="frog4"></span>
        <img src={frog4} />
        <span className="frog5"></span>
        <img src={frog5} />
        <span className="frog6"></span>
        <img src={frog6} />
        <span className="frog7"></span>
        <img src={frog7} />
        <span className="frog8"></span>
        <img src={frog8} />
        <span className="frog9"></span>
        <img src={frog9} />
      </div>
    </div>
  )

}

export default About