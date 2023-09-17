import './header.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';

const Header = () => {
    const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
        <div className="set">
      <div className="heder">
        <div className="head">
        <p>447 Braodway, 2nd floor suit #2281, New York</p>
        <p>tunji@olasystems.com</p>
        <p>+1(347)394-3326</p>
        </div>
      </div>

      <navt>
        <div className="nav1">
      <div className="logo">
        <img className='logo' src={logo} alt="logo" 
        width={40}/>
      </div>

      <div className="nav2">
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav=== '#about' ? 'active' : ''}>About Us</a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>Services</a>
        <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}>Contacts</a>
      </div>
      </div>
    </navt>
    </div>
    </nav>
  );
}

export default Header;
