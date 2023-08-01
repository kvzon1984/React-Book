import { NavLink } from "../helpers/Navlink"
import React from 'react';

const Navbar = () => {

    return (
        <>
            <div className="w-full bg-[#1da1f2] flex justify-between px-8 py-8">
                <h1 className="text-2xl font-bold text-teal-700 hover:text-teal-50">Books</h1>
                <ul className="flex items-center">
                    <li>
                        <NavLink className="px-4 hover:text-blue-800" to="/agregar-libros">Agregar Libros</NavLink>
                    </li>
                    <li>
                        <NavLink className="px-4 hover:text-blue-800" to="/listar-libros">Listar Libros</NavLink>
                    </li>
                    <li>
                        <NavLink className="px-4 hover:text-blue-800" to="/detalles-libros">Detalle Libros</NavLink>
                    </li>
                    <li>
                        <NavLink className="px-4 hover:text-blue-800" to="/favoritos-libros">Favoritos Libros</NavLink>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Navbar