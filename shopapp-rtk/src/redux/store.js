import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { profileReducer } from "./profileSlice";

//createStore replaced by configureStore
// configureStore takes rootReducer --> no need to for explict combineReducer
// by default devtool is configured no compose(window.__REDUX...)
const store = configureStore({
    reducer: {
        cart: cartReducer,
        profile: profileReducer
    }
});

export default store;