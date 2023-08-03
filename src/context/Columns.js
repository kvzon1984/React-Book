import { useMemo } from "react";

export default function useColumns() {
    const columns = useMemo(
    () => [
        {
        Header: "Título",
        accessor: "titulo"
        },
        {
        Header: "Autor",
        accessor: "autor"
        },
        {
        Header: "Editorial",
        accessor: "editorial"
        },
        {
        Header: "Año Plubicación",
        accessor: "anioPublicacion"
        }
    ],
    []
    );

    return columns;
}
