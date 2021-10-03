import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demosTodos } from "../../fixtures/demoTodos";

describe('Pruebas en todoReducer', () => {
    test('Debe retornar el estado por defecto.', () => {
        const state = todoReducer(demosTodos, {});

        expect(state).toEqual(demosTodos)
    });

    test('Debe de agregar un TODO.', () => {
        const action = {
            type: 'add',
            payload: {
                id: 3,
                desc: 'Aprender MySQL',
                done: false
            }
        };

        const state = todoReducer(demosTodos, action);

        expect(state).toEqual([...demosTodos, action.payload]);
    });

    test('Debe de borrar el TODO.', () => {
        const action = {
            type: 'del',
            payload: 2
        };

        const state = todoReducer(demosTodos, action);

        expect(state.length).toBe(1);
        expect(state).toEqual([demosTodos[0]]);
        
    });

    test('Debe hacer el toggle del TODO.', () => {
        const action = {
            type: 'tog',
            payload: 1
        };

        const state = todoReducer(demosTodos, action);

        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demosTodos[1]);
        
    });
    

})
