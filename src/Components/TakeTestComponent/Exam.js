import React, { Fragment } from "react";
import './exam.css';
import axios from "axios";
import {useState} from "react";
import { useParams } from "react-router-dom";
import Navbar3 from "../AdminComponent/Navbar3";
import Home from "../UserComponent/Home";
import { useHistory } from "react-router-dom";
import { render} from "react-dom";

class Exam extends React.Component
{
   
  constructor(props)
  {
      super(props)
      this.state={
           posts:[],
        //   ques_name:'',
          option_a:'',
          Option_b:'',
          Option_c:'',
          Option_d:''
         
      }
  this.handleChange=this.handleChange.bind(this);
    }

  componentDidMount(){
    fetch("http://localhost:8080/question/fetchQuestion")
    .then((res)=>res.json())
    .then((postData)=>this.setState({posts:postData}))
    //.then((post)=>this.setState({options:post}))
    
    
}
handleChange = (e)=>
  {
      this.setState(
          {
              [e.target.name]:e.target.value
          }
      )
  }

  // onSubmit=(e)=>
 handleSubmit(e)
  {
    console.log(" successfully");
      e.preventDefault();
     alert('Your favorite flavor is: ' + this.state.posts);
      //render(<h1>Submitted successfully </h1>, document.getElementById("root"));
      console.log("Submitted successfully");
      // console.log(this.state);
  }
  
     render()
     {
        console.log(this.state.posts);
        
         return(
                <div className="container">
                  <h1 className="h1">React Test</h1>
              <div className="app-wrapper">
                {
                  this.state.posts.map(q=> (
                  <>   
                <div key = {q.q_id} className="question-count">
                <h2>{q.q_name}</h2>
             </div>
<div className="answer-section-wrapper">
  <input className="form-check-input" type="radio" name={`flexRadioDefault-${q.q_id}`} id="flexRadioDefault1" />
      <label   htmlFor="flexRadioDefault1"> {q.option_a} </label>
</div>

 <div className="answer-section-wrapper">
  <input className="form-check-input" type="radio" name={`flexRadioDefault-${q.q_id}`} id="flexRadioDefault2" />
      <label   htmlFor="flexRadioDefault2"> {q.option_b} </label>
</div>

<div className="answer-section-wrapper">
  <input className="form-check-input" type="radio" name={`flexRadioDefault-${q.q_id}`} id="flexRadioDefault3" />
  <label  htmlFor="flexRadioDefault3"> {q.option_c} </label>
</div>

<div className="answer-section-wrapper">
  <input className="form-check-input" type="radio" name={`flexRadioDefault-${q.q_id}`} id="flexRadioDefault4" />
  <label  type="radioContainer" htmlFor="flexRadioDefault4"> {q.option_d} </label>
</div>


<button type="button"  className="submit"   >Submit </button>    
<br></br>          
  </>
 ))} 
 <button type="submit" className="submit" onSubmit={this.handleSubmit}>End the Exam</button>
 </div>
 
</div>
         )
                    
         }} 

export default Exam;