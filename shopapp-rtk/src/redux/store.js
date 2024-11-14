import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { profileReducer } from "./profileSlice";
import { productApi } from "./api/productApi";

//createStore replaced by configureStore
// configureStore takes rootReducer --> no need to for explict combineReducer
// by default devtool is configured no compose(window.__REDUX...)
const store = configureStore({
    reducer: {
        cart: cartReducer,
        profile: profileReducer,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (gDM) => gDM().concat(productApi.middleware),
});

export default store;

//middleware for enabling caching, pre-fetching, ...