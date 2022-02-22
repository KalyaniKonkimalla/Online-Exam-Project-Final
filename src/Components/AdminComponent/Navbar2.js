import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import logo3 from "../images/logo3.png";
import Exam from '../TakeTestComponent/Exam';


const Navbar2 = () => {



    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="#">
                    <img src={logo3} alt="logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">

                        {/* <li className="nav-item active">
                            <NavLink exact activeClassName="active-page" className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active-page" className="nav-link" to="/login">Login</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink exact activeClassName="active-page" className="nav-link" to="/signup">Register</NavLink>
                        </li> */}

                        <li className="nav-item">
                            <NavLink exact activeClassName="active-page" className="nav-link" to="/TestEnroll">TestEnroll</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink exact activeClassName="active-page" className="nav-link" to="/Start">Take Test</NavLink>
                        </li>

                        {/* <li className="dropdown-header">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/Welcome1"> Welcome1</NavLink>
                   </li> */}

                        {/* <div class="dropdown">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                Admin
                            </button>
                            <ul class="dropdown-menu">
                                <li><NavLink class="dropdown-item" to="/AdminLogin">Admin Login</NavLink></li>
                                <li><a class="dropdown-item" href="/Test">create Test</a></li>
                                <li><a class="dropdown-item" href="/Question12">Create Quest</a></li>
                                <li><a class="dropdown-item" href="/Questions">Manage Quest</a></li>
                            </ul>
                        </div> */}


                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar2;
