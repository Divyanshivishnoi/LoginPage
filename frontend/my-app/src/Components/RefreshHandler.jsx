import React from 'react'
import { useNavigate , useLocation} from "react-router-dom";
import {useEffect} from 'react';

const RefreshHandler = ({setIsAuthenticated}) => {

    const location = useLocation();
    const navigate= useNavigate();
    useEffect(() =>{
        if(localStorage.getItem('token')){
            setIsAuthenticated(true);
            if(location.pathname === '/'||
                location.pathname ==='/login'||
                location.pathname ==='/Signup'

            ){
                navigate('/home' , {replace:false});
            }
        }

    },[location , navigate , setIsAuthenticated])
    return ( 
        null
     );
}
 
export default RefreshHandler;