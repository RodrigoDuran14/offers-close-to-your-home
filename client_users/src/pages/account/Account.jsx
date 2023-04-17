import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsuarioByEmail } from "../../redux/actions";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import s from "./Account.module.css";
import FormUpdate from "../../components/FormUpdate/FormUpdate";
import FormUpdatePassword from "../../components/FormUpdate/FormUpdatePassword";
import LogIn from "../../assets/images/logIn.webp";

const Account = () => {
  /* ------------------- ESTADOS ------------------- */
  const usuario = useSelector(state => state.usuario) ?? [];
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const token = Cookies.get("user_token");
  const decodedToken = jwt_decode(token);
  const logIn = LogIn;

  const email = decodedToken.email;

  useEffect(() => {
    dispatch(getUsuarioByEmail(email));
  }, [dispatch, email]);

  // Actualizar el estado local con los datos del usuario
  useEffect(() => {
    if (usuario.length > 0) {
      setUserData(usuario[0]);
    }
  }, [usuario]);

  /* ------------- MENU HAMBURGUESA ------------- */

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogInClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const idUsuario = usuario.length > 0 ? usuario[0].id_usuario : null;

  return (
    <div className={s.contenedor}>
      <div className={s.contenedorInfo}>
        <div className={s.titulos}>
          <h1 className={s.tittle}>Mi cuenta:</h1>
        </div>
        <div className={s.informacion}>
          {userData && (
            <div className={s.aux}>
              {userData.imagen && (
                <img className={s.imageFile} src={userData.imagen} id="imagen" />
              )}
            </div>
          )}
        </div>
        <div className={s.text}>
          <div className={s.row}>
            <div className={s.column}>
              <label>Nombre:</label>
              <label>Dirección:</label>
              <label>Ciudad:</label>
              <label>Número de teléfono:</label>
              <label>Correo electrónico:</label>
            </div>
            <div className={s.column}>
              <label>{`${userData.primer_nombre} ${userData.segundo_nombre} ${userData.primer_apellido} ${userData.segundo_apellido}`}</label>
              <label>{userData.direccion}</label>
              <label>{userData?.Ciudad?.nombre_ciudad }</label>              
              <label>{userData.telefono}</label>
              <label>{userData.email}</label>
            </div>
          </div>
        </div>
        <div>
          <button onClick={handleLogInClick} className={s.logIn}>
            Cambiar Contraseña
          </button>
          {showProfileMenu && <FormUpdatePassword idUsuario={idUsuario} />}
        </div>
      </div>
      <div>         
          <div className={s.formUpdate}>          
         <FormUpdate idUsuario={idUsuario} />
          </div>
        {/* <ul className={s.ulForm}>
          Editar Perfil
          <li className={s.liForm}>
            <a href="#">
            
              <FormUpdate idUsuario={idUsuario} />
            </a>
          </li>
        </ul> */}
        </div>

    </div>
  );
};

export default Account;
