import React, { useState } from "react";
import "./navbar.css";
import logo8 from "../../Pictures/logo8.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language.toLowerCase());
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div>
      <nav className="Navbar">
        <div className="logo">
          <img src={logo8} alt="logo" className="logo3" />
        </div>
        <div className={`center ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/"> {i18n.t("HOME")}</Link>
            </li>
            <li>
              <a href="/#apply"> {i18n.t("APPLY")}</a>
            </li>
            <li>
              <a href="/#whyus"> {i18n.t("WHY US")}</a>
            </li>
            <li>
              <a href="/#reviews">{i18n.t("REVIEWS")}</a>
            </li>
            <li>
              <a href="/#contactus">{i18n.t("CONTACT US")}</a>
            </li>

            <li className="dropdown" onClick={toggleDropdown}>
              {i18n.t("LANGUAGE")} ▼
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li onClick={() => handleLanguageChange("en")}>English</li>
                  <li onClick={() => handleLanguageChange("ar")}>Arabic</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        {/* Only one menu icon, outside the list */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? "×" : "☰"}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
