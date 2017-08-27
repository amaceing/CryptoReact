import React, { Component } from 'react';
import { CryptoCurrency } from './crypto-currency.jsx'
import { Header } from './header.jsx'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container text-center">
          <div className="row">
            <div className="col-md-3">
              <CryptoCurrency currency="Bitcoin" />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3">
              <CryptoCurrency currency="Litecoin" />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3">
              <CryptoCurrency currency="Ethereum" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
