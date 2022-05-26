import React, { useState } from "react";
import './navbar.css';

const Navbar = () => {

  const [ active, setActive ] = useState('nav__menu');
  const [ toggleIcon, setToggleIcon ] = useState('nav__toggler');
  const navToggle = () => {
    active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');
  
    toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler');
  }

  return (
    <nav className="nav">
      <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="nav__logo">
        navLut
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="www.youtube.com" className="nav__links">Home</a>
        </li>
        <li className="nav__item">
          <a href="www.youtube.com" className="nav__links">About</a>
        </li>
        <li className="nav__item">
          <a href="www.youtube.com" className="nav__links">Skills</a>
        </li>
        <li className="nav__item">
          <a href="www.youtube.com" className="nav__links">Portofolio</a>
        </li>
        <li className="nav__item">
          <a href="www.youtube.com" className="nav__links">Contact</a>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
