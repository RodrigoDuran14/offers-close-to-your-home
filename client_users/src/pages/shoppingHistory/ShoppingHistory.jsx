// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Cookies from "js-cookie";
// import jwt_decode from "jwt-decode";

// // ACTIONS
// import { getSales } from "../../redux/actions";
// import { getUsuarioByID } from "../../redux/actions";

// // ESTILOS
// import s from "./ShoppingHistory.module.css";

// const HistorialDeCompra = () => {
  
//   const dispatch = useDispatch();

//   const { usuario } = useSelector((state) => state);
//   const token = Cookies.get("user_token");
//   const decodedToken = jwt_decode(token);

//   const email = decodedToken.email;



//   useEffect(() => {
//     dispatch(getUsuarioByID(email)); // Actualizar el estado con la respuesta de la acción asincrónica
//   }, [dispatch]);

//   const userLogin = usuario.filter((e) => e.email === email);

//   // me traigo mi estado globla compras
//   const { compras } = useSelector((state) => state);

//   useEffect(() => {
//     dispatch(getSales());
//   }, [dispatch]);



//   const detalleUsuario = compras[0].Usuario.email;

//   const detallesVentas = compras[0]?.Detalle_venta.map(
//     (e) => (e = e.Producto));

//   return (
//     <div className={s.contenedor}>
//       <div className={s.tabla}>
//         <div className={s.titulo}>
//           <h1>Historial de compras:</h1>
//         </div>
//             <div>
//               {detallesVentas &&
//                 detallesVentas?.map((e) => (
//                   <div className={s.detalle}>
//                       <img className={s.img} src={e?.imagen} />
//                     <label className={s.aux}>{e?.nombre}</label>                  
//                     <label className={s.aux}>$: {e?.valor_con_descuento}</label>
//                     <label className={s.aux}>Cant: {e?.cantidad}</label>
//                     </div>
//                 ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HistorialDeCompra;


import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

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
  const comprasUsuario = useSelector((state) => state.compras.filter((compra) => compra.Usuario.email === email));

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
                    <label className={s.aux}>$: {detalle.Producto.valor_con_descuento}</label>
                    <label className={s.aux}>Cant: {detalle.cantidad}</label>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <p>No se encontraron compras realizadas por el usuario</p>
        )}
      </div>
    </div>
  );
};

export default HistorialDeCompra;
