import React from "react";
import './App.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Signin from "./components/Signin";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {
  return(
    <div className="App">
      <BrowserRouter>
      <Navigation />
      <Routes>
      <Route path="/" exact component={Home}/>
      <Route path="/signin" exact element={<Signin />}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

