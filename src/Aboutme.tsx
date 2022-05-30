import React from "react";
import { Routes, useNavigate } from "react-router-dom";
import './App.css'
import rose from './images/rose.gif'

function Aboutme() {
    let navigate = useNavigate();
    return (
        <div className="App" >
            <a className="App-header">
                <h1>This is about Rose's page</h1>
                <img src={rose} width="500px" ></img>
                <button className="button" onClick={() => {navigate("/")}}> Back to Home page</button>
            </a>
        </div>
    );
}

export default Aboutme;