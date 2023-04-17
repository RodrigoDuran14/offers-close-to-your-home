import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

// ACTIONS
import { getSales } from "../../redux/actions";
import { getUsuarioByID } from "../../redux/actions";

// ESTILOS
import s from "./ShoppingHistory.module.css";

const HistorialDeCompra = () => {
  const dispatch = useDispatch();

  const { usuario } = useSelector((state) => state);
  const token = Cookies.get("user_token");
  const decodedToken = jwt_decode(token);

  const email = decodedToken.email;

  useEffect(() => {
    dispatch(getUsuarioByID(email));
    dispatch(getSales());
  }, [dispatch, email]);

  // Filtrar las compras del usuario logueado
  const comprasUsuario = useSelector((state) =>
    state.compras.filter((compra) => compra.Usuario.email === email)
  );

  return (
    <div className={s.contenedor}>
      <div className={s.tabla}>
        <div className={s.titulo}>
          <h1>Historial de compras:</h1>
        </div>
        {comprasUsuario.length > 0 ? (
          <div>
            {comprasUsuario.map((compra) => (
              <div key={compra._id}>
                <h3>Compra realizada el {compra.fecha}</h3>
                {compra.Detalle_venta.map((detalle) => (
                  <div className={s.detalle} key={detalle.Producto._id}>
                    <img className={s.img} src={detalle.Producto.imagen} />
                    <label className={s.aux}>{detalle.Producto.nombre}</label>
                    <label className={s.aux}>
                      $: {detalle.Producto.valor_con_descuento}
                    </label>
                    <label className={s.aux}>Cant: {detalle.cantidad}</label>
                    <Link to="/comentario" className={s.link}>
                      <h3> Calificar </h3>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
            <div></div>
          </div>
        ) : (
          <p>No se encontraron compras realizadas por el usuario</p>
        )}
      </div>
    </div>
  );
};

export default HistorialDeCompra;
