import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FavoritosContext } from '../context/LibrosFavoritos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns';
import { Tab } from '@headlessui/react'
import React, { useState, useContext } from 'react'
import Button from './Button';
import esLocale from 'date-fns/locale/es';
import Swal from 'sweetalert2'
import { NavLink } from './Navlink';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
    }

    export default function CardLibro(props) {

        const { favoritos, setFavoritos } = useContext(FavoritosContext)

        function addFavoritos(movie) {

            if (!isBookInFavoritos(movie, favoritos)) {
                setFavoritos([...favoritos, movie])
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Libro agregado exitosamente.',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'El libro ya está en la lista de favoritos.',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        }

        const isBookInFavoritos = (nuevoLibro, lista) => {
            return lista.includes(nuevoLibro);
        };

        let [categories] = useState({


        'Vista general': [
        {
            id: 1,
            title: `Titulo: ${props.libro.name}`,
            autor: `Autor: ${props.libro.authors[0]}`,
            pais: `Pais: ${props.libro.country}`,
            favorito: 'Agregar a Favoritos'
        },

        ],
        'Detalle a Fondo': [
        {
            id: 2,
            title: `Titulo: ${props.libro.name}`,
            autor: `N° de páginas: ${props.libro.numberOfPages} páginas`,
            pais: `Editorial: ${props.libro.publisher}`,
            anio: `Lanzado: ${format(new Date(props.libro.released),'dd-MM-yyyy', {
                                locale: esLocale,
                            })}`,
            ver: 'Ver',
            isbn: props.libro.isbn
        },
        ],
    })

    return (
        <div className="w-full max-w-lg px-2 py-16 sm:px-0">
        <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
                <Tab
                key={category}
                className={({ selected }) =>
                    classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                }
                >
                {category}
                </Tab>
            ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                key={idx}
                className={classNames(
                    'rounded-xl bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
                >
                <ul>
                    {posts.map((post) => (
                    <li
                        key={post.id}
                        className="relative rounded-md p-3 hover:bg-gray-100"
                    >
                        <h3  className="text-xl font-medium leading-5">
                        {post.title}
                        </h3>

                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                            <li className="text-base/2 font-medium leading-5">{post.autor}</li>
                            <li className='text-base/2'>&middot;</li>
                            <li className="text-base/2 font-medium leading-5">{post.pais}</li>
                            <li className='text-base/2'>&middot;</li>
                            <li className="text-base/2 font-medium leading-5">{post.anio}</li>
                            <li className='text-base/2'>&middot;</li>
                        </ul>
                        <ul className=" font-normal leading-4 mt-7">
                        {}
                            { post.id === 1
                                ? <li>
                                    <Button className="bg-[#2563eb] w-full rounded-lg h-10 hover:bg-[#1d4ed8]"
                                        onClick={(e)=>addFavoritos(props.libro)}>
                                        <FontAwesomeIcon icon={faHeart} style={{color:"#892C2C"}}/>
                                            {" "} { post.favorito }
                                    </Button>
                                </li>
                                : <li>
                                    <NavLink
                                        to={`/detalles-libros/${post.isbn}`}
                                        className="  bg-[#2563eb] mt-3 py-3 md:px-56 rounded-lg h-12 hover:bg-[#1d4ed8]"
                                        >
                                        Ver
                                    </NavLink>
                                </li>
                            }
                        </ul>
                    </li>

                    ))}
                </ul>
                </Tab.Panel>

            ))}
            </Tab.Panels>
        </Tab.Group>
        </div>
    )
}