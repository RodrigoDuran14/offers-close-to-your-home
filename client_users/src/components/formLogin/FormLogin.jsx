import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useDispatch } from 'react-redux';

import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom';
import validation from './validation'
import swal from 'sweetalert'
import axios from 'axios'
import styles from "../formLogin/FormLogin.module.css"
import { initializeApp } from "firebase/app";
import Google from "../../assets/images/IconGoogle.png"

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { userLoggedIn } from "../../redux/actions";

const firebaseConfig = {
    apiKey: "AIzaSyDIr4a7cej0mw217G8qMwAGMx8R9MEYj2g",
    authDomain: "justoffers-85932.firebaseapp.com",
    projectId: "justoffers-85932",
    storageBucket: "justoffers-85932.appspot.com",
    messagingSenderId: "310201543546",
    appId: "1:310201543546:web:a6594aa4e7c9121351c4c3",
    measurementId: "G-R85GKECQZY"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

//LAUTARO
export default function FormLogin() {


  const estado = true

    const dispatch = useDispatch()

    const iconGoogle = Google;

    const BACK_HOST = 'http://localhost:3001'
    const history = useHistory()
    const navigateTo = (url) => {
        history.push(url)
    }

    function login(user) {
        if (user) {
       dispatch(userLoggedIn(estado))
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
          const user = await axios.post(`${BACK_HOST}/usuario/login`, values);
          const session = user.data.session;
          const token = user.data.token;
          window.localStorage.setItem('user_token', JSON.stringify(token));
          window.localStorage.setItem('user_session', JSON.stringify(session));
          const isUserAuthenticated = await login(true);
          if (isUserAuthenticated) {
            navigateTo('/');
          } else {
            console.log('Login failed');
          }
        } catch (error) {
          const err = error.response.data;
          swal({
            text: err.msg,
            icon: 'error',
            timer: '2000'
          });
        }
      };
      
      
      
// carolina
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, new GoogleAuthProvider());
            const user = result.user;
            if (user) {
                swal({
                    title: 'Bienvenido',
                    text: 'Ya puedes navegar con tu cuenta!',
                    icon: 'success',
                    timer: '2000'
                });
                navigateTo('/'); // Redirigir a la ruta localhost:3000/home
            } else {
                swal({
                    text: 'Usuario o contraseña incorrectos',
                    icon: 'error',
                    timer: '2000',
                    button: 'Accept'
                });
            }
        } catch (error) {
            const err = error.response.data;
            swal({
                text: err.msg,
                icon: 'error',
                timer: '2000'
            });
        }
    }
//carolina final
    return (
        <div className={styles.container}
        // style={{ width: '100%', maxWidth: '820px' }}
        >
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

                    <Field name='email' type='email' placeholder='Email' className={styles.formInput} />
                    <ErrorMessage name='email' />

                    <Field name='contraseña' type='password' placeholder='Password' className={styles.formInput} />
                    <ErrorMessage name='contraseña' />

                    <div className={styles.botones}
                    // style={{ marginTop: '20px' }}
                    >
                        <button  className={styles.boton} type='submit' >Iniciar sesión</button>

                        <div className='or'>
                            <div style={{ border: '1px solid grey', width: '90px' }}></div> <span style={{ margin: '0px 10px' }}>¿No tienes cuenta?</span> <div style={{ border: '1px solid grey', width: '90px' }}></div>
                        </div>

                        <Link to={'/registrar-usuario'}>
                            <button  className={styles.boton}>Registrarse</button>
                        </Link>
                    </div>

                    <div>
                            <button className={styles.botonRedes} onClick={handleGoogleLogin}><img className={styles.btnRedes} src={iconGoogle} /></button>
                     </div>

                </Form>
            </Formik>
        </div>
    )
}