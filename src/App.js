import React from 'react';
import SparkleSwitch from "./components/Switch.js"
import FullScreen from "./components/FullScreen.js"
import AboutMe from "./components/AboutMe.js"
import Projects from "./components/Projects.js"

import './App.css';

function App() {
  return (
    <>
      <SparkleSwitch/>
      <FullScreen/>
      <div id="down">
        <AboutMe/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
    </>
  );
}
export default App;
