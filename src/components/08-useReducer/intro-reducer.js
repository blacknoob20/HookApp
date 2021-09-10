const initState = [{
    id: 1,
    todo: 'Comprar leche',
    done: false,
}];

const todoReducer = (state = initState, action) => {
    if (action?.type === 'agregar') return [...state, action.payload];

    return state;
}

let todos = todoReducer();
const newTodo = {
    id: 2,
    todo: 'Comprar queso',
    done: false,
};

// La accion que se envia al reducer como norma
// debe tener el atributo type
// Opcional
// el atributo payload, que es donde se envia la data
const action = {
    type: 'agregar',
    payload: newTodo

}

todos = todoReducer(todos, action);

console.log(todos);