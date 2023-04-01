import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';

export default function FormRegister() {
    const dispatch = useDispatch()

    const history = useHistory()
    const navigateTo = (url) => {
        history.push(url)
    }

    const [image, setImage] = useState('')
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
            title: 'Usuario registrado',
            text: 'Inicia sesión con tu nuevo usuario',
            icon: 'success',
            button: 'Ir a iniciar sesión'
        })
        navigateTo('/home')
    }

    return (
        <div>
            <Formik
                initialValues={{
                    nombre_usuario: '',
                    direccion: '',
                    telefono: '',
                    email: '',
                    contraseña: '',
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Field name='nombre_usuario' type='text' placeholder='Nombre' />
                    <ErrorMessage name="nombre_usuario" />

                    <Field name='direccion' as='textarea' placeholder='Dirección' />
                    <ErrorMessage name="direccion" />

                    <Field name='telefono' type='text' placeholder='Teléfono' />
                    <ErrorMessage name="telefono" />

                    <Field name='email' type='text' placeholder='Email' />
                    <ErrorMessage name="email" />

                    <div>
                        <div style={{ backgroundImage: `url(${imagen})` }}>picture</div>
                        <Field name='image' type='file' onChange={handleImage} />
                    </div>

                    <Field name='contraseña' type='password' placeholder='Contraseña' />
                    <ErrorMessage name="contraseña" />

                    <Field name='repetir_contraseña' type='password' placeholder='Repite la contraseña' />
                    <ErrorMessage name="repetir_contraseña" />

                    <button type='submit'>Registrarse</button>
                </Form>
            </Formik>
        </div>
    )
}