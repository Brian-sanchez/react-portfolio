import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/aboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer.jsx';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Education/>
      <Certifications/>
      <Skills/> 
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
