import './nav.css'
import logo from '../../assets/logo.png';

const Nav = () => {
  return (
    <nav>
      <div className="nav1">
        <img src={logo} alt="logo" 
        width={40}/>
      </div>

      <div className="nav2">
        <a href="#">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contacts">Contacts</a>
      </div>
    </nav>
  );
}

export default Nav;
