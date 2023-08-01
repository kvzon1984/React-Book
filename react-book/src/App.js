import { FavoritosProvider } from "./context/LibrosFavoritos";
import { LibroProvider } from "./context/LibrosContext";
import { Route, Routes } from 'react-router-dom';
import AgregarLibros from "./components/AgregarLibros";
import DetalleLibro from "./components/DetalleLibro";
import DetalleLibros from "./components/DettallesLibros";
import FavoritosLibros from "./components/FavoritoLibros";
import ListarLibros from "./components/ListarLibros";
import Navbar from "./components/Navbar";
import React from 'react';

function App() {
  return (
    <LibroProvider>
      <FavoritosProvider>
        <div>
          <Navbar/>
        </div>
        <div className="App">
            <Routes>
              <Route path="/" element={<AgregarLibros/>} />
              <Route path="/agregar-libros" element={<AgregarLibros/>} />
              <Route path="/listar-libros" element={<ListarLibros/>} />
              <Route path="/favoritos-libros" element={<FavoritosLibros/>} />
              <Route path="/detalles-libros" element={<DetalleLibros/>}/>
              <Route path="/detalles-libros/:isbn" element={<DetalleLibro/>}/>
            </Routes>
        </div>
      </FavoritosProvider>
    </LibroProvider>
  );
}

export default App;