import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {
    const {counter, increment, decrement, reset} = useCounter(34);

    return (
        <>
            <h1>Counter with Hook: {counter} </h1>
            <hr/>

            <button onClick={() => increment(2)} className="btn btn-primary">+1</button>&nbsp;
            <button onClick={reset} className="btn btn-primary">Reset</button>&nbsp;
            <button onClick={() => decrement(2)} className="btn btn-primary">-1</button>
        </>
    )
}
