import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reviews.css';

import { useTranslation } from 'react-i18next';

const Reviews = () => {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {t}=useTranslation();

 
  const fetchFeedbacks = () => {
    axios.get("http://doctorcareapi-env.eba-xzm3dewh.us-east-1.elasticbeanstalk.com/Feedback/GetAllFeedbacks")
      .then((response) => {
        setItems(response.data.results);
        
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        alert("something went wrong");
      });
  };

  useEffect(() => {
    fetchFeedbacks();  
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 3) % items.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 3 + items.length) % items.length
    );
  };

  return (
    <div className='Big-container' id='reviews'>
      <h1>{t("Our Customer Feedback")}</h1>
      <div className='Big-box'>
      
        <h4>{t("review_sentence")}</h4>
       
        
        <div className='Boxes'>
          {items?.slice(currentIndex, currentIndex + 3).map((items, index) => (
            <div className='BOX' key={items.id}>
              <h3>{items.fullname} </h3>
              <p>{items.feedbackdesc}</p>
            </div>
          ))}
        </div>
        <div className='btns'>
        <button className='custom-button btn' onClick={handlePrev}>{t('Previous')}</button>
        <button className='custom-button btn' onClick={handleNext}>{t('Next')}</button></div>
      </div>
     
      

    </div>
  );
};

export default Reviews;
