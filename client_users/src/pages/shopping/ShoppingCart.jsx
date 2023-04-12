import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "../../components/Cart_card/CartCard";
import Loader from "../../components/loader/loader";
import s from "./shopping.module.css";

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
  return (
    <>
      {display ? (
        <Loader />
      ) : (
        <div>
          <h2>Carrito de compras</h2>
          {carrito && carrito.length > 0 ? (
            carrito.map((producto) => (
              <CartCard
                key={producto.id}
                id_producto={producto.id_producto}
                imagen={producto.imagen}
                nombre={producto.nombre}
                valor_con_descuento={producto.valor_con_descuento}
                cantidad={producto.cantidad}
              />
            ))
          ) : (
            <p>No hay productos en el carrito.</p>
          )}
          <button>Confirmar compra</button>
        </div>
      )}
    </>
  );
}
