import React from 'react';

export default function Input({tasks}) {
    
    return (
        <div>
            <input value={task} onChange={changeHandler}/>
            
            <button onClick={submitHandler}>Add Todo</button>
        </div>
    );
}