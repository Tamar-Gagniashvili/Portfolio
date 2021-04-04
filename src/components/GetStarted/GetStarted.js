import React from 'react';

import Particles from 'react-particles-js';
import './GetStarted.css';
import CenterPhoto from '../../assets/getStarted.jpg';
import TopImage from '../../assets/top.png';
import BottomImage from '../../assets/bottom.png';
import {BiMouse} from 'react-icons/bi';

/**
* @author
* @function GetStarted
**/

const GetStarted = (props) => {
  return(
    <div className="getStartedWrapper">
       <Particles 
        params={{
          "particles":{
            "number":{
              "value": 150
            },
            "size":{
              "value": 3
            }
          },
          "interactivity":{
            "events":{
              "onhover":{
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }}
        width="100%"
        />
        <div className="mainWrapper">
            <div className="getStartedText">
                <h1>Hello</h1>
                <h1>My name is Tamar</h1>
                <h1>Web-Developer</h1>
            </div>
            <div className="getStartedImage">
                {/* <img alt="top" src={TopImage} className="topImage"/> */}
                <img alt="You are looking at me..." src={CenterPhoto} className="centerImage"/>
                {/* <img alt="bottom" src={BottomImage} className="bottomImage"/> */}
            </div>
                <button className="getStartedbtn">Get Started<BiMouse style={{fontSize:"20px"}}/></button>
            
        </div>


    </div>
   )

 }

export default GetStarted;