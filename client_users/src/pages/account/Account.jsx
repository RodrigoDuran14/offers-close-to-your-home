import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsuarioByID } from "../../redux/actions";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import s from "./Account.module.css";
import FormUpdate from "../../components/FormUpdate/FormUpdate";

const Account = () => {
  /* ------------------- ESTADOS ------------------- */
  const { usuario } = useSelector((state) => state);
  const dispatch = useDispatch();
  const token = Cookies.get("user_token");
  const decodedToken = jwt_decode(token);

  const email = decodedToken.email;

  useEffect(() => {
    dispatch(getUsuarioByID(email)); // Actualizar el estado con la respuesta de la acción asincrónica
  }, [dispatch]);

  const userLogin = usuario.map((e) => e.email === email);
  console.log(userLogin);

  // console.log(email);

  return (
    <div className={s.contenedor}>
      <div className={s.contenedorInfo}>
        <div className={s.titulos}>
          <h1 className={s.tittle}>Mi cuenta:</h1>
        </div>
        <div className={s.informacion}>
          {userLogin &&
            userLogin.filter((e) => (
              <div key={e.email} className={s.aux}>
                {e.imagen && (
                  <img className={s.imageFile} src={e.imagen} id="imagen" />
                )}
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
                      <label>{e.primer_nombre} {e.segundo_nombre} {e.primer_apellido} {e.segundo_apellido}</label>
                      <label>{e.direccion}</label>
                      <label>{e.Ciudad?.nombre_ciudad}</label>
                      <label>{e.telefono}</label>
                      <label>{e.email}</label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
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
  );
};

export default Account;
