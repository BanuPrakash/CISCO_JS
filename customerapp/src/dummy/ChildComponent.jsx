import React, { Component } from 'react'

export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        Name: {this.props.name} <br />
        Age: {this.props.age}
      </div>
    )
  }
}
