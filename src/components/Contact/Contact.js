import React, { useState } from 'react';
import './Contact.css';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';



/**
* @author
* @function Contact
**/

const Contact = (props) => {
  const { t } = useTranslation();

  
  const [inputData, setInputData] = useState({
    from_email: '',
    message: '',
    from_name: ''
  })

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setInputData({ ...inputData, [name]: value });

  }


  const checkValidity = (value, required=false, isEmail=false) => {
    let isValid = true; 

    if (required) {
        isValid = value.trim() !== '' && isValid;
    }


    if (isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }


    return isValid;
}

  function sendEmail(e) {
    e.preventDefault();


    if(!checkValidity(inputData.from_email, true, true) || !checkValidity(inputData.from_name,true, false) || !checkValidity(inputData.message, true)){
      alert("Invalid Message...");
      return;
    }

    emailjs.sendForm('service_rp5vhh2', 'template_ibavniq', e.target, 'user_PMW4Y2A7IXvkiWimFNKVy')
      .then(() => {
        alert("Message Sent!")
        setInputData({
          from_email:'',
          from_name:'',
          message:''
        });
      })
      .catch(error => {
        console.log(error)
        alert("Couldn't Send the Message!")
      });
  }



  return (
    <div className="contactPage" id="contactPage">
      <div className="contactWrapper">
        <div className="contactText">
          <h1>{t("contactMe")}...</h1><br />
        </div>
        <form className="inputBox" onSubmit={sendEmail}>
          <input type='text' placeholder={t("contactName")} value={inputData.name} name="from_name" onChange={changeHandler} /><br />
          <input type='email' placeholder={t("contactEmail")} value={inputData.email} name="from_email" onChange={changeHandler} /><br />
          <textarea type='text' placeholder={t("placeholder")} value={inputData.message} name="message" onChange={changeHandler} /><br />
          <button type="submit">{t("send")}</button>
        </form>
        <div className="cupWrapper">
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