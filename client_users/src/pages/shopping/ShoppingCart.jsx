
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import CartCard from "../../components/Cart_card/CartCard"
import styles from './shopping.module.css'

export default function ShoppingCart() {
  const carrito = useSelector((state) => state.carrito);
  const display = useSelector((state) => state.display);
  console.log(carrito);
  useEffect(() => {
    window.localStorage.setItem("carrito", JSON.stringify(carrito));
    window.localStorage.getItem("carrito");
  }, [carrito]);

  const storage_cart = JSON.parse(window.localStorage.getItem("carrito"));
  
console.log(storage_cart);
  let total = 0
  carrito.forEach(producto => {
    total = total + producto.valor_con_descuento*producto.cantidad
  }); 

  return (
    <div>
      <h2>Carrito de compras</h2>
      {carrito && carrito.length > 0 ? (
        carrito.map(producto => (
          <CartCard key={producto.id}
          id_producto = {producto.id_producto}
          imagen={producto.imagen} 
          nombre={producto.nombre} 
          valor_con_descuento={producto.valor_con_descuento}
          cantidad={producto.cantidad}
          total={total}
          />
        ))
          ) : (
            <p>No hay productos en el carrito.</p>
          )}
      <div className={styles.containerTotal}>
        <div className={styles.total}>
          <div style={{fontSize: "30px", marginLeft: "15px"}}>
            <h3>Total</h3>
          </div>
          <div style={{fontSize: "30px", marginRight: "15px"}}>
            <h3>${total}</h3>
          </div>
        </div>
      </div>
      <button>Confirmar compra</button>
    </div>

  );
}
