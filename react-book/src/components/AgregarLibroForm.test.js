import React from 'react';
import { render, screen, waitFor,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import AgregarLibroForm from './AgregarLibroForm';


test('Renderizado del componente', () => {
    render(<AgregarLibroForm/>)

    const tituloInput = screen.getByRole('titulo');
    const autorInput = screen.getByRole('autor');
    const generoInput = screen.getByRole('genero');
    const fechaPublicacionInput = screen.getByRole('fechaPublicacion');
    const addButton = screen.getByRole('button');


    expect(tituloInput).toBeInTheDocument()
    expect(autorInput).toBeInTheDocument()
    expect(generoInput).toBeInTheDocument()
    expect(fechaPublicacionInput).toBeInTheDocument()
    expect(addButton).toBeInTheDocument()
})

test('Renderizado con los textos ingresados',  () => {

    const handleSubmit = jest.fn()

    render(<AgregarLibroForm onSubmit={handleSubmit} />)

    const evento = userEvent

    evento.type(screen.getByRole("titulo"), 'Soy un titulo')
    evento.type(screen.getByRole("autor"), 'Soy un autor')
    evento.type(screen.getByRole("genero"), 'Soy un genero')
    evento.type(screen.getByRole("genero"), '2023-08-01')

    evento.click(screen.getByRole('button'))

    waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
        titulo: 'Soy un titulo',
        autor: 'Soy un autor',
        genero: 'Soy un genero',
        fechaPublicacion: '2023-08-01',

    }),
    )

})

