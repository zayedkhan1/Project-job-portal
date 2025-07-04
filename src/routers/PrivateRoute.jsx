import React, { useContext } from 'react';
import AuthContext from '../context/authcontext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    console.log(location)
   
    if(loading){
        return <span class="loading loading-dots loading-xl"></span>

    }
    if(user){
        return children;
    }
    return <Navigate to='/singIn' state={location?.pathname}></Navigate>
};

export default PrivateRoute;