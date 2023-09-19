import "./contact.css";
import Map from "../../assets/image 8.png";
import Line from '../../assets/line.png';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { HiPhone } from 'react-icons/hi';

const Contact = () => {
  return (
    <section id='#contacts'>
      <div className='con'>
        <div className='cont'>
          <div className='conta'>
            <img src={Line} alt="line" 
                width={100}
                height={10}
            />
            <h1 className="main_text">contacts</h1>
            <section>
              <div className="office">
              <MdLocationPin className="icon icon_office" />
              <p className="para_office">447 Broadway, 2nd floor suit #2281, New York</p>
              </div>
            </section>

            <div className="post">
            <section>
              <div className="email">
                <AiOutlineMail className="icon icon_email"/>
                <a
                className='texta'
                href='mailto:tunji@olasystems.com'
                rel='noopener noreferrer'
                target='_blank'
              >
                tunji@olasystems.com
              </a>
              </div>
            </section>

            <section>
              <div className="phone">
                <HiPhone className="icon icon_phone"/>
                <a
                className='textb'
                href='tel:+1 (347) 394-3326'
                rel='noopener noreferrer'
                target='_blank'
              >
                +1 (347) 394-3326
              </a>
              </div>
            </section>
            </div>
          </div>

          <img
            className='place'
            src={Map}
            alt='location'
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
