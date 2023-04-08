import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import validation from './validation'
import swal from 'sweetalert'
import axios from 'axios'


export default function FormLogin() {
    const BACK_HOST = 'http://localhost:3001'
    const history = useHistory()
    const navigateTo = (url) => {
        history.push(url)
    }

    function login(user) {
        console.log('SUBMIT LOGIN', user)

        if (user) {
            swal({
                title: 'Bienvenido',
                text: 'Ya puedes navegar con tu cuenta!',
                icon: 'success',
                timer: '2000'
            })
            navigateTo('/home')
        } else {
            swal({
                text: 'Usuario o contraseña incorrectos',
                icon: 'error',
                timer: '2000',
                button: 'Accept'
            })
        }
    }

    const handleLogin = (values) => {
        try {
            const user = await (axios.post(`${BACK_HOST}/usuario/login`, values)).data
            const session = user.data.session

            const token = user.data.token
            console.log(token)

            window.localStorage.setItem('user_token', JSON.stringify(token))
            window.localStorage.setItem('user_session', JSON.stringify(session))
            
            login(session)

        } catch (error) {
            const err = error.response.data
            swal({
                text: err.msg,
                icon: 'error',
                timer: '2000'
            })
        }
    }

    return (
        <div style={{ width: '100%', maxWidth: '820px' }}>
            <Formik
                initialValues={{
                    email: '',
                    contraseña: ''
                }}
                onSubmit={handleLogin}
                validate={validation}   
                validateOnBlur={false}
                validateOnChange={false}
            >
                <Form className='form-container'>

                    <Field name='email' type='email' placeholder='Email' className='form-input' />
                    <ErrorMessage name='email' />

                    <Field name='password' type='password' placeholder='Password' className='form-input' />
                    <ErrorMessage name='contraseña' />

                    <div style={{ marginTop: '40px' }}>

                        <button type='submit'>Iniciar sesión</button>

                        <div className='or'>
                            <div style={{ border: '1px solid grey', width: '90px' }}></div> <span style={{ margin: '0px 10px' }}>¿No tienes cuenta?</span> <div style={{ border: '1px solid grey', width: '90px' }}></div>
                        </div>

                        <Link to={'/registrar-usuario'}>
                            <button>Registrarse</button>
                        </Link>
                    </div>

                </Form>
            </Formik>
        </div>
    )
}