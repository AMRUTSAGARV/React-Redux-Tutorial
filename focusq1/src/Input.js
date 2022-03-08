import React, { useState } from "react";
import TodoList from "./TodoList";

export default function Input() {

const [value, setValue ] = useState("");
const [todo, setTodo ] = useState([]);

const handleInputChange = (e) => {
    setValue(e.target.value);
}

const handleAdd= () => {
    const newTodo = [...todo, value ];
    setTodo(newTodo);
    setValue(" ");
}

    return(
        <div>
                <input onChange={handleInputChange} value ={value}/>
                <button onClick={handleAdd}>Add Todo</button>
                <TodoList todo={todo} />
        </div>
    )
}