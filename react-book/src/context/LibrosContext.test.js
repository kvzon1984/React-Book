import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LibroContext, LibroProvider } from './LibroProvider';

// Creamos una instancia de MockAdapter para simular las llamadas a la API
const mock = new MockAdapter(axios);

// Datos ficticios para simular la respuesta de la API
const librosData = [
  { id: 1, title: 'Libro 1' },
  { id: 2, title: 'Libro 2' },
];

test('fetches libros data from API and provides it through context', async () => {
  // Configuramos el MockAdapter para que responda con los datos ficticios cuando se haga una llamada a la API
  mock.onGet('https://www.anapioficeandfire.com/api/books?page1&pageSize=50').reply(200, librosData);

  // Renderizamos el componente LibroProvider con el contexto LibroContext
  const { getByText } = render(
    <LibroProvider>
      <LibroContext.Consumer>
        {({ libros }) => <div>{libros.map((libro) => <p key={libro.id}>{libro.title}</p>)}</div>}
      </LibroContext.Consumer>
    </LibroProvider>
  );

  // Verificamos que los datos se obtengan correctamente y se muestren en el componente
  await waitFor(() => {
    expect(getByText('Libro 1')).toBeInTheDocument();
    expect(getByText('Libro 2')).toBeInTheDocument();
  });
});
