import "./contact.css";
import Map from "../../assets/image 8.png";
import Line from '../../assets/line.png';

const Contact = () => {
  return (
    <section id='#contacts'>
      <div className='con'>
        <div className='cont'>
          <div className='conta'>
            <img src={Line} alt="line" 
                width={75}
                height={5}
            />
            <h1>contacts</h1>
            <section>
              <p>447 Broad, 2nd floor suit #2281, New York</p>
            </section>
            <div className="post">
            <section>
              <a
                className='texta'
                href='mailto:tunji@olasystems.com'
                rel='noopener noreferrer'
                target='_blank'
              >
                tunji@olasystems.com
              </a>
            </section>

            <section>
              <a
                className='textb'
                href='tel:+1 (347) 394-3326'
                rel='noopener noreferrer'
                target='_blank'
              >
                +1 (347) 394-3326
              </a>
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
