import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
import DrawerMenu from '../drawerMenu/DrawerMenu'
import { AiOutlineShoppingCart } from "react-icons/ai";
import s from './NavBar.module.css'

// imagenes
import Logo from "../../assets/images/SoloTextoBlanco.png";
import Icono from "../../assets/images/SoloIconoNormal.png";

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
                <Link to="/" className='link-no-decoration' style={{ margin: '0px 10px' }}>
                    <h4>Inicio</h4>
                </Link>

                <Link to="/account" className='link-no-decoration' style={{ margin: '0px 10px' }}>
                    <h4>Quiero vender</h4>
                </Link>

                <Link to="/about" className='link-no-decoration' style={{ margin: '0px 10px' }}>
                    <h4>¿Quienes somos?</h4>
                </Link>
            </div>

            <div className={s.box1}>
                <SearchBar />
            </div>

            <div className={s.options}>
                <Link to="/login" className='link-no-decoration'>
                    <h4>Iniciar sesión</h4>
                </Link>


                <button className={s.button}> <AiOutlineShoppingCart size={35} /> </button>
            </div>

        </div>
    )
}

export default NavBar
