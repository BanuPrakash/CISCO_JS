import React, { Component } from 'react'

export default class CustomerRow extends Component {
  deleteRow(id){
    this.props.delEvt(id);
  }
  render() {
    return (
      <div>
        {this.props.customer.firstName} {this.props.customer.lastName}
        &nbsp;
        <button onClick={() => this.deleteRow(this.props.customer.id)}>Delete</button>
      </div>
    )
  }
}
