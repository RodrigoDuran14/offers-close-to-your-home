import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import CartCard from "../../components/Cart_card/CartCard"
import enviarStock from "./enviarStock"
import { cleanMercadoPago, getUserById, mercadoPago } from "../../redux/actions"
import { clean } from "./clean"
import { date } from "./date"
import { mail } from "./user"
import axios from "axios"
import swal from "sweetalert"

import styles from './shopping.module.css'


export default function ShoppingCart() {
  const dispatch = useDispatch()
  const { carrito, linkMercadoPago, countCarrito, usuario } = useSelector((state) => state);
  console.log(usuario);
  useEffect(() => {
    const email = mail()
    window.localStorage.setItem("carrito", JSON.stringify(carrito));
    window.localStorage.setItem("count", JSON.stringify(countCarrito));
    // const cart = window.localStorage.getItem(JSON.parse("carrito"));

    console.log('STOCK DEL CARRITO', enviarStock(carrito));

    dispatch(getUserById(email))
    return () => {
      dispatch(cleanMercadoPago());
    }
  }, [carrito]);
  //Suma de subtotales
  let total = 0
  carrito.forEach(producto => {
    total = total + producto.valor_con_descuento * producto.cantidad
  });

  //Boton de mercadoPago
  const handlerPago = async () => {
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
  console.log(usuario);
  //post a venta
  const handlerDetalleVenta = async () => {
    const fecha = date();
    const detalle_venta = clean(carrito);
    const valor_total_venta = detalle_venta.reduce((a, b) => {
      return a + b.valor_total_cantidad
    }, 0)
    const venta = {
      fecha,
      valor_total_venta,
      id_usuario: usuario[0].id_usuario,
      detalle_venta,
      estado:false
    }
    await axios.post("http://localhost:3001/venta", venta)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        swal({
          title: "Ocurrio un error",
          text: `error`,
          icon: "error",
          timer: "3000"
        })
      })
  }
  return (
    <div style={{ marginTop: "100px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.titulo}>
          <h2>Carrito de compras</h2>
        </div>
      </div>
      {carrito.length ? (
        <div style={{ marginBottom: "120px" }}>
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
              <div style={{ fontSize: "30px", marginLeft: "15px" }}>
                <h3>Total</h3>
              </div>
              <div style={{ fontSize: "30px", marginRight: "15px" }}>
                <h3>${total}</h3>
              </div>
            </div>
          </div>
          {linkMercadoPago ? (
            <div className={styles.mercadoPago}>
              <a
                target="_blank"
                onClick={handlerDetalleVenta}
                href={linkMercadoPago}>Pagar</a>
            </div>
          ) : (
            <button onClick={handlerPago}>Confirmar compra</button>
          )}
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className={styles.text}>
            <div>
              <p>No hay productos en el carrito.</p>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}
