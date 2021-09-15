import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './style.css';

const initState = [{
    id: new Date().getTime(),
    desc: 'Aprender React JS',
    done: false,
}]

export const TodoApp = () => {
    // El dispatch es una funcion que toma una accion y la setea al reducer correspondiente
    const [todos, dispatch] = useReducer(todoReducer, initState);

    const handleSubmit = (e) => {
        
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: 'Nueva Tarea',
            done: false,
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
    };

    return (
        <>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-group list-group-flush">
                            {
                                todos.map((todo, i) => (
                                    <li key={todo.id} className="list-group-item">
                                        <span className="text-center">{i + 1}. {todo.desc}</span>
                                        <button className="btn btn-danger mx-3">Borrar</button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Agregar TODO</h4>
                        <hr />
                        <form action="">
                            <input type="text" name="description" placeholder="Descripcion" autoComplete="off" className="form-control" />
                            <button onClick={handleSubmit} className="btn btn-outline-primary btn-lg btn-block mt-2">Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
