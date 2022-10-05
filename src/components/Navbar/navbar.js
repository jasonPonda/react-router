/* // Navbar.js
import { useState } from "react";
import "../../styles/navbar.css";


export default function Navbar() {
 
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        SinCo-Consulting
      </a>
      <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
        >
        {/* icon from heroicons.com 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">Nos services</a>
            <ul>
                <li><a href="./informatique.js">Secteur Informatique</a></li>
                <li><a href="./construction.js">Secteur Construction</a></li>
            </ul>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

    
  );
}
*/
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";
/* import { Button } from './Button'; */
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className="navbar">
      <NavLink
        activeclass="active"
        to="/"
        spy="true"
        smooth="true"
        offset={-100}
        duration={500}
        className="navbar-logo"
        onClick={closeMobileMenu}
      >
        SinCo-Consulting
      </NavLink>

      <FontAwesomeIcon icon={faWindowClose} className="fa-times" />
      <FontAwesomeIcon
        icon={faBars}
        className="fa-bars"
        onClick={handleClick}
      />
      <div className="menu-icon" onClick={handleClick}>
        <i
          className={
            click ? (
              <FontAwesomeIcon icon={faWindowClose} className="fa-times" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="fa-bars" />
            )
          }
        />
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            activeclass="active"
            to="/"
            spy="true"
            smooth="true"
            offset={-100}
            duration={500}
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
        </li>
        <li
          className="nav-item dropdown"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <NavLink
            activeclass="active"
            to="/services"
            spy="true"
            smooth="true"
            offset={-100}
            duration={500}
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Services
          </NavLink>
          {dropdown && <Dropdown />}
        </li>

        <li className="nav-item">
          <NavLink
            activeclass="active"
            to="/contact"
            spy="true"
            smooth="true"
            offset={-100}
            duration={500}
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      {/* <Button /> */}
    </nav>
  );
}
