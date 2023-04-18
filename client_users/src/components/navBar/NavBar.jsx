import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import DrawerMenu from "../drawerMenu/DrawerMenu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import s from "./NavBar.module.css";

import { userLoggedIn } from "../../redux/actions";

// imagenes
import Logo from "../../assets/images/SoloTextoBlanco.png";
import Icono from "../../assets/images/SoloIconoNormal.png";
import LogIn from "../../assets/images/logIn.webp";

const NavBar = () => {
  const logoTexto = Logo;
  const logoIcono = Icono;
  const logIn = LogIn;

  /* ------------- MENU HAMBURGUESA ------------- */

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogInClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  /* ------------- LOGIN MENU ------------- */

  // const estaLogueado = useSelector(state => state.logIn)

  // Obtén el valor almacenado en el localStorage
  const estaLogueado = localStorage.getItem("estaLogueado");

  /* ------------- LOGOUT ------------- */
  const dispatch = useDispatch();
  const logOut = false;

  // const handleLogOut = () => {
  //   dispatch(userLoggedIn(logOut))
  // };

  const handleLogOut = () => {
    // Elimina el estado de inicio de sesión del almacenamiento local del navegador
    localStorage.removeItem("estaLogueado");
    dispatch(userLoggedIn(logOut));
  };
  /* ------------- LOGOUT ------------- */
  const count = useSelector(state => state.countCarrito)

  return (
    <div className={s.container}>
      <div className={s.menu}>
        <DrawerMenu />
      </div>

      <div className={s.options}>
        <Link to={"/"}>
          <img className={s.texto} src={logoTexto} />
          <img className={s.icono} src={logoIcono} />
        </Link>
      </div>

      <div className={s.nav_text}>
        <Link
          to="/"
          className={s.link}
        >
          <h4>Inicio</h4>
        </Link>

        <Link
          to="/"
          className={s.link}
        // style={{ margin: '0px 10px' }}
        >
          <h4>Quiero vender</h4>
        </Link>

        <Link
          to="/about"
          className={s.link}
        // style={{ margin: '0px 10px' }}
        >
          <h4>¿Quienes somos?</h4>
        </Link>
      </div>

      <div className={s.box1}>
        <SearchBar />
      </div>

      <div className={s.sesion}>
        {!estaLogueado ? (
          <Link to="/log-in" className={s.link}>
            <h4>Iniciar sesión</h4>
          </Link>
        ) : (
          <div>
            {estaLogueado === "google" && (
              // Opción de menú para usuario logueado con Google 
              <div>
                <img onClick={handleLogInClick} className={s.logIn} src={logIn} />
              </div>
            )}

            {showProfileMenu && (
              <div className={s.menuDesplegable}>

                <Link to="/account" className={s.link}>
                  <h4>Ver perfil</h4>
                </Link>
                <Link to="/historial-de-compra" className={s.link}>
                  <h4>Historial de compras</h4>
                </Link>
                <Link to="/" className={s.link} onClick={handleLogOut}>
                  <h4>Cerrar sesión</h4>
                </Link>
              </div>
            )}
          </div>
        )}

        <div style={{ position: "relative" }}>
          <Link to="/shopping-cart" style={{ textDecoration: "none" }}>
            <div
              style={{
                display: "inline-block",
                position: "absolute",
                top: "-10px",
                right: "6px",
              }}
            >
              <h4 style={{ fontSize: "10px", color: "red" }}>
                {count === 0 ? "" : count}
              </h4>
            </div>
            <div className={s.button}>
              <AiOutlineShoppingCart size={25} />
            </div>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default NavBar;

