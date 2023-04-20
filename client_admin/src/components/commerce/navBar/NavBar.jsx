import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import DrawerMenu from "../drawerMenu/DrawerMenu";

import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

import { commerceLoggedIn } from "../../../redux/actions";
import { getCommerceByID } from "../../../redux/actions";

// imagenes
import Logo from "../../../assets/images/SoloTextoBlanco.png";
import Icono from "../../../assets/images/SoloIconoNormal.png";
import Profile from "../../../assets/images/profile.png";

import s from "./NavBar.module.css";
const NavBar = () => {
  const logoTexto = Logo;
  const logoIcono = Icono;
  const profile = Profile;
  const location = useLocation();

  const URLUSERS = "";

  /* ------------- MENU HAMBURGUESA ----    --------- */

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogInClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  /* ------------- LOGIN MENU ------------- */
  const { comercios } = useSelector((state) => state);

  const dispatch = useDispatch();

  const email = useMemo(() => {
    const numToken = Cookies.get("commerce_token");
    let decodedToken = null;

    try {
      decodedToken = jwt_decode(numToken);
    } catch (error) {
      // Si hay algún error decodificando el token, lo más probable es que no sea válido
      console.error(error);
      decodedToken = null;
    }

    return decodedToken ? decodedToken.email : null;
  }, []);

  useEffect(() => {
    if (email) {
      dispatch(getCommerceByID(email)); // Actualizar el estado con la respuesta de la acción asincrónica
    }
  }, [dispatch, email]);

  const userLogin = useMemo(
    () => comercios.length !== 0 && comercios.filter((e) => e.email === email),
    [comercios, email]
  );
  const imgProfile = userLogin[0]?.imagen;

  const estaLogueado = localStorage.getItem("estaLogueado");

  /* ------------- LOGOUT ------------- */
  const logOut = false;

  const handleLogOut = () => {
    window.localStorage.removeItem("estaLogueado");
    Cookies.set("commerce_session", []);
    dispatch(commerceLoggedIn(logOut));
  };

  return (
    <div className={s.container}>
      <div className={s.menu}>
        <DrawerMenu />
      </div>

      {location.pathname == "/admin" && (
        <>
          <div className={s.options}>
            <Link to={"/admin"}>
              <img className={s.texto} src={logoTexto} />
              <img className={s.icono} src={logoIcono} />
            </Link>
          </div>
          <Link to="/admin" className={s.link}>
            <h4>Inicio</h4>
          </Link>
          <Link to={"/"}>
            <button onClick={handleLogOut}>Cerrar sesion</button>
          </Link>{" "}
        </>
      )}

      {location.pathname == "/admin/comercios" && (
        <>
          <div className={s.options}>
            <Link to={"/admin"}>
              <img className={s.texto} src={logoTexto} />
              <img className={s.icono} src={logoIcono} />
            </Link>
          </div>
          <Link to="/admin" className={s.link}>
            <h4>Inicio</h4>
          </Link>
          <Link to={"/"}>
            <button onClick={handleLogOut}>Cerrar sesion</button>
          </Link>{" "}
        </>
      )}

      {location.pathname == "/admin/usuarios" && (
        <>
          <div className={s.options}>
            <Link to={"/admin"}>
              <img className={s.texto} src={logoTexto} />
              <img className={s.icono} src={logoIcono} />
            </Link>
          </div>
          <Link to="/admin" className={s.link}>
            <h4>Inicio</h4>
          </Link>
          <Link to={"/"}>
            <button onClick={handleLogOut}>Cerrar sesion</button>
          </Link>
        </>
      )}

      {location.pathname == "/about" && (
        <>
          {" "}
          <div className={s.options}>
            <Link to={"/home"}>
              <img className={s.texto} src={logoTexto} />
              <img className={s.icono} src={logoIcono} />
            </Link>
          </div>
          <div className={s.nav_text}>
            <Link to="/home" className={s.link}>
              <h4>Inicio</h4>
            </Link>

            <Link to={`${URLUSERS}`} className={s.link}>
              <h4>Quiero Comprar</h4>
            </Link>
          </div>
          <div className={s.box1}>
            <SearchBar />
          </div>
          <div className={s.sesion}>
            {!estaLogueado ? (
              <Link to="/login" className={s.link}>
                <h4>Iniciar sesión</h4>
              </Link>
            ) : (
              <div>
                <img
                  onClick={handleLogInClick}
                  className={s.logIn}
                  src={profile}
                />
                {showProfileMenu && (
                  <div className={s.menuDesplegable}>
                    <Link to="/account" className={s.link_menu}>
                      <h4>Ver perfil</h4>
                    </Link>
                    <Link to="/producto" className={s.link_menu}>
                      <h4>Crear Producto</h4>
                    </Link>
                    <Link to="/" className={s.link_menu} onClick={handleLogOut}>
                      <h4>Cerrar sesión</h4>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>{" "}
        </>
      )}

      {location.pathname == "/account" && (
        <>
          {" "}
          <div className={s.options}>
            <Link to={"/home"}>
              <img className={s.texto} src={logoTexto} />
              <img className={s.icono} src={logoIcono} />
            </Link>
          </div>
          <div className={s.nav_text}>
            <Link to="/home" className={s.link}>
              <h4>Inicio</h4>
            </Link>

            <Link to={`${URLUSERS}`} className={s.link}>
              <h4>Quiero Comprar</h4>
            </Link>

            <Link to="/about" className={s.link}>
              <h4>¿Quienes somos?</h4>
            </Link>
          </div>
          <div className={s.box1}>
            <SearchBar />
          </div>
          <div className={s.sesion}>
            {!estaLogueado ? (
              <Link to="/login" className={s.link}>
                <h4>Iniciar sesión</h4>
              </Link>
            ) : (
              <div>
                <img
                  onClick={handleLogInClick}
                  className={s.logIn}
                  src={profile}
                />
                {showProfileMenu && (
                  <div className={s.menuDesplegable}>
                    <Link to="/producto" className={s.link_menu}>
                      <h4>Crear Producto</h4>
                    </Link>
                    <Link to="/" className={s.link_menu} onClick={handleLogOut}>
                      <h4>Cerrar sesión</h4>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>{" "}
        </>
      )}

      {location.pathname == "/home" && (
        <>
          <div className={s.options}>
            <Link to={"/home"}>
              <img className={s.texto} src={logoTexto} />
              <img className={s.icono} src={logoIcono} />
            </Link>
          </div>
          <div className={s.nav_text}>
            <Link to={`${URLUSERS}`} className={s.link}>
              <h4>Quiero Comprar</h4>
            </Link>

            <Link to="/about" className={s.link}>
              <h4>¿Quienes somos?</h4>
            </Link>
          </div>
          <div className={s.box1}>
            <SearchBar />
          </div>
          <div className={s.sesion}>
            {!estaLogueado ? (
              <Link to="/login" className={s.link}>
                <h4>Iniciar sesión</h4>
              </Link>
            ) : (
              <div>
                <img
                  onClick={handleLogInClick}
                  className={s.logIn}
                  src={profile}
                />
                {showProfileMenu && (
                  <div className={s.menuDesplegable}>
                    <Link to="/account" className={s.link_menu}>
                      <h4>Ver perfil</h4>
                    </Link>
                    <Link to="/producto" className={s.link_menu}>
                      <h4>Crear Producto</h4>
                    </Link>
                    <Link to="/" className={s.link_menu} onClick={handleLogOut}>
                      <h4>Cerrar sesión</h4>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}

      {location.pathname == "/producto" && (
        <>
          {" "}
          <div className={s.options}>
            <Link to={"/home"}>
              <img className={s.texto} src={logoTexto} />
              <img className={s.icono} src={logoIcono} />
            </Link>
          </div>
          <div className={s.nav_text}>
            <Link to="/home" className={s.link}>
              <h4>Inicio</h4>
            </Link>

            <Link to={`${URLUSERS}`} className={s.link}>
              <h4>Quiero Comprar</h4>
            </Link>

            <Link to="/about" className={s.link}>
              <h4>¿Quienes somos?</h4>
            </Link>
          </div>
          <div className={s.box1}>
            <SearchBar />
          </div>
          <div className={s.sesion}>
            {!estaLogueado ? (
              <Link to="/login" className={s.link}>
                <h4>Iniciar sesión</h4>
              </Link>
            ) : (
              <div>
                <img
                  onClick={handleLogInClick}
                  className={s.logIn}
                  src={profile}
                />
                {showProfileMenu && (
                  <div className={s.menuDesplegable}>
                    <Link to="/account" className={s.link_menu}>
                      <h4>Ver perfil</h4>
                    </Link>

                    <Link to="/" className={s.link_menu} onClick={handleLogOut}>
                      <h4>Cerrar sesión</h4>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>{" "}
        </>
      )}

      {location.pathname == "/product/" && (
        <>
          {" "}
          <div className={s.options}>
            <Link to={"/home"}>
              <img className={s.texto} src={logoTexto} />
              <img className={s.icono} src={logoIcono} />
            </Link>
          </div>
          <div className={s.nav_text}>
            <Link to="/home" className={s.link}>
              <h4>Inicio</h4>
            </Link>

            <Link to={`${URLUSERS}`} className={s.link}>
              <h4>Quiero Comprar</h4>
            </Link>

            <Link to="/about" className={s.link}>
              <h4>¿Quienes somos?</h4>
            </Link>
          </div>
          <div className={s.box1}>
            <SearchBar />
          </div>
          <div className={s.sesion}>
            {!estaLogueado ? (
              <Link to="/login" className={s.link}>
                <h4>Iniciar sesión</h4>
              </Link>
            ) : (
              <div>
                <img
                  onClick={handleLogInClick}
                  className={s.logIn}
                  src={profile}
                />
                {showProfileMenu && (
                  <div className={s.menuDesplegable}>
                    <Link to="/account" className={s.link_menu}>
                      <h4>Ver perfil</h4>
                    </Link>
                    <Link to="/producto" className={s.link_menu}>
                      <h4>Crear Producto</h4>
                    </Link>
                    <Link to="/" className={s.link_menu} onClick={handleLogOut}>
                      <h4>Cerrar sesión</h4>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>{" "}
        </>
      )}

      {location.pathname == "/registrar-comercio" && (
        <>
          {" "}
          <div className={s.options}>
            <Link to={"/home"}>
              <img className={s.texto} src={logoTexto} />
              <img className={s.icono} src={logoIcono} />
            </Link>
          </div>
          <div className={s.nav_text}>
            <Link to="/home" className={s.link}>
              <h4>Inicio</h4>
            </Link>

            <Link to={`${URLUSERS}`} className={s.link}>
              <h4>Quiero Comprar</h4>
            </Link>

            <Link to="/about" className={s.link}>
              <h4>¿Quienes somos?</h4>
            </Link>
          </div>
          <div className={s.box1}>
            <SearchBar />
          </div>
          <div className={s.sesion}>
            {!estaLogueado ? (
              <Link to="/login" className={s.link}>
                <h4>Iniciar sesión</h4>
              </Link>
            ) : (
              <div>
                <img
                  onClick={handleLogInClick}
                  className={s.logIn}
                  src={profile}
                />
                {showProfileMenu && (
                  <div className={s.menuDesplegable}>
                    <Link to="/account" className={s.link_menu}>
                      <h4>Ver perfil</h4>
                    </Link>
                    <Link to="/producto" className={s.link_menu}>
                      <h4>Crear Producto</h4>
                    </Link>
                    <Link to="/" className={s.link_menu} onClick={handleLogOut}>
                      <h4>Cerrar sesión</h4>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>{" "}
        </>
      )}

      {location.pathname == "/update" && (
        <>
          {" "}
          <div className={s.options}>
            <Link to={"/home"}>
              <img className={s.texto} src={logoTexto} />
              <img className={s.icono} src={logoIcono} />
            </Link>
          </div>
          <div className={s.nav_text}>
            <Link to="/home" className={s.link}>
              <h4>Inicio</h4>
            </Link>

            <Link to={`${URLUSERS}`} className={s.link}>
              <h4>Quiero Comprar</h4>
            </Link>

            <Link to="/about" className={s.link}>
              <h4>¿Quienes somos?</h4>
            </Link>
          </div>
          <div className={s.box1}>
            <SearchBar />
          </div>
          <div className={s.sesion}>
            {!estaLogueado ? (
              <Link to="/login" className={s.link}>
                <h4>Iniciar sesión</h4>
              </Link>
            ) : (
              <div>
                <img
                  onClick={handleLogInClick}
                  className={s.logIn}
                  src={profile}
                />
                {showProfileMenu && (
                  <div className={s.menuDesplegable}>
                    <Link to="/account" className={s.link_menu}>
                      <h4>Ver perfil</h4>
                    </Link>
                    <Link to="/producto" className={s.link_menu}>
                      <h4>Crear Producto</h4>
                    </Link>
                    <Link to="/" className={s.link_menu} onClick={handleLogOut}>
                      <h4>Cerrar sesión</h4>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default NavBar;
