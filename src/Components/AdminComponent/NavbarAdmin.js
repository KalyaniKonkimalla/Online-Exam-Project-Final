import { useEffect } from 'react';
import { Route, BrowserRouter, Link, NavLink, Routes } from 'react-router-dom';

import admin123 from "./images/admin123.jpg";
import header2 from "./images/header2.png";


function NavbarAdmin() {
  useEffect(() => {
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="#">
        <img src={admin123} alt="logo" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

            {/* <li className="nav-item active">
            <NavLink exact activeClassName="active-page" className="nav-link" to="/">Back Home </NavLink>
          </li> */}
            <li className="nav-item">
              <NavLink exact activeClassName="active-page" className="nav-link" to="/AdminLogin">Admin Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="active-page" className="nav-link" to="/Test">Create Text</NavLink>
            </li>

            <li className="nav-item">
              <NavLink exact activeClassName="active-page" className="nav-link" to="/Question12">Create Quest</NavLink>
            </li>

            <li className="nav-item">
              <NavLink exact activeClassName="active-page" className="nav-link" to="/Questions">Manage Quest</NavLink>
            </li>


          </ul>
        </div>
      </nav>
    </>
  )
}
export default NavbarAdmin;