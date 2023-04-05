import { useState } from 'react'
import Drawer from 'react-modern-drawer'
import "react-modern-drawer/dist/index.css";
import IconMenu from './IconMenu'
import s from './drawer.module.css'

export default function DrawerMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <div onClick={toggleDrawer} style={{ cursor: 'pointer' }}> <IconMenu /> </div>

            <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
                <div className={s.container}>
                    <div>
                        <h1>justOffers</h1>
                        <span>2023 - #SoyHenry</span>
                    </div>
                    <div>
                        <h2>Inicio</h2>
                        <h2>Mi cuenta</h2>
                        <h2>Mi carrito</h2>
                    </div>
                    <div>
                        <h2>Contactanos</h2>
                        <span>¿Quienes somos?</span>
                    </div>
                </div>
            </Drawer>
        </>
    )
}