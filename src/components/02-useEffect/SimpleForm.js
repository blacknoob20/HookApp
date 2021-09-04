import React, { useEffect, useState } from 'react';
import { Message } from './Message';

import './effect.css';

export const SimpleForm = () => {

    // Mala practica: poner dentro de condicionales hooks
    // por eso siempre se los ponen en la parte superior como
    // una declaracion de variables

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    // Buenas practicas: los useEffect deben ser trabajados de forma indiviual
    
    // Este useEffect  se dispara cuando entramos por primera vez a la pagina
    // se lo usa normalmente como inicializador de variables
    useEffect(() => {
        // console.log('hey!');
    }, []);
    
    // Este useEffect monitorea los cambios de todo el formulario
    useEffect(() => {
        // console.log('formState cambió');
    }, [formState]);

    useEffect(() => {
        // console.log('email cambió');
    }, [email]);

    const handleInputChange = ({ target }) => {
        // console.log(e.target);
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <div>
            <h1>useEffect</h1>
            <hr />
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
                {name === '123' && <Message />}
            </div>
        </div>
    )
}
