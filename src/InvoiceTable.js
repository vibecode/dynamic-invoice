import React, { Component } from 'react';
import LineItem from './LineItem';
import clone from 'clone';

class InvoiceTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [
        {
          price: null, amount: null
        }
      ]
    };

    this.priceChanged = this.priceChanged.bind(this);
    this.amountChanged = this.amountChanged.bind(this);
    this.addLineItem = this.addLineItem.bind(this);
    this.deleteLineItem = this.deleteLineItem.bind(this);
  }

  priceChanged(i, ev) {
    const lines = clone(this.state.lines);
    lines[i].price = ev.target.value;

    this.setState({
      lines
    })
  }

  amountChanged(i, ev) {
    const lines = clone(this.state.lines);
    lines[i].amount = ev.target.value;

    this.setState({
      lines
    })
  }

  addLineItem() {
    const lines = clone(this.state.lines);
    lines.push({ price: null, amount: null });

    this.setState({
      lines
    })
  }

  deleteLineItem(i) {
    const lines = clone(this.state.lines);
    lines.splice(i, 1);

    this.setState({
      lines
    })
  }

  totalPrice(price, amount) {
    const p = parseFloat(price);
    const a = parseFloat(amount);

    return ((isNaN(p)) || isNaN(a) ? 0 : p * a);
  }

  calculateTotal() {
    const { lines } = this.state;

    return lines.map(i => this.totalPrice(i.price, i.amount))
                .reduce((acc, cur) => acc + cur, 0)
  }

  tableHeader() {
    return (
        <thead>
        <tr>
          <th width="1%">Nr</th>
          <th width="55%">Name</th>
          <th width="20%">Price</th>
          <th width="10%">Amount</th>
          <th width="10%">Total</th>
          <th width="4%">Action</th>
        </tr>
        </thead>
    )
  }

  tableFooter() {
    return (
        <tfoot>
        <tr>
          <td colSpan="4"></td>
          <th><h4>{this.calculateTotal()}</h4></th>
          <td>
            <button className="btn btn-success"
                    onClick={this.addLineItem}>
              <span className="glyphicon glyphicon-plus"></span>
            </button>
          </td>
        </tr>
        </tfoot>
    );
  }

  render() {
    const { lines } = this.state;

    const lineItems = lines.map((item, i) =>
        <LineItem index={i}
                  price={item.price}
                  amount={item.amount}
                  priceChanged={this.priceChanged}
                  amountChanged={this.amountChanged}
                  deleteLineItem={this.deleteLineItem} />);

    return (
        <table className="table table-bordered table-hover">
          {this.tableHeader()}
          <tbody>
            {lineItems}
          </tbody>
          {this.tableFooter()}
        </table>
    );
  }
}

export default InvoiceTable;
