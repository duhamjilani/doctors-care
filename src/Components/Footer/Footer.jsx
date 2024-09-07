import React from 'react'
import './Footer.css'
import logo from '../../Pictures/logo.png'
import WhatsAppIcon from './WhatsAppIcon';

const Footer = () => {
  return (
    <div>
    <footer className='footer' id='contactus'>
    <div className='logo'>
          <img src={logo} alt='logo' className='logo1' />
        </div>
<h4> &copy;  2024 All Rights Reserved </h4>
<div className='contactus'>
  <h4>Contact Us </h4>
  <WhatsAppIcon/>
  
</div>

    </footer>
    </div>
  )
}

export default Footer
