import './body.css'
import image from '../../assets/image-ola.png';
import olasystem from '../../assets/olasystem.png'

const Nav = () => {
  return (
    <section id='Home'>
         <img className='center-logo'
         src={olasystem} alt='centerlogo'
        //  width='40%'
        //  height='30%' 
        />

      <div className="set">
        <img className='sets'   src={image} alt="people"
         width='100%'
         height='861px' 
        />

       
      </div>
      </section>  
  );
}

export default Nav;
