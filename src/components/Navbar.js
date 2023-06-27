import React from 'react'
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    let location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <img className="navbar-brand"src='https://pps.whatsapp.net/v/t61.24694-24/201103813_412420793970338_7825788054462792978_n.jpg?ccb=11-4&oh=01_AdTyE74rZbJ8hYcOoKf9LQIwHlF_FVMmmrJli4xCqcJyzw&oe=644107D9' to="/" alt=""/>
                <i class="fa-sharp fa-solid fa-book"></i>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">PLAN YOUR DAY</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">GET STUDY MATERIAL</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/emailsend"? "active": ""}`} to="/emailsend">ASK YOUR DOUBT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/addpdf"? "active": ""}`} to="/addpdf">STUDY WITH YOUR FILE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/speech"? "active": ""}`} to="/speech">SPEAK </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/calculator"? "active": ""}`} to="/calculator">YOUR CALCI </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/clock"? "active": ""}`} to="/clock">TIME</Link>
                        </li>

                    </ul>
                    <form className="d-flex"> 
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar