import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  return (
    <div>
      <a
        href="https://wa.me/+962799547115" // Replace with your WhatsApp number
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Prevents security vulnerabilities
      >
        <FaWhatsapp size={30} color="#133240" />
      </a>
    </div>
  );
};

export default WhatsAppIcon;