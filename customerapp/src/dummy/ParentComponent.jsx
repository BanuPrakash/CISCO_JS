import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    state = {
        "name": "Roger",
        "age": 45
    }
    render() {
        return (
            <div>
                <ChildComponent 
                name={this.state.name} 
                age ={this.state.age} />
            </div>
        )
    }
}
