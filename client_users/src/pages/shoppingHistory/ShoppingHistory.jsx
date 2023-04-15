import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getSales } from "../../redux/actions";
// ESTILOS
import s from "./ShoppingHistory.module.css";

const HistorialDeCompra = () => {
  // me traigo mi estado globla compras
  const { compras } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSales());
  }, [dispatch]);



  const detallesComercio = compras[0]?.Detalle_venta.map(
    (e) => (e = e.Comercio)
  );

  const detallesVentas = compras[0]?.Detalle_venta.map(
    (e) => (e = e.Producto));


  //   console.log(detallesComercio);

  return (
    <div className={s.contenedor}>
      <div className={s.tabla}>
        <div className={s.titulo}>
          <h1>Historial de compras:</h1>
        </div>
            <div>
              {detallesVentas &&
                detallesVentas?.map((e) => (
                  <div className={s.detalle}>
                      <img className={s.img} src={e?.imagen} />
                    <label className={s.aux}>{e?.nombre}</label>                  
                    <label className={s.aux}>$: {e?.valor_con_descuento}</label>
                    <label className={s.aux}>Cant: {e?.cantidad}</label>
                    </div>
                ))}
        </div>
      </div>
    </div>
  );
};

export default HistorialDeCompra;
