import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';

// En vez de usar la definicion original del useFetch
// va a ser reemplazada por una mia
jest.mock('../../../hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks />', () => {
    test('Debe de mostrarse correctamente.', () => {
        const wrapper = shallow(<MultipleCustomHooks />);

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar la informacion', () => {
        useFetch.mockReturnValue({
            data: [{author: 'Cris', quote:'Hola'}],
            loading: false,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola');
        expect(wrapper.find('.footer').text().trim()).toBe('Cris');
    });


});
