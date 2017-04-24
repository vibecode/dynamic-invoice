import React, { Component } from 'react';

class InvoiceLineItems extends Component {
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
          <th><h4>${this.calculateTotal()}</h4></th>
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
    return (
        <table className="table table-bordered table-hover">
          {this.tableHeader()}
          <tbody>
          <LineItem />
          </tbody>
          {this.tableFooter()}
        </table>
    );
  }
}

export default InvoiceLineItems;
