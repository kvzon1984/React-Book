import { useLocation } from "react-router-dom"

const NotFound = () => {
    const location = useLocation()
    return (
        <>
            <h1 className="flex justify-center m-8 text-5xl font-bold">404 Not Found</h1>
            <p className="flex justify-center m-8 text-4xl font-bold">La ruta {location.pathname} que estás buscando no existe.</p>
        </>
    )
}

export default NotFound