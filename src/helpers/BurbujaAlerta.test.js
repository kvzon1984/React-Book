import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BubbleAlert from './BurbujaAlerta';


test('Renderiza el componente correctamente', () => {

    render(<BubbleAlert value='5'/>)

    const burbuja = screen.getByText('5')
    expect(burbuja).toBeInTheDocument()

})

test('Muestra un 9+ al tener un valor mayor a 9 ', () => {

    render(<BubbleAlert value='15'/>)

    const burbuja = screen.getByText('9+')
    expect(burbuja).toBeInTheDocument()

})
