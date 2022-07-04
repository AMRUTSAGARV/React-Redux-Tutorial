import { useState } from "react";
import React from "react";
import "./App.css";
import Exone from "./Exone";
import Extwo from "./Extwo";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import { Switch, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home />}></Route>
        <Route path="/add">iam add component</Route>
        <Route path="/edit/:id"> iam edit component</Route>
      </Switch>
    </div>
  );
}

export default App;
