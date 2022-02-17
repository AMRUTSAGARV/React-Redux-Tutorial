import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user'

const Login = () => {
    const dispatch = useDispatch();
    return (
        <div>
         <button 
         onClick={() => {
             dispatch(login({ name: "Amrut", age:20, email:'amrut@gmail.com'}));
             }}>login</button>   

             <button onClick={() =>{
                  dispatch(logout());
             }}>Logout</button>
        </div>
    );
};

export default Login;


//usedispatch hook used to modify values of the state.
//useSelector hok used to access values of the state