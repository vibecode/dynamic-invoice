import React, { Component } from 'react';

class LineItem extends Component {

  render() {
    return (
        <tr>
          <td>
            1.
          </td>
          <td>
            <input type="text" name="title" className="form-control" />
          </td>
          <td>
            <div className="input-group">
              <div className="input-group__addon">$</div>
              <input type="text" name="price" className="form-control" />
            </div>
          </td>
          <td>
            <input type="text" name="amount" className="form-control" />
          </td>
          <td><h4>...</h4></td>
          <td>
            <button className="btn btn-danger">
              <span className="glyphicon glyphicon-trash">trash</span>
            </button>
          </td>
        </tr>
    );
  }
}

export default