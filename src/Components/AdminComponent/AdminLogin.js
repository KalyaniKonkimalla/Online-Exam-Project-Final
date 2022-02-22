import React, { Component } from 'react';
import { useState } from "react";
import { render } from "react-dom";
import { Redirect } from 'react-router-dom';
import { Route, BrowserRouter, Routes, NavLink, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./login.css";
import {useHistory} from 'react-router-dom';
import header2 from "./images/header2.png";
import Welcome1 from './Welcome1';

const defaultData = {
    adminid: "",
    aemail: "",
    err: ""
};

const Login = () => {
     let history = useHistory();
    const [userData, setUserData] = useState(defaultData);
    const [userList, setUserList] = useState([]);

    // let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserList([
            ...userList,
            userData,]);
        setUserData(defaultData);
        if (userData.adminid === "abc" && userData.aemail === "abc@gmail.com") {


            // localStorage.setItem("adminid","abc");
            //localStorage.setItem("aemail","abc@gmail.com");
            // await submitForm(e.target);
            //navigate("./Welcome1");
            // <Link to="/Welcome1" aria-current="page" className="btn btn-primary button2">Login
            // </Link>

            // <NavLink to="/Welcome1">Welcome1</NavLink>
            //<a href='./Welcome1.js'> Login</a>
            console.log("successfull")
            history.push('/Welcome1');

            //    return <Redirect to="/Welcome1" />
            //this.props.history.push('/Welcome1');

        } else {
            render(<h1>Invalid! </h1>, document.getElementById("root"));
        }
    };

    const handleUser = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({
            ...userData,
            [name]: value,
        });
    };


    {
        return (
            <>
                {/* <BrowserRouter> */}
                    {/* {userList.err !== '' ? userList.err : ''} */}
                    <div className="container">
                        <Welcome1/>
                        {/* <h1 className="text-center text-success">Online Exam Portal</h1> */}
                        <div>
                            {/* <div className='col-6'>
                                <NavLink className="nav-link" aria-current="page" to="/Welcome1">Go To Home</NavLink>
                            </div> */}
                        </div>
                        <hr></hr>
                        <h2 className='mt-2'>Login Here!</h2>
                        <form className method="post" style={{ border: '1px solid rgba(0, 0, 0)' }}>
                            <div className="mb-3 mx-3">
                                <label htmlFor="exampleInputId1" className="form-label">Admin Id</label>
                                <input type="text" name="adminid" className="form-control"
                                    id="exampleInputId1"
                                    value={userData.adminid}
                                    onChange={handleUser}
                                />
                            </div>
                            <div className="mb-3 mx-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Admin Email</label>
                                <input type="email" name="aemail" className="form-control"
                                    id="exampleInputEmail1"
                                    value={userData.aemail}
                                    onChange={handleUser}
                                />
                            </div>
                            <div className="mb-3 mx-3">
                                <button type="submit" className="btn btn-success" onClick={handleSubmit}>
                                    Submit
                                </button>
                            </div>
                        </form>
                        <div className='mt-2'>
                            <img className='banner' src={header2} alt="logo" /> <br />
                        </div>
                    </div>
{/* 
                    <Routes>
                        <Route path="/Welcome1" element={<Welcome1 />} />
                    </Routes>
                </BrowserRouter> */}
            </>
        );
    }
};
export default Login;