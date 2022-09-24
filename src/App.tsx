import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Asd from './Asd';
import Counting from './Counting';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Counting />}/>
        <Route path='/asd' element={<Asd />} />
      </Routes>
     
    </Router>
  );
}

export default App;