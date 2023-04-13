import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch} from "react-redux";

import { getUsuarioByID } from '../../redux/actions';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

import s from "./Account.module.css"

const Account = () => {
                /* ------------------- ESTADOS ------------------- */
  const { usuario } = useSelector((state) => state);
  
  
  // const token = Cookies.get('user_token'); 
  // const [user, setUser] = useState(token)
  // const [aux, setAux] = useState()

  // const decodedToken = jwt_decode(token);

  // const email = decodedToken.email

  // const dispatch = useDispatch()

  // useEffect(() => {

  //   setAux(dispatch(getUsuarioByID(email)))
  // }, [dispatch, email])

  
  return (
    <div className={s.contenedor}>
      <h1>Mi cuenta</h1>
      { usuario && usuario.map(e => {
        <div>
        <p>Nombre: {e.nombre}</p>
        <p>Correo electrónico: {e.email}</p>
        <p>Número de teléfono: {e.telefono}</p>
      </div>
      })}
    </div>
  )
}

export default Account
