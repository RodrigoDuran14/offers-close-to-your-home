import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import CartCard from "../../components/Cart_card/CartCard"
import s from './shopping.module.css'

export default function ShoppingCart() {
    const state_carrito = useSelector(state => state.carrito)
    const storage_carrito = JSON.parse(window.localStorage.getItem("cart") || "[]");

    const [carrito, setCarrito] = useState([...state_carrito, ...storage_carrito])

    useEffect(() => {
        window.localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    const buyHandler = () => {
        
    }

    return (
        <div className={s.container}>
            {
                carrito.map(p => {
                    return (
                        <CartCard imagen={p.imagen} nombre={p.nombre} precio={p.precio} />
                    )
                })
            }
            <button onClick={buyHandler}>Confirmar compras</button>
        </div>
    )
}