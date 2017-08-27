import React, { Component } from 'react';

export class CryptoCurrency extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0.00
    }
  }

  loadCurrencyValue() {
    const ticker = this.props.currency;
    const apiURL = "https://api.coinmarketcap.com/v1/ticker/"+ ticker + "/";
  }

  render() {
    return (
      <div className="row text-center">
        <h1 className="blue-text underline-text">{this.props.currency}</h1>
        <p className="blue-text">Price</p>
        <p className="blue-text value-text">{this.state.value}</p>
      </div>
    );
  }
}
