import React, { Component, Fragment } from 'react';

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";

import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <ProductList />
        <Details />
        <Cart />
        <Default />
      </Fragment>
    );
  }
}

export default App;
