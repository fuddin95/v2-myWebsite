import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Dropdown from "./Dropdown";

// import Dropdown from "./Dropdown.jsx"

function Navbar2() {
  // hooks
  const [clickState, setClickState] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // Arrow Functions
  const handleClick = () => setClickState(!clickState);
  const closeMobileMenu = () => setClickState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () =>
    setDropdown((window.innerWidth < 960) ? false : false);

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Siraj & Sons
        </Link>
        {/* This div produces that times and cross bar  */}
        <div className="menue-icon" onClick={handleClick}>
          {/* these classes are coming from font awesome library */}
          <i className={clickState ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={clickState ? "nav-menu active" : "nav-menu"}>
          {/* Home */}
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          {/* services */}
          <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>

            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <i className="fas fa-caret-down" />
            </Link>
            {/* Dropdown */}
            {dropdown && <Dropdown />}
          </li>
          {/* Contact US */}
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          {/* Sign up */}
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </div>
  );
}

export default Navbar2;
