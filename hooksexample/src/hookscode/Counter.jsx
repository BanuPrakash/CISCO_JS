import React, { useReducer } from 'react'
import countReducer from '../reducers/countReducer'


export default function Counter() {
    let [state, dispatch] = useReducer(countReducer, {count: 0});

  return (
    <div>
        Count: {state.count} <br />
        <button type='button' onClick={() => dispatch({type: 'INCREMENT', payload: 5})}>
            Increment
        </button>
        <button type='button' onClick={() => dispatch({type: 'DECREMENT'})}>
            DECREMENT
        </button>
        <button type='button' onClick={() => dispatch({type: 'RESET'})}>
            Reset
        </button>
    </div>
  )
}
