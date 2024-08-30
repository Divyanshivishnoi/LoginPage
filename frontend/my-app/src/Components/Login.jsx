import React from "react";
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import {handleError, handleSuccess} from '../utils'
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the Toastify CSS


const Login = () => {
  //   const [LoginInfo, setLoginInfo] = useState({
  //     name: '',
  //     email: '',
  //     password: '',
  //   });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const postUrl = "http://localhost:8080/auth/Login";

  const handleSubmit = (e) => {
    e.preventDefault();
    const info= {email, password};
    // const name= info.name;
    // const email= info.email;
    // const password= info.password;
    console.log(password,email)
    

    if(!email || !password){    // if the condition is satisfied we have to return an error  goto(utils.js)
        return handleError("All fields are required");
    }

     fetch(postUrl,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(info),
    })
    .then((res) => res.json()) // parse the response as json

    .then((result) =>{
      const {success, message} = result;

      if(success){
        handleSuccess(message);
          navigate('/home')
        
        }
      else{
        handleError(message);
      }
    })
  
      
     
    .catch((err) =>{
        console.log(err.message);
        // handleError(err);
    });
    setEmail('');
    setPassword('');



    // console.log(info);
  };
  return (
    <div className="Container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
       
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email..."
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter your password..."
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </div>
        <button>Login</button>
        <span>
          Don't  have an account ?<Link to="/Signup">Signup</Link>
        </span>
      </form>
      <ToastContainer /> {/* Add ToastContainer here */}

    </div>
  );
};

export default Login;
