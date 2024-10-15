
import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import './PayPalIntegration.css';
import Swal from "sweetalert2";

const PayPalIntegration = () => {
  const location = useLocation();
  
  
  const formData = location.state?.formData || {};  
  const formattedTotal = parseFloat(formData.TotalPrice || '0.00').toFixed(2);

  return (
    <div className='Main'>
      <div className="row">
        <div className="paypal-box">
          <PayPalButton
            amount={formattedTotal}
            onSuccess={(details, data) => {
             
                Swal.fire({
                  title: "Check your Email To Complete Transaction",
                 
                  icon: "warning",
                  customClass: {
                    popup: "custom-popup",
                    title: "custom-title",
                    icon: "custom-icon",
                  },
                  showConfirmButton: false, 
                  timer: 7000, 
                  timerProgressBar: true, 
                });
              
             

            
             
              const axiosRequest = axios.post("http://doctorcareapi-env.eba-xzm3dewh.us-east-1.elasticbeanstalk.com/Email/SendEmail", formData,{
                headers: {
                  "Content-Type": "multipart/form-data", 
                },
              });

              const timer = setTimeout(() => {
               
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
              }, 180000); 
              
              axiosRequest
                .then((response) => {
                  clearTimeout(timer); 
                  if (response.data.isVerified) {
                    Swal.fire({
                      title: "Verify Email",
                      text: "No Verification Email verification not completed in time!",
                      icon: "error",
                      customClass: {
                        popup: "custom-popup",
                        title: "custom-title",
                        icon: "custom-icon",
                        confirmButton: "custom-button btn",
                      },
                    });
                  } else {
                    Swal.fire({
                      title: "Email Verified",
                      text: "Verified! Email verified successfully!",
                      icon: "success",
                      customClass: {
                        popup: "custom-popup",
                        title: "custom-title",
                        icon: "custom-icon",
                        confirmButton: "custom-button btn",
                      },
                    });
                  }
                  setTimeout(() => {
                    Swal.fire({
                      title: "Transaction Successful",
                      text: "Thank You",
                      icon: "success",
                      customClass: {
                        popup: "custom-popup",
                        title: "custom-title",
                        icon: "custom-icon",
                        confirmButton: "custom-button btn",
                      },
                    });
                  }, 10000);
                })
                .catch((error) => {
                  clearTimeout(timer); 
                  Swal.fire({
                    title: "Verify Email Failed ",
                    text: "Something went wrong. contact with Admin via WhatsApp.",
                    icon: "error",
                    customClass: {
                      popup: "custom-popup",
                      title: "custom-title",
                      icon: "custom-icon",
                      confirmButton: "custom-button btn",
                    },
                  });
                });
              
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
