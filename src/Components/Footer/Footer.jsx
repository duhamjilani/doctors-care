import React from "react";
import "./Footer.css";
import logo1 from "../../Pictures/logo1.png";
import WhatsAppIcon from "./WhatsAppIcon";

const Footer = () => {
  return (
    <div>
      <footer className="footer" id="contactus">
        <div className="logo">
          <img src={logo1} alt="logo" className="logo3" />
        </div>
        <div className="footer_center"> 
        <h4> &copy; 2024 All Rights Reserved Doctors Care </h4>
        </div>
       
        <div className="contactus">
          <h4>Contact Us </h4>
          <WhatsAppIcon />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
