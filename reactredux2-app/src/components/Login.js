import React from 'react';
import { useDispatch } from 'react-redux';
import {} from '../features/user'

const Login = () => {
    const dispatch = useDispatch();
    return (
        <div>
         <button 
         onClick={() => {
             dispatch(Login({ name: "Pedro", age:20, email:'pedro@gmail.com'}));
             }}>Login</button>   
        </div>
    );
};

export default Login;


//usedispatch hook used to modify values of the state.