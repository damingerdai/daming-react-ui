import React from 'react';
import { createStore } from 'redux';

export const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
}

export const store = createStore(reducer);

const DoCounter = ({ value, onIncrement, onDecrement }) => {
    return <React.Fragment>
        <h1>value: { value } </h1>
        <button className="btn btn-primary" onClick={onIncrement}>+</button>
        <button className="btn btn-secondary" onClick={onDecrement}>-</button>
    </React.Fragment>
};

const Counter = () => (
    <DoCounter  
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({ type: 'DECREMENT'})}
     />
);

export default Counter;