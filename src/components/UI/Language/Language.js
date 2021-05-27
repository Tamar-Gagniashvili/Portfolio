import React from 'react';
import './Language.css';
import {useTranslation} from 'react-i18next';
import {connect} from "react-redux";
import * as actions from '../../../store/actions/language';

const Language = (props) => {
    const { i18n } = useTranslation();

    function clickHandler(lang){
      i18n.changeLanguage(lang);
      props.changeLanguage(lang);
    }

    return (
      <div className="Language">
        <button onClick={() => clickHandler('en')}>ENG</button>
        <button onClick={() => clickHandler('ge')}>ქარ</button>
      </div>
    );
  };

  const mapDispatchToProps = dispatch => {
    return {
        changeLanguage: (lang) => dispatch(actions.changeLanguage(lang)),

    }
}
  
  export default connect(null, mapDispatchToProps)(Language);
  