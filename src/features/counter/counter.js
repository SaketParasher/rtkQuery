import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
    const { value }  = useSelector(state => state.counter);
    const dispatch = useDispatch();

  return (
    <div>
    <div>
        <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
        >
        Increment
        </button>
        <span>{value}</span>
        <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
        >
        Decrement
        </button>
    </div>
    </div>
  );
};

export default Counter;
