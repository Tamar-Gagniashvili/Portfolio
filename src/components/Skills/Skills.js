import React, { useEffect } from 'react';
import './Skills.css';
import Ztext from 'react-ztext';
import ReactPlayer from 'react-player';
import 'aos/dist/aos.css';
import { BsGear } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { BsServer } from "react-icons/bs";

/**
* @author
* @function Skills
**/

const Skills = (props) => {

    // let box;
    // useEffect(()=>{
    //     for (let i = 1; i<=2800; i++){
    //         box=document.createElement('span');
    //         document.querySelector('.bubble').
    //         appendChild(box)
    //     }
    // })
    return (
        <div className="skills">
            <div className="skillsPage">
                <div data-aos="fade-left" className="skillsVideo">
                    <div className="videoWrapper">
                        <ReactPlayer fluid={false} width={'100%'} height={'70vh'} className="video" url='https://www.youtube.com/watch?v=FJ8ay4tWgFc' playing={true} loop muted />
                        <h2>Web<br />is<br />Fun</h2>
                    </div>
                </div>
                <div className="skillsWrapper">
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

                    <div data-aos="fade-right" className="skillsTextWrapper">
                        <ul>
                            <li>
                                <Ztext
                                    depth='2rem'
                                    direction='both'
                                    event='pointer'
                                    eventRotation='30deg'
                                    eventDirection='default'
                                    fade={false}
                                    layers={10}
                                    perspective='500px'
                                    style={{
                                        fontSize: '2rem'
                                    }}
                                >
                                    <span role='text' aria-label='emoji'>
                                        HTML
    </span>
                                </Ztext>
                            </li>
                            <li>
                                <Ztext
                                    depth='2rem'
                                    direction='both'
                                    event='pointer'
                                    eventRotation='30deg'
                                    eventDirection='default'
                                    fade={false}
                                    layers={10}
                                    perspective='500px'
                                    style={{
                                        fontSize: '2rem'
                                    }}
                                >
                                    <span role='text' aria-label='emoji'>
                                        CSS
    </span>
                                </Ztext>
                            </li>
                            <li>
                                <Ztext
                                    depth='2rem'
                                    direction='both'
                                    event='pointer'
                                    eventRotation='30deg'
                                    eventDirection='default'
                                    fade={false}
                                    layers={10}
                                    perspective='500px'
                                    style={{
                                        fontSize: '2rem'
                                    }}
                                >
                                    <span role='text' aria-label='emoji'>
                                        JAVASCRIPT
    </span>
                                </Ztext>
                            </li>
                            <li>
                                <Ztext
                                    depth='2rem'
                                    direction='both'
                                    event='pointer'
                                    eventRotation='30deg'
                                    eventDirection='default'
                                    fade={false}
                                    layers={10}
                                    perspective='500px'
                                    style={{
                                        fontSize: '2rem'
                                    }}
                                >
                                    <span role='text' aria-label='emoji'>
                                        REACT
    </span>
                                </Ztext>
                            </li>
                            <li>
                                <Ztext
                                    depth='2rem'
                                    direction='both'
                                    event='pointer'
                                    eventRotation='30deg'
                                    eventDirection='default'
                                    fade={false}
                                    layers={10}
                                    perspective='500px'
                                    style={{
                                        fontSize: '2rem'
                                    }}
                                >
                                    <span role='text' aria-label='emoji'>
                                        BOOTSTRAP
    </span>
                                </Ztext>
                            </li>
                            <li>
                                <Ztext
                                    depth='2rem'
                                    direction='both'
                                    event='pointer'
                                    eventRotation='30deg'
                                    eventDirection='default'
                                    fade={false}
                                    layers={10}
                                    perspective='500px'
                                    style={{
                                        fontSize: '2rem'
                                    }}
                                >
                                    <span role='text' aria-label='emoji'>
                                        JQUERY
    </span>
                                </Ztext>
                            </li>
                            <li>
                                <Ztext
                                    depth='2rem'
                                    direction='both'
                                    event='pointer'
                                    eventRotation='30deg'
                                    eventDirection='default'
                                    fade={false}
                                    layers={10}
                                    perspective='500px'
                                    style={{
                                        fontSize: '2rem'
                                    }}
                                >
                                    <span role='text' aria-label='emoji'>
                                        API
    </span>
                                </Ztext>
                            </li>
                            <li>
                                <Ztext
                                    depth='2rem'
                                    direction='both'
                                    event='pointer'
                                    eventRotation='30deg'
                                    eventDirection='default'
                                    fade={false}
                                    layers={10}
                                    perspective='500px'
                                    style={{
                                        fontSize: '2rem'
                                    }}
                                >
                                    <span role='text' aria-label='emoji'>
                                        FIREBASE
    </span>
                                </Ztext>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="iconsWrapper">
                    <div className="icons">
                        <BsGear style={{fontSize: "40px"}}/>
                        <h3>Dynamic Websites</h3>
                        <p>დინამიკური ვებ აპლიკაცია თქვენქვის და თქვენი ბიზნესისთვის</p>
                    </div>
                    <div className="icons">
                        <BsDisplay style={{fontSize: "40px"}}/>
                        <h3>Responsive Web-Design</h3>
                        <p>კომპიუტები, პლანშეტები, მობილურები - აპლიკაცია მოერგება მოწყობილობას</p>
                    </div>
                    <div className="icons">
                        <BsEye style={{fontSize: "40px"}}/>
                        <h3>Dynamic Websites</h3>
                        <p>თანამედროვე და უნიკალური დიზაინი თქვენი ვებ აპლიკაციისთვის</p>
                    </div>
                    <div className="icons">
                        <BsServer style={{fontSize: "40px"}}/>
                        <h3>Web API</h3>
                        <p>პროგრამული ინტერფეისი თქვენი front-end აპლიკაციისა თუ სხვა მიზნებისთვისs</p>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Skills