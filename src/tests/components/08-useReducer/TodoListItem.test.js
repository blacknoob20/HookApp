import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demosTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoListItem/>', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(
        <TodoListItem
            todo={demosTodos[0]}
            i={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    );

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    });

    test('Debe de llamar a la funcion borrar.', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demosTodos[0].id);
    });

    test('Debe llamar a la funcion Toggle.', () => {
        wrapper.find('span').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demosTodos[0].id);
    });

    test('Debe mostrar el texto correctamente.', () => {
        const p = wrapper.find('span');
        expect(p.text()).toBe(`1. ${demosTodos[0].desc}`);
    });

    test('Debe tener la clase complete si el todo.done es true.', () => {
        const todo = demosTodos[0];

        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo={todo}
                i={0}
            />
        );

        expect(wrapper.find('span').hasClass('complete')).toBe(true);
    });

});
