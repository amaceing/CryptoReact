import React, { Component } from 'react';
import { Header } from './header.jsx'
import { CryptoCurrency } from './crypto-currency.jsx'
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
