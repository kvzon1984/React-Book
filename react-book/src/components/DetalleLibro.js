import { LibroContext } from "../context/LibrosContext";
import { useContext, React } from "react";
import { useParams } from "react-router-dom";
import esLocale from 'date-fns/locale/es';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const DetalleLibro = () => {

    const { isbn } = useParams()
    const { libros } = useContext(LibroContext)

    const libro = libros.filter((lista) => lista.isbn === isbn)

    function generarNumeroAleatorio() {

        const numeroAleatorio = Math.random();

            const numeroEnRango = Math.floor(numeroAleatorio * 10000) + 1;

            return numeroEnRango;
    }

    const numeroAleatorio = generarNumeroAleatorio();

    return (
        <>
            <div>
                <h1 className="flex justify-center m-8 text-5xl font-bold">Detalle libro </h1>

                <div className="bg-[#cbd5e1] container mx-auto w-1/2 px-4 rounded-lg px-8 py-8 mt-8">
                    <div>
                        {libro ? (
                            <div>
                                <div className="flex space-x-32">
                                    <h1 className="text-2xl font-bold"> Título del libro: {libro[0].name}</h1>
                                    <div>
                                    <FontAwesomeIcon icon={faHeart} style={{color:"#FF0000"}}  size="2x"/>
                                    <p>{numeroAleatorio}</p>
                                    </div>

                                </div>
                                <p><strong className="text-lg font-bold">Autor:</strong> {libro[0].authors[0]}</p>
                                <p><strong className="text-lg font-bold">País:</strong> {libro[0].country}</p>
                                <p><strong className="text-lg font-bold">Numero de Páginas:</strong> {libro[0].numberOfPages}</p>
                                <p><strong className="text-lg font-bold">Editorial:</strong> {libro[0].publisher}</p>
                                <p><strong className="text-lg font-bold">Año Lanzamiento:</strong> {format(new Date(libro[0].released),'dd-MMMM-yyyy', {
                                    locale: esLocale,
                                    })}</p>
                                <p><strong className="text-lg font-bold">sinopsis: </strong> Id laborum do sint sunt deserunt anim est elit sunt velit eiusmod quis ipsum. Minim consectetur laborum mollit elit. Eiusmod in cupidatat consectetur qui sint. Labore commodo est amet ad sint ex pariatur laboris id aute elit irure. Consectetur culpa pariatur fugiat ea voluptate enim. Cillum pariatur laboris deserunt aliqua esse minim sit non excepteur anim tempor.</p>

                            </div>
                        ) : (
                            <p>No se encontró el libro con el ISBN {isbn}</p>
                        )}
                        </div>
                </div>
            </div>
        </>
    )
}

export default DetalleLibro