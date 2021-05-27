import React from 'react';
import './Layout.css'
// import { FaSnowflake } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { BsCollection, BsEnvelope, BsPerson, BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';
import MouseParticles from 'react-mouse-particles';
import { useTranslation } from 'react-i18next';
import Language from '../UI/Language/Language'


/**
* @author
* @function Layout
**/


const Layout = (props) => {
  const { t } = useTranslation();

  const clickHandler = (id) => {
    let elmnt = document.getElementById(id);

    elmnt.scrollIntoView(true);
  }

  return (
    <div className="layout">
      <header>
        <div className="headerItems">
          <div className="headerItem" onClick={() => clickHandler("aboutPage")}>{t("about")}</div>
          <div className="headerItem" onClick={() => clickHandler("skillsPage")}>{t("skills")}</div>
          <div className="headerItem" onClick={() => clickHandler("projectPage")}>{t("projects")}</div>
          <div className="headerItem" onClick={() => clickHandler("contactPage")}>{t("contact")}</div>
        </div>
      </header>
      <div>
        <Language />
        {props.children}
        <MouseParticles g={1} color="random" cull="col,image-wrapper" />
        
      </div>
      <footer>
        <span>© {t("footer")}, 2021</span>
      </footer>
    </div>
  )

}

export default Layout