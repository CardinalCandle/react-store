import React, {Component} from "react";
import {Routes, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Routes>
      <Route exact path="/" Component={ProductList}/>
      <Route path="/details" Component={Details}/>
      <Route path="/cart" Component={Cart}/>
      <Route Component={Default}/>
      </Routes>
    </React.Fragment>
    );
}

export default App;
