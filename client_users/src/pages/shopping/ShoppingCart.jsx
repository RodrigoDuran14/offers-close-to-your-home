import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import CartCard from "../../components/Cart_card/CartCard"
import s from './shopping.module.css'

export default function ShoppingCart() {
    const carrito = useSelector(state => state.carrito)
    
    useEffect(() => {
        window.localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    const storage_cart = JSON.parse(window.localStorage.getItem('carrito'))

    return (
        <div className={s.container}>
            {
                storage_cart.map(p => {
                    return (
                        <CartCard imagen={p.imagen} nombre={p.nombre} precio={p.precio}/>
                    )
                })
            }
            <button>Confirmar compras</button>
        </div>
    )
}