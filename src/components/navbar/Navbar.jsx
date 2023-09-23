import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [activeNav, setActiveNav] = useState("#Home");
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <img className='logo' src={logo} alt='logo' width={40} />
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
            <a
                href='#Home'
                onClick={() => setActiveNav("#Home")}
                className="nav-links"
              >
                Home
              </a>
              <a
                href='#about'
                onClick={() => setActiveNav("#about")}
                className="nav-links"
              >
                About Us
              </a>
              <a
                href='#services'
                onClick={() => setActiveNav("#services")}
                className="nav-links"
              >
                Services
              </a>
              <a
                href='#contacts'
                onClick={() => setActiveNav("#contacts")}
                className="nav-links"
              >
                Contacts
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
