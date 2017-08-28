import React, { Component } from 'react';
import $ from 'jquery';

export class CryptoCurrency extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0.00
    }
  }

  componentDidMount() {
    this.loadCurrencyValue();
  }

  loadCurrencyValue() {
    const ticker = this.props.currency;
    const apiURL = "https://api.coinmarketcap.com/v1/ticker/"+ ticker + "/";
    $.ajax(apiURL).then((data) => {
      const value = data[0].price_usd;
      console.log(value);
      this.setState({value: value})
    });
  }

  formatValue = (value) => {
    return "$" + parseFloat(value).toFixed(2);
  }

  render() {
    return (
      <div className="row text-center">
        <h1 className="blue-text underline-text">{this.props.currency}</h1>
        <p className="blue-text">Price</p>
        <p className="blue-text value-text">{this.formatValue(this.state.value)}</p>
      </div>
    );
  }
}
