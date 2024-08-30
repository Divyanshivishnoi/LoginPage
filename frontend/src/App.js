import React from 'react';
import "./App.css";
import Home from "./Components/Home";
import Signup from "./Components/Signup";

import Login from "./Components/Login";
import { Navigate, Routes, Route } from "react-router-dom";
import {useState} from 'react';
import RefreshHandler from "./Components/RefreshHandler";

function App() {
  // const [ isAuthenticated, setIsAuthenticated] = useState(false);

  // const PrivateRoute = ( {element}) =>{
  //   return isAuthenticated ? element : <Navigate to ="/login"/>
  // }

  return (
    <div className="App">
      {/* <RefreshHandler setIsAuthenticated={setIsAuthenticated}/> */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        {/* <Route path="/home"  element={<PrivateRoute element={<Home/>} />}/> */}
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
