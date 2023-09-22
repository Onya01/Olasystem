import './address.css';
import { AiOutlineMail } from "react-icons/ai";
import { HiPhone } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";

const Address = () => {
  return (
    <div className='heder'>
    <div className='head'>
      <div className='office'>
        <MdLocationPin />
        <p>447 Broadway, 2nd floor suit #2281, New York</p>
      </div>
      <div className='emails'>
        <AiOutlineMail />
        <a
          className='text1'
          href='mailto:tunji@olasystems.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          tunji@olasystems.com
        </a>
      </div>
      <div className='phones'>
        <HiPhone />
        <a
          className='text1'
          href='tel:+1 (347) 394-3326'
          rel='noopener noreferrer'
          target='_blank'
        >
          +1 (347) 394-3326
        </a>
      </div>
    </div>
  </div> 
  );
}

export default Address;
