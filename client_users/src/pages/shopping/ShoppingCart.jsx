import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import CartCard from "../../components/Cart_card/CartCard"
import styles from './shopping.module.css'
import {cleanMercadoPago, mercadoPago} from "../../redux/actions"

export default function ShoppingCart() {
  const dispatch = useDispatch()
  const { carrito, linkMercadoPago } = useSelector((state) => state);

  useEffect(() => {
    window.localStorage.setItem("carrito", JSON.stringify(carrito));
    window.localStorage.getItem("carrito");
    return () =>{
      dispatch(cleanMercadoPago());
    }
  }, [carrito]);
  
//Suma de subtotales
  let total = 0
  carrito.forEach(producto => {
    total = total + producto.valor_con_descuento*producto.cantidad
  }); 
//Boton de mercadoPago
  const handlerPago = async ()=>{
    const response = await fetch('http://localhost:3001/buy-products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productos: carrito })
    });
    const data = await response.json();
   dispatch(mercadoPago(data.init_point))
  }
  
  return (
    <div style={{marginTop:"100px"}}>
  <h2>Carrito de compras</h2>
  {carrito.length ? (
    <React.Fragment>
      {carrito.map(producto => (
        <CartCard
          key={producto.id}
          id_producto={producto.id_producto}
          imagen={producto.imagen} 
          nombre={producto.nombre} 
          valor_con_descuento={producto.valor_con_descuento}
          cantidad={producto.cantidad}
          total={total}
        /> 
      ))}
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
      {linkMercadoPago ? (
        <div className={styles.mercadoPago}>
          <a href={linkMercadoPago}>Pagar</a>
        </div>
      ) : (
        <button onClick={handlerPago}>Confirmar compra</button>
      )}
    </React.Fragment>
  ) : (
    <p>No hay productos en el carrito.</p>
  )}
</div>

  );
}
