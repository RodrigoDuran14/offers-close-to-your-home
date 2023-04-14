// // import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch} from "react-redux";
// import { getUsuarioByID } from '../../redux/actions';
// import Cookies from 'js-cookie';
// import jwt_decode from 'jwt-decode';
// import s from "./Account.module.css"

// const Account = () => {
//   /* ------------------- ESTADOS ------------------- */
//   // const { usuario } = useSelector((state) => state);

//   const token = Cookies.get('user_token'); 
//   const [usuario, setUsuario] = useState([])
//   const decodedToken = jwt_decode(token);

//   // const [user, setUser] = useState(decodedToken)

//   const email = decodedToken.email

//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(getUsuarioByID(email)).then(res => setUsuario(res)) // Actualizar el estado con la respuesta de la acción asincrónica
//   }, [dispatch, email])

//   console.log(usuario);
  
//   return (
//     <div className={s.contenedor}>
//       <h1>Mi cuenta</h1>
//       { usuario && usuario.map(e => (
//         <div key={e.id}>
//           <p>Nombre: {e.nombre}</p>
//           <p>Correo electrónico: {e.email}</p>
//           <p>Número de teléfono: {e.telefono}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Account


import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch} from "react-redux";
import { getUsuarioByID } from '../../redux/actions';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import s from "./Account.module.css";
import FormUpdate from "../../components/FormUpdate/FormUpdate"


const Account = () => {
  /* ------------------- ESTADOS ------------------- */
 const { usuario } = useSelector((state) => state);
 const dispatch = useDispatch();
 const token = Cookies.get('user_token'); 
 const decodedToken = jwt_decode(token);

  const email = decodedToken.email

  useEffect(() => {
    dispatch(getUsuarioByID(email)) // Actualizar el estado con la respuesta de la acción asincrónica
  }, [dispatch])

  const userLogin = usuario.map(e => e.email === email)

  console.log(userLogin);

console.log(email);
  
  return (
    <div className={s.contenedor}>
      <h1 className={s.tittle}>Mi cuenta</h1>
      { usuario && usuario.map(e => (
        <div key={e.email}>
           {e.imagen && (
                  <img
                    className={s.imageFile}
                    src={e.imagen}
                    id="imagen"
                  />
                )}
                
                <div className={s.text}>
          <label>Nombre: {e.primer_nombre} {e.segundo_nombre} {e.primer_apellido} {e.segundo_apellido}</label> <br></br>
          <label>Dirección: {e.direccion}</label><br></br>
          <label>Ciudad: {e.Ciudad.nombre_ciudad}</label><br></br>
          <label>Número de teléfono: {e.telefono}</label><br></br>
          <label>Correo electrónico: {e.email}</label><br></br> 
          </div>  
        </div>
      ))}
<div className={s.divForm}>
  <ul className={s.ulForm}>
    Editar Perfil
    <li className={s.liForm}>
      <a href="#">
        {/* Renderizar el componente FormUpdate dentro del elemento li */}
        <FormUpdate />
      </a>
    </li>
  </ul>
</div>
    </div>
  )
}

export default Account
