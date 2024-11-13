// actions ADD_TO_CART, INCREMENT, DECREMENT, CLEAR,..
/*
    {
    cartItems: [],
    total: 0,
    quantity: 0 
}
*/
export default function cartReducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                cartItems: [...state.cartItems, action.payload],
                total: state.total + action.payload.price,
                quantity : state.quantity + 1
            }
        case 'INCREMENT':
            return state;
        case 'DECREMENT':
            return state;
        case 'CLEAR_CART':
            return {
                cartItems: [],
                total: 0,
                quantity: 0
            }
        default:
            return state;
    }

}