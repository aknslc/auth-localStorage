import React from "react";

import Home from './components/Home'
import { Routes, Route, } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {

  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
  
      </Routes>



    </div>
  );
}

export default App;
