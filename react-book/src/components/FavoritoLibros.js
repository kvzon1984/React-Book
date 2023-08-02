import { FavoritosContext } from "../context/LibrosFavoritos";
import { format } from 'date-fns';
import { useContext } from "react"
import Button from "../helpers/Button";
import esLocale from 'date-fns/locale/es';
import Swal from 'sweetalert2'
import React from 'react';
import { NavLink } from "../helpers/Navlink";

const FavoritosLibros = () => {
    const { favoritos, setFavoritos } = useContext(FavoritosContext)

    function deleteFavorito(index) {
        const updatedBooks = [...favoritos];
        updatedBooks.splice(index, 1);
        setFavoritos(updatedBooks);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Elemento Eliminado...!!',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <>
            <div>
                <h1 className="flex justify-center m-8 text-5xl font-bold">Libros favoritos</h1>
                {favoritos.length === 0
                    ? <h1 className="flex justify-center m-8 text-4xl font-bold text-[#b91c1c]">Aún no Añades favoritos</h1>
                    :  <div className="flex justify-center m-8">
                    <table className="table-auto border-separate border-spacing-2 border border-slate-500">
                    <thead>
                        <tr>
                            <th className="border border-slate-600 px-4">Nombre</th>
                            <th className="border border-slate-600 px-4">Autor</th>
                            <th className="border border-slate-600 px-4">Editorial</th>
                            <th className="border border-slate-600 px-4">Lanzamiento</th>
                            <th></th>
                        </tr>
                    </thead>
                        <tbody>
                            {favoritos.map((favorito, index) => (
                                <tr key={index}>
                                    <td className="border border-slate-600 px-4">{favorito.name}</td>
                                    <td className="border border-slate-600 px-4">{favorito.authors[0]}</td>
                                    <td className="border border-slate-600 px-4">{favorito.publisher}</td>
                                    <td className="border border-slate-600 px-4">{format(new Date(favorito.released),'dd-MM-yyyy', {
                                    locale: esLocale,
                                })}</td>
                                    <td className="flex space-x-2">
                                        <NavLink
                                            to={`/detalles-libros/${favorito.isbn}`}
                                            className=" bg-[#2563eb] mt-3 py-3 md:px-8 rounded-lg h-12 hover:bg-[#1d4ed8]"
                                            >
                                            Ver Detalle
                                        </NavLink>
                                        <Button className="bg-[#dc2626] px-4 rounded-lg h-12 hover:bg-[#b91c1c] " onClick={(e)=>deleteFavorito(index)} > Eliminar </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                }
            </div>
        </>
    )
}

export default FavoritosLibros