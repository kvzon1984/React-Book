import React from 'react';
import { LibroContext } from "../context/LibrosContext"
import { useContext } from "react"
import CardLibro from "../helpers/CardLibro";

const DetalleLibros = () => {
    const { libros } = useContext(LibroContext)
    console.log(libros);

    return (
        <div>
            <div>
                <h1 className="flex justify-center m-8 text-5xl font-bold">Detalles libros</h1>
            </div>
            <div className="bg-[#4b5563] container mx-auto w-4/5 px-4 rounded-lg px-8 py-8 mt-8 grid grid-cols-2 gap-auto content-evenly">
                {libros.map( (libro, index) => <div key={index}><CardLibro libro={libro}/></div>)}
            </div>
        </div>
    )
}

export default DetalleLibros