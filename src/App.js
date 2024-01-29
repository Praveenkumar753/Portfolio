// App.js

import React from 'react';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Work from './components/work';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css'
function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
