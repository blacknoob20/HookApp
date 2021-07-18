import React, { useState } from 'react';
import {useCounter} from '../../hooks/useCounter';
import { Small } from './Small';

import '../02-useEffect/effect.css';

export const Memorize = () => {
const {counter, increment} = useCounter(10);
const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <h2>Contador: <Small value={counter}/></h2>
            <hr/>
            <button className="btn btn-primary" onClick={increment}>+1</button>&nbsp;
            <button
                className="btn btn-outline-primary"
                onClick={()=>{
                    setShow(!show);
                }}
            >mostrar/ocultar {JSON.stringify(show)}</button>
        </div>
    )
}
