import React from "react";
import "./WriteFeedback.css";
import { useState } from "react";
import axios from 'axios'
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next';




const WriteFeedback = ({refreshReviews}) => {
  const [fullName, setfullName] = useState("");
 
  const [feedback, setfeedback] = useState("");
  const{t}=useTranslation();
  
 
 
  let FormSubmit=(e)=>{
    e.preventDefault();
    if (!fullName || !feedback) {
     
      Swal.fire({
        title: "Incomplete Form",
        text: "Please fill in all required fields.",
        icon: "error",
      });
      return; 
    }



    axios.post("http://localhost:5004/feedbacks", {
     
      fullName,
      
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
   
   
  }
  return (
    <div>
      <div className="BIG-CONTAINER">
        <h1>{t('Tell Us What You Think')}</h1>
        <div className="Big-box">
          <div>
            <form>
              <div className="field">
                <label htmlFor="FULL NAME"> {t('FULL NAME')}</label>
                <input
                  type="text"
                  placeholder="FULL NAME"
                  name="FULL NAME"
                  onChange={(e) => {
                    setfullName(e.target.value);
                    
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
