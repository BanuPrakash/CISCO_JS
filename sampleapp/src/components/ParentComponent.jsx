import React, { Component } from 'react'
import NameComponent from './NameComponent'
import AgeComponent from './AgeComponent'

export default class ParentComponent extends Component {
    state = {
        name: "Roger",
        age: 30
    }

    render() {
        console.log("Parent renders")
        return (
            <div>
                <h1>ParentComponent</h1>
                <NameComponent name={this.state.name}/> <br />
                <AgeComponent age={this.state.age} /> <br />
                <button onClick={() => this.setState({age: this.state.age  + 1})}>Increment Age</button> 
                <button onClick={() => this.setState({name: this.state.name  + ".."})}>Change Name</button>
            </div>
        )
    }
}
