import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useLocation } from 'react-router-dom';
import './PayPalIntegration.css';
import Swal from "sweetalert2";

const PayPalIntegration = () => {
  const location = useLocation();
  const { total } = location.state || { total: '0.00' }; // Default to 0.00 if no total is passed
  const formattedTotal = parseFloat(total).toFixed(2);

  return (
    <div className='Main'>
      <div className="paypal-container">
        <h2 className="paypal-title">Complete Your Payment</h2>
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
            //  alert("Transaction completed by " + details.payer.name.given_name);
             
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
              console.error("PayPal transaction error:", err);
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
