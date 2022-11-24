
import React from 'react'
import About from './components/About';
import Experiance from './components/Experiance';
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
      <Portflio/>
      <Experiance/>


      <SocialLinks/>
    </div>
  );
}

export default App;
