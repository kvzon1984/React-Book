import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

test('Button muestra el texto correcto y se llama la función onClick al hacer clic', () => {

    const mockOnClick = jest.fn();

    const { getByText } = render(
    <Button onClick={mockOnClick} className="bg-blue-500">
        Hola, soy un botón
    </Button>
    );

    expect(getByText('Hola, soy un botón')).toBeInTheDocument();

    fireEvent.click(getByText('Hola, soy un botón'));

    expect(mockOnClick).toHaveBeenCalled();
});
