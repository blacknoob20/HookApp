import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demosTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoApp/>', () => {
    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn();

    test('Debe mostrarse correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de agregar un TODO', () => {
        const wrapper = mount(<TodoApp />);
        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demosTodos[0]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (1)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('Debe eliminar un TODO.', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demosTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demosTodos[0].id);

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
    });
    


});
