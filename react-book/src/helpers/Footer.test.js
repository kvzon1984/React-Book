import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

test('Renderiza el componente correctamente', () => {

    render(<Footer/>)

    const footerText = screen.getByText("Isaac Vega");
    expect(footerText).toBeInTheDocument();
})