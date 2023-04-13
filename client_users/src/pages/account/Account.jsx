import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch} from "react-redux";

import { getUsuarioByID } from '../../redux/actions';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

import s from "./Account.module.css"

const Account = () => {

  const { usuario } = useSelector((state) => state);

  console.log(usuario);

  const token = Cookies.get('user_token'); 

  const decodedToken = jwt_decode(token); // Usamos jwt_decode

  console.log('Decoded Token:', decodedToken);
  const [user, setUser] = useState(token)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsuarioByID(decodedToken.id)) // Pasamos el ID del usuario para obtener sus datos
  }, [dispatch, decodedToken.id])

  return (
    <div className={s.contenedor}>
      <h1>Mi cuenta</h1>
      {usuario && (
        <div>
          <p>Nombre: {usuario.nombre}</p>
          <p>Correo electrónico: {usuario.email}</p>
          <p>Número de teléfono: {usuario.telefono}</p>
        </div>
      )}
    </div>
  )
}

export default Account
