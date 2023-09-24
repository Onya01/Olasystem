import "./about.css";
import Line from "../../assets/line.png";
import { BsChevronDown } from 'react-icons/bs';

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='about_us'>

        <img className='about_line' src={Line} alt='line' width={100} height={7} />

        <h1>about Us</h1>

        <p>
          Olasystems engages in Business to Business (Corporation to
          Corporation) consultancy services with small and large scale enterprises In United States. We do this by providing high quality IT services in Software Engineering to meet the specific needs of clients, focusing on efficiency,innovation and scalability. We generate revenue through various streams including project-based contracts,monthly based retainers for ongoing support and maintenance. We conduct software development, design, testing and
          implementation,while also providing consulting,training and technical support to clients. We employ a skilled team of software engineers, designers, project managers, and quality assurance
          professionals.
          <br /><br />
          We utilize cutting-edge technologies and tools to deliver top notch solutions.Our employees work as independent contractors with our clients assigned to them.The minimum duration of each contract ranges from six months to one year and extends as long as our services are needed by our partners. Our engineers are sourced majorly in the USA, Europe and United Kingdom, this selection process is according to the needs or requirements of our clients. Our drive is so see business thrive through software engineering.

          <span>
        <BsChevronDown
          className="downArrow" 
        />
        </span>
        </p>

      </div>
    </section>
  );
};

export default About;
