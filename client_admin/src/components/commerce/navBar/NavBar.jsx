import React from 'react'
import {Link} from "react-router-dom"

//Import Componentes
import DrawerMenu from '../drawerMenu/DrawerMenu'
import { AiOutlineShoppingCart } from "react-icons/ai";
import SearchBar from '../searchBar/SearchBar'

//Import Imagenes
import Logo from "../../../assets/images/SoloTextoBlanco.png"
import Icono from "../../../assets/images/SoloIconoNormal.png"

//Import Estilos
import s from './NavBar.module.css'



const NavBar = () => {

    const logoTexto = Logo;
    const logoIcono = Icono;
    
    return (
        <div className={s.container}>
            <div className={s.menu}>
                <DrawerMenu />
            </div>
            <div className={s.options}>
            <img className={s.texto} src= {logoTexto} />
            <img className={s.icono} src= {logoIcono} />
                <Link to="/" className={s.link}
                 >
                    <h4>Inicio</h4>
                </Link>
                <Link to="/misventas" className={s.link}
                >
                    <h4>Mis Ventas</h4>
                </Link>
                <Link to="/about" className={s.link}
                >
                    <h4>¿Quienes somos?</h4>
                </Link>
            </div>
            <div className={s.box1}>
                <SearchBar />
            </div>
            <div className={s.options}>
                <Link to="/login" className={s.link}>
                    <h4>Iniciar sesión</h4>
                </Link>
                <button className={s.button}> <AiOutlineShoppingCart size={25} /> </button>
            </div>
        </div>
    )
}

export default NavBar
