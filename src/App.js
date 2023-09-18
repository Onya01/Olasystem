import Body from './components/Body/body';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import About from './components/aboutUs/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
