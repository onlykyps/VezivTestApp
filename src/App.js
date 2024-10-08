
import './App.css';
import React from 'react';
import "./index.css"
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import Project from "./routes/Project"
import About from "./routes/About"
import { Route } from 'react-router-dom';
import {Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
