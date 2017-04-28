import React, { Component } from 'react';

class LineItem extends Component {
  calculateTotal() {
    const { price, amount } = this.props;
    const p = parseFloat(price);
    const a = parseFloat(amount);

    return ((isNaN(p) || isNaN(a)) ? 0 : p * a);
  }

  number() {
    return (parseInt(this.props.index) + 1);
  }

  render() {
    const { price, amount, priceChanged,
      amountChanged, index, deleteLineItem } = this.props;

    return (
        <tr>
          <td>{this.number()}.</td>

          <td>
            <input type="text"
                   name="title"
                   className="form-control" />
          </td>

          <td>
            <div className="input-group">
              <div className="input-group__addon"></div>
              <input type="text"
                     name="price"
                     className="form-control"
                     value={price}
                     onChange={priceChanged.bind(null, index)} />
            </div>
          </td>

          <td>
            <input type="text"
                   name="amount"
                   className="form-control"
                   value={amount}
                   onChange={amountChanged.bind(null, index)} />
          </td>

          <td><h4>{this.calculateTotal()}</h4></td>

          <td>
            <button className="btn btn-danger"
                    onClick={deleteLineItem.bind(null, index)}>
              <span className="glyphicon glyphicon-trash"></span>
            </button>
          </td>
        </tr>
    );
  }
}

export default LineItem;