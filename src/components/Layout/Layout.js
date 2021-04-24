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
   const clickHandler = (id) =>{
    let elmnt = document.getElementById(id);

    elmnt.scrollIntoView(true);
   }

  return (
    <div className="layout">
      <header>
        <div className="headerItems">
          <div className="headerItem" onClick={()=>clickHandler("aboutPage")}>ჩემს შესახებ</div>
          <div className="headerItem" onClick={()=>clickHandler("skillsPage")}>რეზიუმე</div>
          <div className="headerItem" onClick={()=>clickHandler("projectPage")}>პროექტები</div>
          <div className="headerItem" onClick={()=>clickHandler("contactPage")}>კონტაქტი</div>
        </div>
      </header>
      <div>
        {props.children}
        <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
      </div>
      <footer>
        <span>© აპლიკაცია შექმნილია თამარ გაგნიაშვილის მიერ, 2021</span>
      </footer>
    </div>
  )

}

export default Layout