import React, {useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import DrawerMenu from "../drawerMenu/DrawerMenu";
import s from "./NavBar.module.css";

import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

import { commerceLoggedIn } from "../../../redux/actions";
import { getCommerceByID } from "../../../redux/actions";

// imagenes
import Logo from "../../../assets/images/SoloTextoBlanco.png";
import Icono from "../../../assets/images/SoloIconoNormal.png";
import LogIn from "../../../assets/images/logIn.webp";

const NavBar = () => {
    
  const logoTexto = Logo;
  const logoIcono = Icono;
  const logIn = LogIn;


  /* ------------- MENU HAMBURGUESA ----    --------- */
  
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
  const handleLogInClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };


  /* ------------- LOGIN MENU ------------- */

  const estaLogueado = useSelector(state => state.logIn)
  const { comercios } = useSelector((state) => state);

  const dispatch = useDispatch();
  const token = Cookies.get("commerce_token");
  const decodedToken = jwt_decode(token);

  const email = decodedToken.email;
  // console.log(token);



  useEffect(() => {
    dispatch(getCommerceByID(email)); // Actualizar el estado con la respuesta de la acción asincrónica
  }, [dispatch]);


  const userLogin = comercios.filter((e) => e.email === email);

  const imgProfile = userLogin[0]?.imagen

  /* ------------- LOGOUT ------------- */
  const logOut = false

  const handleLogOut = () => {
    dispatch(commerceLoggedIn(logOut))
  };
  
  


  return (
    <div className={s.container}>
      <div className={s.menu}>
        <DrawerMenu />
      </div>

      <div className={s.options}>
        <Link to={'/'}>
          <img className={s.texto} src={logoTexto} />
          <img className={s.icono} src={logoIcono} />
        </Link>
      </div>

      <div className={s.nav_text}>
        <Link
          to="/"
          className={s.link}
        //  style={{ margin: '0px 10px' }}
        >
          <h4>Inicio</h4>
        </Link>

        <Link
          to="/"
          className={s.link}
        // style={{ margin: '0px 10px' }}
        >
          <h4>Quiero Comprar</h4>
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
      <div>
  {!estaLogueado ? (
    <Link to="/login" className={s.link}>
      <h4>Iniciar sesión</h4>
    </Link>
  ) : (
    <div>
        <img  onClick={handleLogInClick} className={s.logIn} src={imgProfile} />
      {showProfileMenu  && (
        <div className={s.menuDesplegable}>
          <Link to="/account" className={s.link}>
            <h4>Ver perfil</h4>
          </Link>       
          <Link to="/account" className={s.link}>
            <h4>Historial de ventas</h4>
          </Link>
          <Link to="/producto" className={s.link}>
            <h4>Crear Producto</h4>
          </Link>
          <Link to="/" className={s.link} onClick={handleLogOut}>
            <h4>Cerrar sesión</h4>
          </Link>
        </div>
      )}
    </div>
  )}
</div>
    </div>
  );
};


export default NavBar;
