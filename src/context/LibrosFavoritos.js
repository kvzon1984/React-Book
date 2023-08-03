import React, { createContext, useState } from "react";


export const FavoritosContext = createContext()

const INITIAL_STATE = []

export const FavoritosProvider = ({ children }) => {

    const [ favoritos, setFavoritos ] = useState(INITIAL_STATE)

    return (
        <>
            <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
                {children}
            </FavoritosContext.Provider>
        </>
    )
}