import React from 'react';
import './Skills.css';
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

    return (
        <div className="skills" id="skillsPage">
            <div className="skillsPage">
                <div data-aos="fade-left" className="skillsVideo">
                    <div className="videoWrapper">
                        <ReactPlayer fluid={false} width={'100%'} height={'70vh'} className="video" url='https://www.youtube.com/watch?v=FJ8ay4tWgFc' playing={true} loop muted />
                        <h2>Web<br />is<br />Fun</h2>
                    </div>
                </div>
                <div className="skillsWrapper">
                    <div data-aos="fade-right" className="skillsTextWrapper">
                        <ul>
                            <li>React.js</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                            <li>JQuery</li>
                            <li>API</li>
                            <li>Firebase</li>
                        </ul>

                    </div>
                </div>
                <div className="iconsWrapper">
                    <div className="icons">
                        <BsGear style={{ fontSize: "40px" }} />
                        <h3>Dynamic Websites</h3>
                        <p>დინამიკური ვებ აპლიკაცია თქვენქვის და თქვენი ბიზნესისთვის</p>
                    </div>
                    <div className="icons">
                        <BsDisplay style={{ fontSize: "40px" }} />
                        <h3>Responsive Web-Design</h3>
                        <p>კომპიუტები, პლანშეტები, მობილურები - აპლიკაცია მოერგება მოწყობილობას</p>
                    </div>
                    <div className="icons">
                        <BsEye style={{ fontSize: "40px" }} />
                        <h3>Web Design</h3>
                        <p>თანამედროვე და უნიკალური დიზაინი თქვენი ვებ აპლიკაციისთვის</p>
                    </div>
                    <div className="icons">
                        <BsServer style={{ fontSize: "40px" }} />
                        <h3>Web API</h3>
                        <p>პროგრამული ინტერფეისი თქვენი front-end აპლიკაციისა თუ სხვა მიზნებისთვისs</p>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Skills