import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const LibroContext = createContext()

const INITIAL_STATE = []

export const LibroProvider = ({ children }) => {

    const [ libros, setLibros] = useState(INITIAL_STATE)

    useEffect(() => {
        axios.get('https://www.anapioficeandfire.com/api/books?page1&pageSize=50')
        .then(response => {
            setLibros(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    },[]);

    return (
        <>
            <LibroContext.Provider value={{ libros, setLibros }}>
                {children}
            </LibroContext.Provider>
        </>
    )
}