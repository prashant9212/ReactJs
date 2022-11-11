import './App.css';
import React from 'react';
// import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Header from './components/Header';
import HomeSlider from './components/HomeSlider'; 
import Home from './components/Home';
import Footer from './components/Footer';

function App() {

  return (
     <>     
      <Header/>
      <HomeSlider/>
      <Home/>
      <Footer/>

     </>
  );
}

export default App;
