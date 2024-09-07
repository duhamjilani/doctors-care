import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reviews.css';
import WriteFeedback from './WriteFeedback';

const Reviews = () => {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   axios.get("http://localhost:5004/feedbacks")
  //     .then((response) => {
  //       setItems(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //     });
  // }, []);
  const fetchFeedbacks = () => {
    axios.get("http://localhost:5004/feedbacks")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
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
      <h1>Our Customer Feedback</h1>
      <div className='Big-box'>
      
        <h4>Don’t take our word for it. Trust our customers</h4>
       
        
        <div className='Boxes'>
          {items.slice(currentIndex, currentIndex + 3).map((feedback, index) => (
            <div className='BOX' key={feedback.id}>
              <h3>{feedback.firstName} {feedback.lastName}</h3>
              <p>{feedback.feedback}</p>
            </div>
          ))}
        </div>
        <div className='btns'>
        <button className='custom-button btn' onClick={handlePrev}>Previous</button>
        <button className='custom-button btn' onClick={handleNext}>Next</button></div>
      </div>
      {/* <WriteFeedback refreshReviews={fetchFeedbacks} /> */}
      

    </div>
  );
};

export default Reviews;
