import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useDispatch } from 'react-redux';

import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom';
import validation from './validations'
import swal from 'sweetalert'
import axios from 'axios'
import styles from "../formLogin/FormLogin.module.css"
import { commerceLoggedIn } from "../../../redux/actions";

import Cookies from 'js-cookie';

export default function FormLogin() {


    const estado = true
  
    const logOut = false
  
      const dispatch = useDispatch()
  
    
  
      const BACK_HOST = 'http://localhost:3001'
      const history = useHistory()
      const navigateTo = (url) => {
          history.push(url)
      }
  
      function login(user) {
          if (user) {
         dispatch(commerceLoggedIn(estado))
            swal({
              title: 'Bienvenido',
              text: 'Ya puedes navegar con tu cuenta!',
              icon: 'success',
              timer: '2000'
            });
  
            return Promise.resolve(true);
          } else {
            swal({
              text: 'Usuario o contraseña incorrectos',
              icon: 'error',
              timer: '2000',
              button: 'Accept'
            });
            return Promise.resolve(false);
          }
        }
        const handleLogin = async (values) => {
            try {
              const commerce = await axios.post(`${BACK_HOST}/commerce/loginCommerce`, values);
              console.log("COMMERCE:  ",commerce)
              const session = commerce.data.session;
              const token = commerce.data.token;
              console.log("session:  ",session)
              console.log("token:  ",token)
          
              // Almacenar el token y la sesión en cookies con opciones de seguridad
              Cookies.set('commerce_token', token, { secure: true, sameSite: 'strict' });
              Cookies.set('commerce_session', JSON.stringify(session), { secure: true, sameSite: 'strict' });
          
              const isUserAuthenticated = await login(true);
              if (isUserAuthenticated) {
                navigateTo('/');
              } else {
                console.log('Login failed');
              }
            } catch (error) {
              const err = error.response.data;
              swal({
                text: 'Invalid email or password',
                icon: 'error',
                timer: '2000'
              });
            }
          };
        

        return (
            <div className={styles.container}
            // style={{ width: '100%', maxWidth: '820px' }}
            >
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={handleLogin}
                    validate={validation}   
                    validateOnBlur={false}
                    validateOnChange={false}
                >
                    <Form className='form-container'>
    
                        <Field name='email' type='email' placeholder='Email' className={styles.formInput} />
                        <ErrorMessage name='email' />
    
                        <Field name='password' type='password' placeholder='Password' className={styles.formInput} />
                        <ErrorMessage name='password' />
    
                        <div className={styles.botones}
                        // style={{ marginTop: '20px' }}
                        >
                            <button  className={styles.boton} type='submit' >Iniciar sesión</button>
    
                            <div className='or'>
                                <div style={{ border: '1px solid grey', width: '90px' }}></div> <span style={{ margin: '0px 10px' }}>¿No tienes cuenta?</span> <div style={{ border: '1px solid grey', width: '90px' }}></div>
                            </div>
    
                            <Link to={'/registrar-comercio'}>
                                <button type="button" className={styles.boton}>Registrarse</button>
                            </Link>
                        </div>
    
                        
    
                    </Form>
                </Formik>
            </div>
        )
    }
