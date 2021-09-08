import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effect.css';

export const MemoHook = () => {
    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Contador: <small>{counter}</small></h3>
            <hr />
            <p>{memoProcesoPesado}</p>
            <button className="btn btn-primary" onClick={() => increment(1)}>+1</button>&nbsp;
            <button
                className="btn btn-outline-primary"
                onClick={() => {
                    setShow(!show);
                }}
            >mostrar/ocultar {JSON.stringify(show)}</button>
        </div>
    )
}
