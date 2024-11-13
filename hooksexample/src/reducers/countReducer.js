export default function countReducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.payload
            }
        case 'DECREMENT':
            // assume no payload
            return {
                count: state.count - 1
            }
        case  'RESET':
            return {
                count: 0
            }
        default: return state;
    }
}

// assume state is
/*
    {
        count: 0
    }

*/