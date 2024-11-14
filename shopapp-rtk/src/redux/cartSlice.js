import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
}
const cartSlice = createSlice({
    name :'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
            state.total = state.total + action.payload.amount;
            state.quantity ++;
        },
        increment: (state, action) => {
            let item = state.cartItems.find(item => item.id === action.payload);
            item.quantity++;
            state.total = state.cartItems.map(item => item.amount)
                .reduce((v1, v2) => v1 + v2, 0.0);
        },
        clearCart: (state, action) => {
            state.cartItems = [];
            state.total = 0;
            state.quantity = 0;
        }
    }
});

export const cartReducer = cartSlice.reducer;
export const {addToCart, increment, clearCart} = cartSlice.actions