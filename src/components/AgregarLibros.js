import AgregarLibroForm from "./AgregarLibroForm"
import React from 'react';

const AgregarLibros = () => {

    return (
        <>
            <div>
                <h1 className="flex justify-center m-8 text-5xl font-bold">Agregando Libros</h1>
                <AgregarLibroForm />
            </div>
        </>
    )
}

export default AgregarLibros
