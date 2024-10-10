
import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import './PayPalIntegration.css';
import Swal from "sweetalert2";

const PayPalIntegration = () => {
  const location = useLocation();
  
  
  const formData = location.state?.formData || {};  
  const formattedTotal = parseFloat(formData.total || '0.00').toFixed(2);

  return (
    <div className='Main'>
      <div className="row">
        <div className="paypal-box">
          <PayPalButton
            amount={formattedTotal}
            onSuccess={(details, data) => {
              Swal.fire({
                title: "Transaction Successful",
                text: "Thank You ",
                icon: "success",
                customClass: {
                  popup: "custom-popup",
                  title: "custom-title",
                  icon: "custom-icon",
                  confirmButton: "custom-button btn",
                },
              });

            
              axios.post("http://localhost:5004/application", formData)
            }}
            onError={(err) => {
              Swal.fire({
                title: "Transaction Failed",
                text: "Something went wrong. Please try again.",
                icon: "error",
                customClass: {
                  popup: "custom-popup",
                  title: "custom-title",
                  icon: "custom-icon",
                  confirmButton: "custom-button btn",
                },
              });
              
            }}
            options={{
              clientId: 'ARSPdZ50w0zsSLwyrXkKFi4W5HPJbn3EzWzrqZ7FhrIDucoHrH8VSylNNq6gxJTxrjgukGfDC-TvpPCC&currency=USD'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PayPalIntegration;
