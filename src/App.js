import './App.css';
import Blog from './Blog';
import ListadoPeliculas from './ListadoPeliculas';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListadoPeliculas />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </Router>
  );

}

export default App;
