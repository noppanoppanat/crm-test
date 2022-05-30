import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <Link to="/" className="BlockNav" >Home </Link>
            <Link to="./Aboutme" className="BlockNav" >About me</Link>
            <Link to="./Hooks" className="BlockNav" >Hooks</Link>
        </div>
    )
}

export default Navbar;