import React, { createContext, useReducer } from 'react'
import cartReducer from '../reducers/cartReducer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CartContext = createContext(); // central placeholder for cart 

let initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
};

export default function CartContextProvider({ children }) {
    let navigate = useNavigate(); // hook
    let [state, dispatch] = useReducer(cartReducer, initialState);
    function addToCart(item) {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    }

    function increment(id) {
        dispatch({ type: 'INCREMENT', payload: id })
    }

    function clearCart() {
        // assume on login success user email is stored in sessionStorage
        // window.sessionStorage.setItem("customer", "banu@gmail.com");

        let order = {
            customer: window.sessionStorage.getItem("customer"),
            order_date: new Date(),
            items: state.cartItems
        };

        axios.post("http://localhost:1234/orders", order).then(response => {
            console.log("Order Placed!!")
            dispatch({ type: 'CLEAR_CART' });
            navigate('/');
        })


    }
    return (
        <CartContext.Provider value={{ ...state, addToCart, increment, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
