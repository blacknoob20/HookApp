import React, { useRef } from 'react';

import '../02-useEffect/effect.css';

export const FocusScreen = () => {
    // con el useRef
    const inputRef = useRef();

    const handleClick = () =>{
        inputRef.current.select();
    }
    // sin el useRef
    // const handleClick = () =>{
    //     document.querySelector('input').focus();
    // }

    return (
        <div>
            <h1>Focus Screen</h1>
            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre"
            />
            <button className="btn btn-outline-primary mt-5" onClick={handleClick}>Focus</button>
        </div>
    )
}
