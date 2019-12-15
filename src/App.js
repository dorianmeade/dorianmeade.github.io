import React, { useState } from 'react';
import logo from './logo.svg';
import pixel from './sparkly.gif';
import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {

  const [name, setName] = useState('Dorian Meade');

  return (
    <div className="App">
      <header className="App-header">
        Hello, my name is
        <h2>
        <img src={pixel} className="App-logo" alt="pixel" /> 
<HelloWorld name={name}></HelloWorld>
<img src={pixel} className="App-logo" alt="pixel" /> 

        </h2>
        <a
          className="App-link"
          href="https://goggle.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        
        </a>
        <button onClick={() => setName(name === 'Dorian Meade' ? 'DORIAN' : 'Dorian Meade')}>Who?</button>
      </header>
    </div>
  );
}

export default App;
