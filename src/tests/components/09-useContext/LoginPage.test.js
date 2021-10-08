import { mount } from 'enzyme';
import { LoginPage } from '../../../components/09-useContext/LoginPage';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas sobre el <LoginPage/>', () => {
    const setUser = jest.fn();
    const wrapper = mount(
        <UserContext.Provider value={{ setUser }}>
            <LoginPage />
        </UserContext.Provider>
    );

    test('Debe mostrarse corectamente.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe ejecutar el setUSer con el argumento esperado.', () => {
        wrapper.find('button').prop('onClick')();

        expect(setUser).toHaveBeenCalledWith({
            id: 1234,
            name: 'Cristhian'
        });
    });

});
