import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class Header extends Component {
  render() {
    return(
      <div className="row text-center blue-bg white-text quarter-height margin-1-b">
        <p className="header-text">CryptoReact <img src={logo} className="logo" alt="logo" /></p>
      </div>
    );
  }
}
