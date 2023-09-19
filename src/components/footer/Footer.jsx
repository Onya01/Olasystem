import  './footer.css';
import Olasystem from '../../assets/olasystem.png';

const Footer = () => {
  return (
    <section id='footer'>
      <div className="match_footer">
        <img className='olas'
         src={Olasystem} alt="footer"
         height={200} 
        />
        
        <p>
            &copy;Olasystems Corp 2023.
        </p>
      </div>
    </section>
  );
}

export default Footer;
