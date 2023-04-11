import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import CartCard from "../../components/Cart_card/CartCard"
import s from './shopping.module.css'

export default function ShoppingCart() {
//     const state_carrito = useSelector(state => state.carrito)
//     const storage_carrito = JSON.parse(window.localStorage.getItem("cart") || "[]");

//     const [carrito, setCarrito] = useState([...state_carrito, ...storage_carrito])

//     useEffect(() => {
//         window.localStorage.setItem('carrito', JSON.stringify(carrito))
//     }, [carrito])

//     const buyHandler = () => {
        
//     }

// console.log(storage_cart);
//   return (
//     <div>
//       <h2>Carrito de compras</h2>
//       {storage_cart && storage_cart.length > 0 ? (
//         storage_cart.map(producto => (
//           <CartCard key={producto.id} 
//           imagen={producto.imagen} 
//           nombre={producto.nombre} 
//           valor_con_descuento={producto.valor_con_descuento}
//           cantidad={producto.cantidad}
//           />
//         ))
//       ) : (
//         <p>No hay productos en el carrito.</p>
//       )}
//       <button>Confirmar compra</button>
//     </div>
//   );
}

/*
export default function ShoppingCart() {
    const carrito = useSelector(state => state.carrito)
    
   

    return (
        <div className={s.container}>
            {
               storage_cart && carrito?.map(p => {
                    return (
                        <CartCard imagen={p.imagen} nombre={p.nombre} precio={p.precio} />
                    )
                })
            }
            <button onClick={buyHandler}>Confirmar compras</button>
        </div>
    )
}*/