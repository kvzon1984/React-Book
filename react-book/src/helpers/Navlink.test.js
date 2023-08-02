import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { NavLink } from './Navlink';


test('Renderiza el componente NavLink correctamente', () => {

    const to = '/ruta';
    const children = 'Enlace';
    const className = 'nav-link';

    render(
        <BrowserRouter>
            <NavLink to={to} className={className}>
                {children}
            </NavLink>
        </BrowserRouter>
    );

    const navLinkElement = screen.getByRole('link')

    expect(navLinkElement).toBeInTheDocument();
    expect(navLinkElement.getAttribute('href')).toBe('/ruta');
    expect(navLinkElement.getAttribute('class')).toContain('nav-link');
});