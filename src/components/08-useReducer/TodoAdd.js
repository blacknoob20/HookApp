import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
    const [{ description }, handleInputChange, reset] = useForm({ description: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length < 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        handleAddTodo(newTodo);
        reset();
    };

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form action="">
                <input type="text" name="description" placeholder="Descripcion" autoComplete="off" className="form-control" onChange={handleInputChange} value={description} />
                <button onClick={handleSubmit} className="btn btn-outline-primary btn-lg btn-block mt-2">Agregar</button>
            </form>
        </>
    )
}
