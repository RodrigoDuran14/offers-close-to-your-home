import React from "react";
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

  const estaLogueado = useSelector(state => state.logIn)



  // function handleClick () {
  //   dispatch(userLoggedIn("email", "contraseña"))
  // }


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
          to="/account"
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

      <div>
        {!estaLogueado ? <Link to="/log-in" className={s.link}>
          <h4>Iniciar sesión</h4>
        </Link>  : <img className={s.logIn} src={logIn}/>}
      </div>
{/* 
      <div className={s.options}>
        <Link to="/log-in" className={s.link}>
          <h4>Iniciar sesión</h4>
        </Link>
      </div> */}

      <div>
        <Link to="/shopping-cart" >
        <button className={s.button}>
          {" "}
          <AiOutlineShoppingCart size={25} />{" "}
        </button>
        </Link>
      </div>

    </div>
  );
};


export default NavBar;


