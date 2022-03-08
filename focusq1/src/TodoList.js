import React from "react";


export default function TodoList({todo}) {
    return (
        <div>
            {
                todo.map((todo, index) => (
                    <li key ={index}>
                            {todo}
                    </li>
                ))
            }
        </div>
    )
}