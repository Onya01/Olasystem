import './services.css';
import olasystem from '../../assets/olasystem.png'

const Services = () => {
  return (
    <section id='#services'>
      <div className="service">
        <div className="serv">
            <h1>services</h1>
        </div>

        <div className="grid">
            <div className="gird1">
                <h1>IT Staffing</h1>
                <h1>IT Staffing</h1>
                <h1>IT Staffing</h1>
                <h1>IT Staffing</h1>
                <h1>IT Staffing</h1>
                <h1>IT Staffing</h1>
                <h1>IT Staffing</h1>
                <h1>IT Staffing</h1>
                <h1>IT Staffing</h1>
                <img src={olasystem} alt="Olasystem" />
            </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
