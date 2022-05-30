import React from 'react';
import './App.css';
import Home from './Home'
import Hooks from './Hooks'
import Aboutme from './Aboutme'
import Navbar from './Navbar';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/hooks" element={<Hooks />} />
      </Routes>
    </Router>
  );
}

export default App;
