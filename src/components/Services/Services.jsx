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
                <div className="staff">
                 <h1>IT Staffing</h1>
                </div>

                <h1>API Integration</h1>
                <h1>Banking & Finance</h1>
                <h1>IT Consultations</h1>
                <h1>Micro Service Development</h1>
                <img src={olasystem} alt="Olasystem" />
                <h1>Web Development</h1>
                <h1>Mobile Development</h1>
                <h1>Databse Administrator</h1>
                <h1>and many more</h1>
                
            </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
