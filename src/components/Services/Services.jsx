import "./services.css";
import olasystem from "../../assets/olasystem.png";
import Line from '../../assets/line.png'

const Services = () => {
  return (
    <section className='services' id='#services'>
      <div className='service'>
      <img className="lint" src={Line} alt="line" 
        width={75}
        height={5}
      />
        <div className='serv'>
          <h1>services</h1>
        </div>

        <div className='grid'>
          <div className='grid1'>
            <section className='serve'>
              <div className='staff'>
                <h1>IT Staffing</h1>
              </div>
            </section>

            <section className='serve'>
              <div className='api'>
                <h1>API Integration</h1>
              </div>
            </section>

            <section className='serve'>
              <div className='banking'>
                <h1>Banking & Finance</h1>
              </div>
            </section>

            <section className='serve'>
              <div className='cons'>
                <h1>IT Consultations</h1>
              </div>
            </section>

            <section className='serve'>
              <div className='micro'>
                <h1>Micro Service Development</h1>
              </div>
            </section>
          </div>

          <div className='grid2'>
            <section className='serve2'>
              <div className='mg'>
                <img className="set" src={olasystem} alt='Olasystem' width={220} height={130} />
              </div>
            </section>

            <section className='serve'>
              <div className='web'>
                <h1>Web Development</h1>
              </div>
            </section>

            <section className='serve'>
              <div className='mobile'>
                <h1>Mobile Development</h1>
              </div>
            </section>

            <section className='serve'>
              <div className='datab'>
                <h1>Database Administrator</h1>
              </div>
            </section>

            <section className='serve1'>
              <div className='more'>
                <h1>and many more</h1>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;