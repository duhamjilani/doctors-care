import React, { useState } from 'react';
import './navbar.css';
import logo from '../../Pictures/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language) => {
    console.log(`Language selected: ${language}`);
    // Implement language change logic here
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div>
      <nav className='Navbar'>
        <div className='logo'>
          <img src={logo} alt='logo' className='logo1' />
        </div>
        <div className={`center ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li> <Link to='/' > HOME</Link></li>
            <li> <a href='/#apply'> APPLY</a></li>
            <li> <a  href='/#whyus'> WHY US</a></li>
            <li> <a href='/#reviews'>REVIEWS</a></li>
            <li> <a href='/#contactus'>CONTACT US</a></li>
            <li className='dropdown' onClick={toggleDropdown}>
              LANGUAGE ▼
              {isDropdownOpen && (
                <ul className='dropdown-menu'>
                  <li onClick={() => handleLanguageChange('English')}>English</li>
                  <li onClick={() => handleLanguageChange('Arabic')}>Arabic</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className='menu-icon' onClick={toggleMenu}>
          ☰
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
