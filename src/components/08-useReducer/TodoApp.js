import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import { todoReducer } from './todoReducer';

import './style.css';
import { TodoList } from './TodoList';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const TodoApp = () => {
    // El dispatch es una funcion que toma una accion y la setea al reducer correspondiente
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    const [{ description }, handleInputChange, reset] = useForm({ description: '' });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = todoId => {
        console.log(todoId);
        const action = { type: 'del', payload: todoId };

        dispatch(action);
    };

    const handleToggle = todoId => dispatch({ type: 'tog', payload: todoId });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length < 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };
        const action = { type: 'add', payload: newTodo }

        dispatch(action);
        reset();
    };

    return (
        <>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
                    </div>
                    <div className="col">
                        <h4>Agregar TODO</h4>
                        <hr />
                        <form action="">
                            <input type="text" name="description" placeholder="Descripcion" autoComplete="off" className="form-control" onChange={handleInputChange} value={description} />
                            <button onClick={handleSubmit} className="btn btn-outline-primary btn-lg btn-block mt-2">Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}