import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import validation from './validation'


export default function FormLogin() {
    const carrito = useSelector(state => state.carrito)

    const handleSubmit = (values) => {
        console.log(values);
        window.localStorage.setItem('carrito', JSON.stringify(carrito))
    }

    return (
        <div style={{ width: '100%', maxWidth: '820px' }}>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={handleSubmit}
                validate={validation}
                validateOnBlur={false}
                validateOnChange={false}
            >
                <Form className='form-container'>

                    <Field name='email' type='email' placeholder='Email' className='form-input' />
                    <ErrorMessage name='email' />

                    <Field name='password' type='password' placeholder='Password' className='form-input' />
                    <ErrorMessage name='password' />

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