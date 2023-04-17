import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCommerceByID } from "../../../redux/actions";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import s from "./Account.module.css";
import { Link } from "react-router-dom";

const Account = () => {
  const { comercios } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = Cookies.get("commerce_token");
    const decodedToken = jwt_decode(token);
    setEmail(decodedToken.email);
    dispatch(getCommerceByID(decodedToken.email));
  }, [dispatch]);

  const userCommerce = comercios.find((commerce) => commerce.email === email);

  return (
    <div className={s.container}>
      <div className={s.contenedorInfo}>
        <h1 className={s.title}>Mi cuenta</h1>
        {userCommerce && (
          <div className={s.text}>
            <div className={s.row}>
              <div className={s.column}>
                <label>Nombre del comercio</label>
                <label>Dirección:</label>
                <label>Teléfono:</label>
                <label>Nombre del contacto:</label>
                <label>Cargo:</label>
                <label>Email:</label>
              </div>
              <div className={s.column}>
                <label>{userCommerce.nombre_comercio}</label>
                <label>{userCommerce.direccion}</label>
                <label>{userCommerce.telefono}</label>
                <label>{userCommerce.nombre_contacto}</label>
                <label>{userCommerce.cargo}</label>
                <label>{userCommerce.email}</label>
              </div>
            </div>
          </div>
        )}
      </div>
      <Link to={"/update"}>
        <div className={s.divForm}>Editar</div>
      </Link>
    </div>
  );
};

export default Account;
