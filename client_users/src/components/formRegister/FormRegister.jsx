import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../../redux/actions'
import axios from 'axios'
import swal from 'sweetalert';
import validations from './validations'

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
        dispatch(registerUser(formData))
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
                    primer_nombre: '',
                    segundo_nombre: '',
                    primer_apellido: '',
                    segundo_apellido: '',
                    direccion: '',
                    telefono: '',
                    email: '',
                    contraseña: '',
                }}
                validate={validations}
                onSubmit={handleSubmit}
            >
                <Form className='form-container'>
                    <Field name='primer_nombre' type='text' placeholder='Primer nombre *' className='form-input' />
                    <ErrorMessage name="primer_nombre" />

                    <Field name='segundo_nombre' type='text' placeholder='Segundo nombre' className='form-input' />
                    <ErrorMessage name="segundo_nombre" />

                    <Field name='primer_apellido' type='text' placeholder='Primer apellido *' className='form-input' />
                    <ErrorMessage name="primer_apellido" />

                    <Field name='segundo_apellido' type='text' placeholder='Segundo apellido' className='form-input' />
                    <ErrorMessage name="segundo_apellido" />

                    <Field name='direccion' placeholder='Dirección *' className='form-input' />
                    <ErrorMessage name="direccion" />

                    <Field name='telefono' type='text' placeholder='Número de teléfono *' className='form-input' />
                    <ErrorMessage name="telefono" />

                    <Field name='email' type='text' placeholder='Email' className='form-input' />
                    <ErrorMessage name="email" />
                    <Field name='contraseña' type='password' placeholder='Contraseña' className='form-input' />
                    <ErrorMessage name="contraseña" />

                    {/* <Field name='repetir_contraseña' type='password' placeholder='Repite la contraseña' className='form-input' />
                    <ErrorMessage name="repetir_contraseña" /> */}

                    <button type='submit'>Registrarse</button>

                    <div>
                        <div style={{ backgroundImage: `url(${image})` }} className='register-profile-picture'></div>
                        <Field name='image' type='file' onChange={handleImage} />
                  
                    </div>

                 
                </Form>
            </Formik>
        </div>
    )
}