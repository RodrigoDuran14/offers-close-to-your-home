import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useDispatch } from 'react-redux'
import { createProduct } from "../../../redux/actions"
import { useHistory } from 'react-router-dom'
import validation from './validation'
import swal from 'sweetalert';
import axios from 'axios'
import styles from './FormProduct.module.css';

export default function FormCreateProduct() {
    const [image, setImage] = useState('')

    const history = useHistory()
    const navigateTo = (url) => {
        history.push(url)
    }
    const dispatch = useDispatch()

    const handleImage = async (e) => {
        const file = e.target.files[0]
        const data = new FormData()
        data.append('file', file)
        data.append('upload_preset', 'just_offers')
        await axios.post('link/image/upload', data)
            .then(response => setImage(response.data.secure_url))
    }

    const handleSubmit = (values) => {
        let formData = { ...values, imagen: image }
        console.log(formData)
        dispatch(createProduct(formData))
        swal({
            title: 'Oferta subida correctamente!',
            text: 'Podrás encontrar tu oferta entre las demás en el inicio de nuestra página',
            icon: 'success',
            button: 'Ir al inicio'
        })
        navigateTo('/home')

    }
    return (
        <div className={styles.contenedor}>
            <Formik
                initialValues={{
                    nombre: '',
                    descripcion_producto: '',
                    fecha_inicial: '',
                    fecha_final: '',
                    cantidad: '',
                    existencia: 0,
                    valor: 0,
                }}
                validate={validation}
                onSubmit={handleSubmit}
            >
                <Form>
                    nombre del producto
                    <Field name='nombre' type='text' placeholder='Nombre' />
                   
                    <ErrorMessage name="nombre" />
                     Descripcion del producto
                    <Field name='descripcion_producto' as='textarea' placeholder='Descripción' />
                    <ErrorMessage name="descripcion_producto" />
                      fecha inicial
                    <Field name='fecha_inicial' type='text' />
                    <ErrorMessage name="fecha_inicial" />
                      Fecha final
                    <Field name='fecha_final' type='text' />
                    <ErrorMessage name="fecha_final" />
                     Agregar una imagen
                    <Field name='image' type='file' onChange={handleImage} />
                      Cantidad
                    <Field name='cantidad' type='text' />
                    <ErrorMessage name="cantidad" />
                    Existencia
                    <Field name='existencia' type='number' />
                    <ErrorMessage name="existencia" />
                      Valor
                    <Field name='valor' type='number' />
                    <ErrorMessage name="valor" />

                    <button type="submit">Crear producto</button>
                </Form>
            </Formik>
        </div>
    )
}