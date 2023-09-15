import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import axios from 'axios';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/home';
import Movie from './pages/movieDetail/movie';


function App() {
  
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route index element = {<Home/>}></Route>
          <Route path = "movie/:id" element = {<Movie/>}></Route>
          <Route path = "movie/:type" element = {<h1>movie list page</h1>}></Route>
          <Route path = "/*" element = {<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
