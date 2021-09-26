import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from "../../hooks/useForm";

describe('Pruebas en el useForm()', () => {
    const initialForm = {
        name: 'Cristhian',
        email: 'reguerre@espol.edu.ec'
    };

    test('Debe de regresar un formulario por defecto.', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [form, handleInputChange, reset] = result.current;

        expect(form).toEqual({ name: 'Cristhian', email: 'reguerre@espol.edu.ec' });
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Debe cambiar el valor del formulario (solo name). ', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const handleInputChange = result.current[1];

        act(() => {
            handleInputChange({ target: { name: 'name', value: 'Rene' } });
        });

        const form = result.current[0];
        expect(form).toEqual({ name: 'Rene', email: 'reguerre@espol.edu.ec' });

    });

    test('Debe de re-establecer el formulario con reset()', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const handleInputChange = result.current[1];
        const reset = result.current[2];

        act(() => {
            handleInputChange({ target: { name: 'name', value: 'Rene' } });
            reset();
        });

        const form = result.current[0];
        expect(form).toEqual(initialForm);
    });


});
