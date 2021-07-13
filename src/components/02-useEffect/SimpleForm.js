import React, { useEffect, useState } from 'react';
import { Message } from './Message';

import './effect.css';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect(() =>{
        // console.log('hey!');
    },[]);

    useEffect(() =>{
        // console.log('formState cambió');
    },[formState]);

    useEffect(() =>{
        // console.log('email cambió');
    },[email]);

    const handleInputChange = ({target}) => {
        // console.log(e.target);
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <div>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="correo@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                {name === '123' && <Message/>}
            </div>
        </div>
    )
}
