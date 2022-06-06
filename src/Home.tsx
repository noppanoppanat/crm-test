import React from 'react';
import logo from './logo.svg';
import us from './images/IMG_3518.jpeg'
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
``
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <h1>Odd-e x NewWorld</h1>
          <img src={us} className="img-home" width="650" ></img>
          <p>
            Thank you so muchh!
          </p>
        </div>
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
