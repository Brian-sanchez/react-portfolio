import { Suspense } from "react";

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/aboutMe';
import Experience from "./components/Experience/Experience";
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer.jsx';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Education/>
        <Certifications/>
        <Skills/> 
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    </Suspense>
  );
};

export default App;
