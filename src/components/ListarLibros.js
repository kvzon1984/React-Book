import { LibroContext } from "../context/LibrosContext";
import { useContext } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table"
import useColumns from "../context/Columns";
import useRows from "../context/Rows";
import React from 'react';

const ListarLibros = () => {

    const { libros } = useContext(LibroContext)
    const listLibros = [...libros]
    const columns = useColumns();
    const data = useRows(listLibros);
    const table = useTable({ columns, data },useGlobalFilter, useSortBy);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        preGlobalFilteredRows,
        setGlobalFilter,
        state
    } = table;

    return (
        <>
            <div>
                <h1 className="flex justify-center m-8 text-5xl font-bold">Listar libros</h1>
            </div>
            <div className="bg-[#cbd5e1] container mx-auto w-1/2 px-4 rounded-lg px-8 py-8 mt-8">

                <div className="py-8 ">
                    <p>Total de registros: {preGlobalFilteredRows.length}</p>
                    <input
                    className="w-96 h-10 px-4"
                    placeholder="Busca por el campo que desees...!!"
                    type="text"
                    value={state.globalFilter}
                    onChange={(event) => setGlobalFilter(event.target.value)}
                    />
                </div>

                <table {...getTableProps()} className="table-auto border-collapse border border-slate-500">
                    <thead>
                        {
                        // Recorremos las columnas que previamente definimos
                        headerGroups.map(headerGroup => (
                            // Añadimos las propiedades al conjunto de columnas
                            <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                // Recorremos cada columna del conjunto para acceder a su información
                                headerGroup.headers.map((column) => (
                                // Añadimos las propiedades a cada celda de la cabecera
                                <th {...column.getHeaderProps(column.getSortByToggleProps())} className=" text-gl px-5 text-[#030712] border border-slate-600">
                                    {column.render("Header")}
                                    <span>
                                    {column.isSorted
                                        ? column.isSortedDesc
                                        ? " 🔽"
                                        : " 🔼"
                                        : ""}
                                    </span>
                                </th>
                                ))
                            }
                            </tr>
                        ))
                        }
                    </thead>

                            {/* Añadimos las propiedades al cuerpo de la tabla */}
                    <tbody {...getTableBodyProps()}>
                        {
                        // Recorremos las filas
                        rows.map(row => {
                            // Llamamos a la función que prepara la fila previo renderizado
                            prepareRow(row);
                            return (
                            // Añadimos las propiedades a la fila
                            <tr {...row.getRowProps()}>
                                {
                                // Recorremos cada celda de la fila
                                row.cells.map((cell) => {
                                    // Añadimos las propiedades a cada celda de la fila
                                    return (
                                    <td {...cell.getCellProps()} className=" h-20 text-gl px-5 text-[#111827] border border-slate-700">
                                        {
                                        // Pintamos el contenido de la celda
                                        cell.render("Cell")
                                        }
                                    </td>
                                    );
                                })
                                }
                            </tr>
                            );
                        })
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ListarLibros