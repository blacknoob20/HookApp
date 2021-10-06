import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en el componente <TodoAdd />', () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

    test('Debe mostrarse correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar al handleAddTodo().', () => {
        const formSubmit = wrapper.find('button').prop('onClick');

        formSubmit({ preventDefault() { } });
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('Debe de llamar la funcio handleAddTodo.', () => {
        const value = 'Aprender Angular';
        wrapper.find('input').simulate('change', { target: { value, name: 'description' } })

        const formSubmit = wrapper.find('button').prop('onClick');

        formSubmit({ preventDefault() { } });
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        });
        expect(wrapper.find('input').prop('value')).toBe('');
    })


});
