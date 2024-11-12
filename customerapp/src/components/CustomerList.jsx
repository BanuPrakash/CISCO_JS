import React, { Component } from 'react'
import CustomerRow from './CustomerRow';

export default class CustomerList extends Component {
    x = 10; // state but not handled by react, no reconciliation
    y = 15; // state but not handled by react, no reconciliation
    state = {
        customers: [
            { id: 1, firstName: 'John', lastName: 'Doe' },
            { id: 2, firstName: 'Jane', lastName: 'Doe' },
            { id: 3, firstName: 'Mary', lastName: 'Jane' },
            { id: 4, firstName: 'Peter', lastName: 'Parker' },
            { id: 5, firstName: 'Clark', lastName: 'Kent' },
            { id: 6, firstName: 'Bruce', lastName: 'Wayne' },
            { id: 7, firstName: 'Tony', lastName: 'Stark' },
            { id: 8, firstName: 'Steve', lastName: 'Rogers' },
            { id: 9, firstName: 'Natasha', lastName: 'Romanoff' },
            { id: 10, firstName: 'Wanda', lastName: 'Maximoff' }
        ]
    }
    // return JSX
    render() {
        return (
            <div>
                {
                    this.state.customers.map(customer => <CustomerRow
                        key={customer.id}
                        customer={customer} />)
                }
            </div>
        );

    }
}
