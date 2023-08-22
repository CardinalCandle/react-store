import React, {Component} from "react";
import {Routes, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from "./components/Modal";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Routes>
      <Route exact path="/" Component={ProductList}/>
      <Route path="/details" Component={Details}/>
      <Route path="/cart" Component={Cart}/>
      <Route path="*" Component={Default}/>
      </Routes>
      <Modal>
      </Modal>
      <PayPalScriptProvider options={{ clientId: "test" }}>
        </PayPalScriptProvider>
    </React.Fragment>
    );
}

export default App;
