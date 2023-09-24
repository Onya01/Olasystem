import Address from './components/address/Address';
import Body from './components/Body/body';
// import Header from './components/Header/Header';
import Services from './components/services/Services';
import About from './components/aboutUs/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/Navbar';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom"

// import './App.css';
function App() {
  return (
    <>
    <Address />
    <Router>
      <NavBar />
      <Body />
      <About />
      <Services />
      <Contact />
      <div className="pages">
        {/* <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </div>
    </Router>
    <Footer />
</>
    // <div className="App">
    //   <Address />
    //   <NavBar />
    //   {/* <Header /> */}
    //   <Body />
    //   <About />
    //   <Services />
    //   <Contact />
    //   <Footer />
    // </div>
  );
}

export default App;
