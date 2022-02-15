import React from 'react';

export default function TodoList({todolist}) {


    return (<div>
            {
                todolist.map((todo,index) => 
                <div key={index}>
                    <h4>{todo}</h4>
                </div>)
            }
        </div>)
}