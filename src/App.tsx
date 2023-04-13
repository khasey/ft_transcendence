import React from 'react';
import './App.css';
import Nav from './component/Nav'
import { Routes, Route } from 'react-router-dom'
import Game from './component/Game';
import Score from './component/Score';
import Rules from './component/Rules';
import Credits from './component/Credits';
import Login from './component/Login';


function App() {
  return (
    <>
    <Nav/>
    <Routes>
    <Route path="/" element={<Login/>}></Route>
      <Route path='game' element={<Game/>}></Route>
      <Route path='score' element={<Score/>}></Route>
      <Route path='rules' element={<Rules/>}></Route>
      <Route path='credits' element={<Credits/>}></Route>
      <Route path='login' element={<Login/>}></Route>
    </Routes>
    </>
  );
}

export default App;
