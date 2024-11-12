import React, { Component } from 'react'

export default class UserList extends Component {
    state = {
        users: null
    }

    componentDidMount() {
        // promise based api fetch
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    users: data
                })
            });
    }

    display() {
        if (this.state.users) {
            return this.state.users.map(user => <div key={user.id}>{user.name}</div>)
        } else {
            return <div>loading....</div>
        }
    }
    render() {
        return this.display();
    }
}
