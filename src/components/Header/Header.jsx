import './header.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';

const Header = () => {
    const [activeNav, setActiveNav] = useState('#Home');

  return (
    <nav>
        <div className="set">
      <div className="heder">
        <div className="head">
        <p>447 Broad, 2nd floor suit #2281, New York</p>
        <a className="text1" href="mailto:tunji@olasystems.com" rel="noopener noreferrer" target="_blank">
              tunji@olasystems.com
            </a>
            <a className="text1" href="tel:+1 (347) 394-3326" rel="noopener noreferrer" target="_blank">
              +1 (347) 394-3326
            </a>
        </div>
      </div>

      <nav>
        <div className="nav1">
      <div className="logo">
        <img className='logo' src={logo} alt="logo" 
        width={40}/>
      </div>

      <div className="nav2">
        <a href="#Home" onClick={() => setActiveNav('#Home')} className={activeNav === '#Home' ? 'active' : ''}>Home</a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About Us</a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>Services</a>
        <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}>Contacts</a>
      </div>
      </div>
    </nav>
    </div>
    </nav>
  );
}

export default Header;
