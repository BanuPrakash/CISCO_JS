import React, { Component } from 'react'
import CustomerRow from './CustomerRow';
import Filter from './Filter';

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
    constructor(props) {
        super(props);
    }
    
    // lifecycle method
    componentDidMount() {
        // prestine 
        // customers is what is displayed
        this.state.original = this.state.customers; // make a copy of customers
    }

    filterCustomers(txt) {
        let custs = this.state.original.filter(c => (c.lastName.toUpperCase().indexOf(txt.toUpperCase()) >= 0 ))
        this.setState({
            customers: custs
        });
    }
    
    deleteCustomer(id) {
        let custs = this.state.customers.filter(c => c.id !== id);
        // don't do this, this doesn't trigger reconcillation 
        // this.state.customers = custs;

        // triggers diff algorithm and reconcillation
        // way to update the state
         this.setState({
             customers: custs,
             original: custs
         });
    }

    // return JSX
    render() {
        return (
            <div>
                <Filter filterEvt={(txt) => this.filterCustomers(txt) }/>
                {
                    this.state.customers.map(customer => <CustomerRow
                        delEvt={(id) => this.deleteCustomer(id)}
                        key={customer.id}
                        customer={customer} />)
                }
            </div>
        );

    }
}
