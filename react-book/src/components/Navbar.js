import { NavLink } from "../helpers/Navlink"
import React, { useContext } from 'react';
import BubbleAlert from "../helpers/BurbujaAlerta";
import { FavoritosContext } from "../context/LibrosFavoritos";

const Navbar = () => {
    const { favoritos } = useContext(FavoritosContext)
    console.log(favoritos.length);

    return (
        <>
            <div className="w-full bg-[#1da1f2] flex justify-between px-8 py-8">
                <h1 className="text-2xl font-bold text-teal-700 hover:text-teal-50">Books</h1>
                <ul className="flex items-center">
                    <li>
                        <NavLink className="px-4 hover:text-blue-800" to="/agregar-libros">Agregar</NavLink>
                    </li>
                    <li>
                        <NavLink className="px-4 hover:text-blue-800" to="/listar-libros">Listar</NavLink>
                    </li>
                    <li>
                        <NavLink className="px-4 hover:text-blue-800" to="/detalles-libros">Detalles</NavLink>
                    </li>
                    <li>
                        <NavLink className="px-1 hover:text-blue-800" to="/favoritos-libros">Favoritos</NavLink>
                            {favoritos.length !== 0 ? <BubbleAlert value={favoritos.length} /> : null }
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar