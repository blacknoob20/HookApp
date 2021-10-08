import { mount } from 'enzyme';
import { HomePage } from '../../../components/09-useContext/HomePage';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomePage/>', () => {
    const user = 'Cristhian';
    const email = 'reguerre@espol.edu.ec';
    const wrapper = mount(
        <UserContext.Provider value={user,email}>
            <HomePage />
        </UserContext.Provider>
    );

    test('Debe mostrarse correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
