import React, { useState } from 'react';
import "./App.css";
import Input from './Input';
import TodoList from './TodoList';


export default function App() {

const [task,setTask] = useState('');
const [todos, setTodos] = useState('');


const changeHandler = (e) =>{
  setTask(e.target.value)
};

const submitHandler = (e) => {
  e.preventDefault();
  const newTodos = [...todos, task];
  setTodos(newTodos);
  setTask('');
};

  return (
    <div className='App'>
      <Input tasks= {task}/>
      <TodoList todolist={todos}/>
    </div>
  );
};
