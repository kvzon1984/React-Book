import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './Input';

test('Renderiza el componente Input correctamente', () => {

    const handleInputChange = (event) => {
        handleChange(event.target.value);
    };

    render(
        <Input
            role='inputText'
            name='TextInput'
            className='px-2'
            type='text'
            placeholder='Ingresa un texto'
            onChange={handleInputChange}
        />
    )

    const input = screen.getByRole('inputText')
    expect(input).toBeInTheDocument()

});

test('Se lee el texto ingresado', () => {

    const handleInputChange = (event) => {
        handleChange(event.target.value);
    };

    render(
        <Input
            role='inputText'
            name='TextInput'
            className='px-2'
            type='text'
            placeholder='Ingresa un texto'
            onChange={handleInputChange}
        />
    )
    
    const input = screen.getByRole('inputText')
    fireEvent.change(input, {target: {value: 'Hola mundo'}})
    expect(input.value).toBe('Hola mundo')

});
