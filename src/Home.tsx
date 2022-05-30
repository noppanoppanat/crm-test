import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>สวัสดีท่านผู้เจริญ ซึ่งมากไปด้วยปัญญา</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The purpose of website is learning with react
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
