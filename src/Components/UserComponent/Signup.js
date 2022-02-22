import React, {useState}  from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import signpic from "../images/signup.svg";
import 'bootstrap/dist/css/bootstrap.css';

function Signup()
{
    let history=useHistory();
    const [username,setUserName] = useState("")
    const [useremail,setUserEmail] = useState("")
    const [usermobileno,setUserMobileNo] = useState("")
    const [password,setPassword] = useState("")


   async function handleSubmit(e)
    {
        e.preventDefault()
        alert("User Registered Successfully");
        history.push("/Login");

        let item = {username,useremail,usermobileno,password}
        console.warn(item)

        let result = await fetch("http://localhost:8080/user/user/register", {
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        
    }




    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form  className="register-form" id="register-form" >
                                
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="username" id="name" autoComplete="off"
                                    value={username}
                                    onChange={(e) =>setUserName(e.target.value)}
                                        placeholder="Your Name"
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="useremail" id="email" autoComplete="off"
                                    value={useremail}
                                    onChange={(e)=>setUserEmail(e.target.value)}
                                        placeholder="Your Email"
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="phone">
                                        <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input type="number" name="usermobileno" id="phone" autoComplete="off"
                                        value={usermobileno}
                                        onChange={(e)=>setUserMobileNo(e.target.value)}
                                        placeholder="Your Phone"
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}
                                        placeholder="Your Password"
                                    />
                                </div>

                               
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit"
                                        value="Register" onClick={handleSubmit} 
                                    />
                                </div>

                            </form>
                        </div>
                        
                            <div className="signup-image">
                                <figure>
                                    <img src={signpic} alt="registration pic" />
                                </figure>
                                <NavLink to="/login" className="signup-image-link">Already registered?</NavLink>
                            </div>
                       
                    </div>
                </div>
           </section>
        </>
    )
}

export default Signup;

// import React, {useState}  from 'react';
// import { NavLink, useHistory } from 'react-router-dom';
// import signpic from "../images/signup.svg";
// import 'bootstrap/dist/css/bootstrap.css';
// import axios from "axios";
// import Login from '../UserComponent/Login';

// function Signup()
// {
//     let history = useHistory();
//     const [username,setUserName] = useState("")
//     const [useremail,setUserEmail] = useState("")
//     const [usermobileno,setUserMobileNo] = useState("")
//     const [password,setPassword] = useState("")

//     const defaultData = {
//       password: "",
//       useremail:"",
//       usermobileno: "",
//       username: "",

//   };
//   const [userData, setUserData] = useState(defaultData);
//   const [userList, setUserList] = useState([]);

//     const [submitted, setSubmitted] = useState(false);
//     const [error, setError] = useState(false);

//     const handleSubmit = (e) => {

//       setUserList([...userList, userData]);
//       setUserData(defaultData);

//         e.preventDefault();
//         if (username == '' || useremail =='' || usermobileno == '' || password == '') {
//           setError(true);
//         } else {
//           setSubmitted(true);
//           setError(false);
//         }

//         axios
//         .post("http://localhost:8080/user/user/login",userData)
//         .then((res)=> console.log(res));
//         // history.push("/Login");
//       };

//       const successMessage = () => {
//         return (
//           <div
//             className="success"
//             style={{
//               display: submitted ? '' : 'none',
//             }}>
//             <h1>User {username} successfully registered!!</h1>
//             {/* {history.push("/Login")} */}
//           </div>
//         );
        
//       };

//       const errorMessage = () => {
//         return (
//           <div
//             className="error"
//             style={{
//               display: error ? '' : 'none',
//             }}>
//             <h1>Please enter all the fields</h1>
//           </div>
//         );
//       };

//     return (
//         <>

// <div className="messages">
//         {errorMessage()}
//         {successMessage()}
//       </div>
//             <section className="signup">
//                 <div className="container mt-5">
//                     <div className="signup-content">
//                         <div className="signup-form">
//                             <h2 className="form-title">Sign up</h2>
//                             <form  className="register-form" id="register-form" >
                                
//                                 <div className="form-group">
//                                     <label htmlFor="name">
//                                         <i className="zmdi zmdi-account material-icons-name"></i>
//                                     </label>
//                                     <input type="text" name="username" id="name" autoComplete="off"
//                                     value={username}
//                                     onChange={(e) =>setUserName(e.target.value)}
//                                         placeholder="Your Name"
//                                     />
//                                 </div>

