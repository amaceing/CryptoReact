import React, { Component } from 'react';
import $ from 'jquery';

export class CryptoCurrency extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 0.00
    }
  }

  componentDidMount() {
    this.loadCurrencyPrice();
  }

  loadCurrencyPrice() {
    const ticker = this.props.currency;
    const apiURL = "https://api.coinmarketcap.com/v1/ticker/"+ ticker + "/";
    $.ajax(apiURL).then((data) => {
      const price = data[0].price_usd;
      this.setState({price: price});
    });
  }

  formatAmount = (amount) => {
    return "$" + parseFloat(amount).toFixed(2);
  }

  amountOwnedChanged = (event) => {
    const valueOfAmountOwned = this.state.price * event.target.value;
    const formattedValue = this.formatAmount(valueOfAmountOwned);
    console.log(formattedValue);
    this.setState({value: formattedValue});
  }

  render() {
    return (
      <div className="row text-center blue-text">
        <h1 className="underline-text">{this.props.currency}</h1>
        <p>Price</p>
        <p className="value-text">{this.formatAmount(this.state.price)}</p>
        <input className="text-right" type="number" onChange={this.amountOwnedChanged} placeholder="Amount Owned"/>
        <p>Value</p>
        <p className="value-text">{this.state.value}</p>
    </div>
    );
  }
}
