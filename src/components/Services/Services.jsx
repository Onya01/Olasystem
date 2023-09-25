import "./services.css";
import olasystem from "../../assets/olasystem.png";
import Line from "../../assets/line.png";
import Arrow from "../arrowDown/Arrow";

const Services = () => {
  return (
    <section className='services' id='services'>
      <div className='service'>
        <img className='lint' src={Line} alt='line' width={100} height={7} />
        <div className='serv'>
          <h1 className='text_services'>services</h1>
        </div>

        <div className='grid'>
          <section className="staff">
            <div>
             <p>IT Staffing</p>
            </div>
          </section>

          <section className="api">
            <p>API Integration</p>
          </section>

          <section className="banking">
            <p>Banking & Finance</p>
          </section>

          <section className="IT">
            <p>IT Consultations</p>
          </section>

          <section className="micro">
            <p>Micro Service Development</p>
          </section>

          <section>
            <img
              className='set'
              src={olasystem}
              alt='Olasystem'
              width={150}
              height={150}
            />
          </section>

          <section className="web">
            <p>Web Development</p>
          </section>

          <section className="mobile">
            <p>Mobile Development</p>
          </section>

          <section className="data">
            <p>Database Administrator</p>
          </section>

          <section className="more">
            <p>and many more</p>
          </section>

          {/* <div className='grid1'> */}
            {/* <section className='serve'>
              <div className='staff'>
                <h1>IT Staffing</h1>
              </div>
            </section> */}

            {/* <section className='serve'>
              <div className='api'>
                <h1>API Integration</h1>
              </div>
            </section> */}

            {/* <section className='serve'>
              <div className='banking'>
                <h1>Banking & Finance</h1>
              </div>
            </section> */}

            {/* <section className='serve'>
              <div className='cons'>
                <h1>IT Consultations</h1>
              </div>
            </section> */}

            {/* <section className='serve'>
              <div className='micro'>
                <h1>Micro Service Development</h1>
              </div>
            </section> */}
          </div>

          {/* <div className='grid2'> */}
            {/* <section className='serve2'>
              <div className='mg'> */}
                {/* <img
                  className='set'
                  src={olasystem}
                  alt='Olasystem'
                  width={220}
                  height={130}
                /> */}
              {/* </div>
            </section> */}
          </div>
      <Arrow />
    </section>
  );
};

export default Services;
