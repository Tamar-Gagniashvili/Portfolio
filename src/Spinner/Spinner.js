import React from 'react';
import rooster from '../assets/rooster.gif';
import './Spinner.css'

/**
* @author
* @function Spinner
**/

const Spinner = (props) => {
  return(
    <div className="spinner">
        <div className="spinnerWrapper">
            <img src={rooster} alt=""/>
            <h1>Loading...</h1>
        </div>        
    </div>
   )

 }

export default Spinner