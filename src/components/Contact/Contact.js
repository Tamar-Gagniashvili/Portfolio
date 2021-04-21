import React from 'react';
import './Contact.css';
import 'aos/dist/aos.css';


/**
* @author
* @function Contact
**/

const Contact = (props) => {
  const ReactRotatingText = require('react-rotating-text');

  return (
    <div className="contactPage">
      <div className="contactWrapper">
        <div data-aos="zoom-out-up" className="contactText">
          <ReactRotatingText items={['Contact Me...', 'Make Something Special Together']} /><br />
        </div>
        <div data-aos="fade-down-right" className="inputBox">
          <input type='text' value='name' placeholder='Your Name' /><br />
          <input type='email' value='email' placeholder='Your E-mail' /><br />
          <textarea type='text' placeholder='How can I help you?' /><br />
          <button>გაგზავნა</button>
        </div>
        <div data-aos="zoom-in-down" className="cupWrapper">
          <div className="plate"></div>
          <div className="cup">
          <div className="top">
            <div className="vapour">
              <span className="vapour1"></span>
              <span className="vapour3"></span>
              <span className="vapour16"></span>
              <span className="vapour5"></span>
              <span className="vapour13"></span>
              <span className="vapour20"></span>
              <span className="vapour6"></span>
              <span className="vapour7"></span>
              <span className="vapour10"></span>
              <span className="vapour8"></span>
              <span className="vapour17"></span>
              <span className="vapour11"></span>
              <span className="vapour12"></span>
              <span className="vapour14"></span>
              <span className="vapour2"></span>
              <span className="vapour9"></span>
              <span className="vapour15"></span>
              <span className="vapour4"></span>
              <span className="vapour19"></span>
            </div>
            <div className="circle">
              <div className="tea"></div>
            </div>
          </div>
          <div className="handle"></div>
        </div>
        </div>
        

      </div>
    </div>
  )

}

export default Contact