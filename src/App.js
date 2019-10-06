import React from 'react';
import logo from './sdelano_v_red_opt1.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="mailto:hello@devlab.red"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello@devlab.red
        </a>
      </header>
    </div>
  );
}

export default App;
