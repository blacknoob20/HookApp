import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList'

describe('Pruebas en el <TodoList/>', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(
        <TodoList
            todos={demosTodos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />);

    test('Debe mostrarse correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener dos <TodoListItem/>', () => {
        expect(wrapper.find('TodoListItem').length).toBe(demosTodos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    });
    

});
