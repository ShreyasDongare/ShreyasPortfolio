
import React from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portflio from './components/Portflio';
import SocialLinks from './components/SocialLinks';


function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About />
      <Portflio />
      <Experience/>
      <Contact />


      <SocialLinks/>
    </div>
  );
}

export default App;