//                                  <div className="form-group">
//                                     <label htmlFor="email">
//                                         <i className="zmdi zmdi-email material-icons-name"></i>
//                                     </label>
//                                     <input type="email" name="useremail" id="email" autoComplete="off"
//                                     value={useremail}
//                                     onChange={(e)=>setUserEmail(e.target.value)}
//                                         placeholder="Your Email"
//                                     />
//                                 </div>

//                                  <div className="form-group">
//                                     <label htmlFor="phone">
//                                         <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
//                                     </label>
//                                     <input type="number" name="usermobileno" id="phone" autoComplete="off"
//                                         value={usermobileno}
//                                         onChange={(e)=>setUserMobileNo(e.target.value)}
//                                         placeholder="Your Phone"
//                                     />
//                                 </div>

//                                  <div className="form-group">
//                                     <label htmlFor="password">
//                                         <i className="zmdi zmdi-lock material-icons-name"></i>
//                                     </label>
//                                     <input type="password" name="password" id="password" autoComplete="off"
//                                         value={password}
//                                         onChange={(e)=>setPassword(e.target.value)}
//                                         placeholder="Your Password"
//                                     />
//                                 </div>

                               
//                                 <div className="form-group form-button">
//                                     <input type="submit" name="signup" id="signup" className="form-submit"
//                                         value="Register" onClick={handleSubmit} 
//                                     />
//                                 </div>

//                             </form>
//                         </div>
                        
//                             <div className="signup-image">
//                                 <figure>
//                                     <img src={signpic} alt="registration pic" />
//                                 </figure>
//                                 <NavLink to="/login" className="signup-image-link">Already registered?</NavLink>
//                             </div>
                       
//                     </div>
//                 </div>
//            </section>
//         </>
//     )
// }

// export default Signup;

//    async function handleSubmit(e)
//     {
//         e.preventDefault()
//         alert("User successfully registered");
//         history.push("/Login");

//         let item = {username,useremail,usermobileno,password}
//         console.warn(item)

//         let result = await fetch("http://localhost:8080/user/user/register", {
//             method:'POST',
//             body:JSON.stringify(item),
//             headers:{
//                 "Content-Type":'application/json',
//                 "Accept":'application/json'
//             }
//         })
        
//     }




//     return (
//         <>
//             <section className="signup">
//                 <div className="container mt-5">
//                     <div className="signup-content">
//                         <div className="signup-form">
//                             <h2 className="form-title">Sign up</h2>
//                             <form  className="register-form" id="register-form">
                                
//                                 <div className="form-group">
//                                     <label htmlFor="name">
//                                         <i className="zmdi zmdi-account material-icons-name"></i>
//                                     </label>
//                                     <input type="text" name="username" id="name" autoComplete="off"
//                                     value={username}
//                                     onChange={(e) =>setUserName(e.target.value)}
//                                         placeholder="Your Name"
//                                     />
//                                 </div>

//                                  <div className="form-group">
//                                     <label htmlFor="email">
//                                         <i className="zmdi zmdi-email material-icons-name"></i>
//                                     </label>
//                                     <input type="email" name="useremail" id="email" autoComplete="off"
//                                     value={useremail}
//                                     onChange={(e)=>setUserEmail(e.target.value)}
//                                         placeholder="Your Email"
//                                     />
//                                 </div>

//                                  <div className="form-group">
//                                     <label htmlFor="phone">
//                                         <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
//                                     </label>
//                                     <input type="number" name="usermobileno" id="phone" autoComplete="off"
//                                         value={usermobileno}
//                                         onChange={(e)=>setUserMobileNo(e.target.value)}
//                                         placeholder="Your Phone"
//                                     />
//                                 </div>

//                                  <div className="form-group">
//                                     <label htmlFor="password">
//                                         <i className="zmdi zmdi-lock material-icons-name"></i>
//                                     </label>
//                                     <input type="password" name="password" id="password" autoComplete="off"
//                                         value={password}
//                                         onChange={(e)=>setPassword(e.target.value)}
//                                         placeholder="Your Password"
//                                     />
//                                 </div>

                               
//                                 <div className="form-group form-button">
//                                     <input type="submit" name="signup" id="signup" className="form-submit"
//                                         value="Register" onClick={handleSubmit}
                                     
//                                     />
//                                 </div>

//                             </form>
//                         </div>
                        
//                             <div className="signup-image">
//                                 <figure>
//                                     <img src={signpic} alt="registration pic" />
//                                 </figure>
//                                 <NavLink to="/login" className="signup-image-link">Already registered?</NavLink>
//                             </div>
                       
//                     </div>
//                 </div>
//            </section>
//         </>
//     )
// }

// export default Signup;
