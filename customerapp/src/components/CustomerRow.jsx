import React, { Component } from 'react'

export default class CustomerRow extends Component {
  render() {
    return (
      <div>
        {this.props.customer.firstName} {this.props.customer.lastName}
        &nbsp;
        <button>Delete</button>
      </div>
    )
  }
}
