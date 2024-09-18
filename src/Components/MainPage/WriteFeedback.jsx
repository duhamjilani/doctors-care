import React from "react";
import "./WriteFeedback.css";
import { useState, useEffect } from "react";
import axios from 'axios'
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next';




const WriteFeedback = ({refreshReviews}) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [feedback, setfeedback] = useState("");
  const{t}=useTranslation();
  
 
 
  let FormSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:5004/feedbacks", {
     
      firstName,
      lastName,
      feedback,
    });
    Swal.fire({
      title: "Successfully Submitted",
      text: "Thank You ",
      icon: "success",
      customClass: {
        popup: 'custom-popup',
        title: 'custom-title',
        icon: 'custom-icon',
        confirmButton: 'custom-button btn',
      }
    });
    // refreshReviews();
   
  }
  return (
    <div>
      <div className="BIG-CONTAINER">
        <h1>{t('Tell Us What You Think')}</h1>
        <div className="Big-box">
          <div>
            <form>
              <div className="field">
                <label htmlFor="firstname"> {t('firstName')}</label>
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  name="firstname"
                  onChange={(e) => {
                    setfirstName(e.target.value);
                    
                  }}
                  required
                />
              </div>

              <div className="field">
                {" "}
                <label htmlFor="lastname"> {t('lastName')}</label>
                <input
                  type="text"
                  placeholder="LAST NAME"
                  name="lastname"
                  onChange={(e) => {
                    setlastName(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="opinion"> {t('Tell Us What You Think')}</label>
                <textarea
                  placeholder="TELL US WHAT YOU THINK"
                  name="opinion"
                  onChange={(e) => {
                    setfeedback(e.target.value);
                  }}
                  required
                />
              </div>
              <button className='custom-button btn' onClick={FormSubmit} >{t('submit')}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteFeedback;
