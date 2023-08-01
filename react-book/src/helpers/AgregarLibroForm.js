import { useFormik } from 'formik'
import Input from './Input'
import React from 'react';

const validate = (values) => {
    const errors = {}

    if(!values.titulo) {
        errors.titulo = 'El campo es requerido'
    } else if (values.titulo.length < 3) {
        errors.titulo = 'El nombre es muy corto'
    }

    if(!values.autor) {
        errors.autor = 'El campo es requerido'
    } else if (values.autor.length < 3) {
        errors.autor = 'El autor es muy corto'
    }

    if(!values.genero) {
        errors.genero = 'El campo es requerido'
    } else if (values.genero.length < 3) {
        errors.genero = 'El genero es muy corto'
    }

    if(!values.fechaPublicacion) {
        errors.fechaPublicacion = 'El campo es requerido'
    }

    return errors
}

const AgregarLibroForm = () => {
    const formik = useFormik({
        initialValues: {
            titulo: '',
            autor: '',
            genero: '',
            fechaPublicacion: ''
        },
        validate,
        onSubmit: values => console.log(values)
    })

    return(
        <>
            <div className='bg-[#4b5563] container mx-auto w-1/2 px-4 rounded-lg px-8 py-8 mt-8'>
                <form onSubmit={formik.handleSubmit} className='flex flex-col space-y-2 '>
                    <label className='text-3xl'>Título</label>
                    <Input
                        className='w-full h-10 '
                        type='text'
                        { ... formik.getFieldProps('titulo')}
                    />
                    {formik.touched.titulo && formik.errors.titulo ? <p className='w-full text-2xl text-[#7f1d1d] py-5'>{formik.errors.titulo}</p> : null}
                    <br/>
                    <label className='text-3xl'>Autor</label>
                    <Input

                        className='w-full h-10'
                        { ... formik.getFieldProps('autor')}
                        type='text'
                    />
                    {formik.touched.autor && formik.errors.autor ? <p className='w-full text-2xl text-[#7f1d1d] py-5'>{formik.errors.autor}</p> : null}
                    <br/>
                    <label className='text-3xl'>Género</label>
                    <Input
                        className='w-full h-10'
                        type='text'
                        { ... formik.getFieldProps('genero')}
                    />
                    {formik.touched.genero && formik.errors.genero ? <p className='w-full text-2xl text-[#7f1d1d] py-5'>{formik.errors.genero}</p> : null}
                    <br/>
                    <label className='text-3xl'>Fecha Publicación</label>
                    <Input
                        className='w-full h-10'
                        type='date'
                        { ... formik.getFieldProps('fechaPublicacion')}
                    />
                    {formik.touched.fechaPublicacion && formik.errors.fechaPublicacion ? <p className='w-full text-2xl text-[#7f1d1d] py-5'>{formik.errors.fechaPublicacion}</p> : null}
                    <br/>
                    <button type='submit' className='bg-sky-500/100 p-4 rounded-lg'>Guardar Libro</button>
                </form>
            </div>
        </>
    )
}

export default AgregarLibroForm