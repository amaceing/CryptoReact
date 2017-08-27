import React, { Component } from 'react';
import { CryptoCurrency } from './crypto-currency.jsx'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row text-center blue-bg white-text quarter-height">
          <p className="header-text">CrypoReact</p>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-3 light-blue-bg">
              <CryptoCurrency />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 light-blue-bg">
              <CryptoCurrency />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 light-blue-bg">
              <CryptoCurrency />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
