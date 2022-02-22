import React, {useReducer, createContext} from 'react'
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./App.css";
import Navbar from './Components/UserComponent/Navbar';
import Home from './Components/UserComponent/Home';
import Login from './Components/UserComponent/Login';
import Signup from './Components/UserComponent/Signup';
import TestEnroll from "./Components/TestEnrollComponent/enrolltable";
import ReadOnlyRow from './Components/TestEnrollComponent/readonlyrow';
import Start from './Components/TakeTestComponent/Start';
import Exam from './Components/TakeTestComponent/Exam';
import AdminLogin from "./Components/AdminComponent/AdminLogin";
import Test from "./Components/AdminComponent/Test"
import Question12 from './Components/AdminComponent/Question12';
import Questions from './Components/AdminComponent/Questions';
import Welcome1 from './Components/AdminComponent/Welcome1';
import { BrowserRouter } from "react-router-dom";
  

const App = () => {
  
  return (
    <>
     <BrowserRouter>
     {/* <Navbar /> */}
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>
      
      <Route path="/TestEnroll">
        <TestEnroll/>
      </Route>


      <Route path="/Start">
        <Exam/>
      </Route>
        
      <Route path="/Welcome1">
        <Welcome1/>
      </Route>
      <Route path="/AdminLogin">
        <AdminLogin />
      </Route>

      <Route path="/Test">
        <Test />
      </Route>
      
      <Route path="/Question12">
        <Question12/>
      </Route>


      <Route path="/Questions">
        <Questions/>
      </Route>
    </BrowserRouter>
    </> 
  )
}



export default App;
