import React from 'react';
import './Layout.css'
// import { FaSnowflake } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { BsCollection, BsEnvelope, BsPerson, BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';
import MouseParticles from 'react-mouse-particles';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return (
    <div className="layout">
      <header>
        <div className="headerItems">
          <div className="headerItem">ჩემს შესახებ</div>
          <div className="headerItem">რეზიუმე</div>
          <div className="headerItem">პროექტები</div>
          <div className="headerItem">კონტაქტი</div>
        </div>
      </header>
      <div>
        {props.children}
        <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
      </div>
    </div>
  )

}

export default Layout