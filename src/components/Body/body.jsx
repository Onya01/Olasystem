import './body.css'
// import image from '../../assets/image-ola.png';
import olasystem from '../../assets/olasystem.png'

const Nav = () => {
  return (
    <section className='home' id='Home'>
         <img className='center-logo'
         src={olasystem} alt='centerlogo' 
        />

      <div className="set">
        {/* <img className='sets'   src={image} alt="people"
         width='100%'
         height='450' 
        /> */}

       
      </div>
      </section>  
  );
}

export default Nav;
