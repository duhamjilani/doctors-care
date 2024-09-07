import React from 'react';
import './Apply.css';
import { Link } from 'react-router-dom';
import file from '../../Pictures/file.jpg';

const Apply = () => {
  return (
    <div className='big-container1' id='apply'>
      <h1>CHOOSE YOUR APPLICATION</h1>
      <div className='boxes'>
 
        <div
          className="box1"
          style={{
            backgroundImage: `url(${file})`,
            height: "50vh", 
            width: "40vw",   
            backgroundSize: "cover",    
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", 
          }}
        >
          <div className='layer1'>
            <div className="button-container">
              <Link to='/apply/Dataflow' className="custom-button">
                DATA FLOW
              </Link>
            </div>
          </div>
        </div>

        <div
          className="box1"
          style={{
            backgroundImage: `url(${file})`,
            height: "50vh", 
            width: "40vw",   
            backgroundSize: "cover",    
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", 
          }}
        >
          <div className='layer1'>
            <div className="button-container">
              <Link to='/apply/Classification' className="custom-button">
                DATA FLOW & CLASSIFICATION
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apply;
