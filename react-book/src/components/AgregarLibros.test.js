import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AgregarLibros from './AgregarLibros';

test('Renderizado del texto "Agregando Libros"', () => {
  render(<AgregarLibros />);
  const titleElement = screen.getByText('Agregando Libros');
  expect(titleElement).toBeInTheDocument();
});

test('Integracion "<AgregarLibros />"', () => {
  render(<AgregarLibros />);
  
  const agregarLibroFrom = screen.getByTestId('agregar-libro-form')
  expect(agregarLibroFrom).toBeInTheDocument()
});