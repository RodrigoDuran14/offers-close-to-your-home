import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCommerceByID } from "../../../../redux/actions";
import { useParams } from "react-router";
import s from "./detailCommerce.module.css"
import axios from "axios";

const DetailCommerce = ()=>{

  const dispatch = useDispatch();
  const comercio = useSelector(state=>state.comercios)

  const {id_comercio} = useParams()

  useEffect(() => {
    dispatch(getCommerceByID(id_comercio))
  }, []);


  const handleBorrar = async (id_comercio) => {
    try {
      await axios.put(`http://localhost:3001/commerce/delete/${id_comercio}`);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className={s.container}>
     <div className={s.usuario}>
        <h2 style={{ marginBottom: '15px', textAlign: 'left', fontSize: '30px' }}>Comercio</h2>
        <div className={s.datos}>
          <div style={{ backgroundImage: `url(${comercio.imagen})` }} className={s.imagen}></div>
          
          <span className={s.label}>Nombre del comercio</span>
          <h3 className={s.dato_nombre}>{comercio.nombre_comercio}</h3>

          <span className={s.label}>Nombre del contacto</span>
          <h3 className={s.dato_nombre}>{comercio.nombre_contacto}</h3>

          <span className={s.label}>Cargo</span>
          <h3 className={s.dato_nombre}>{comercio.cargo}</h3>

          <span className={s.label}>Email</span>
          <h3 className={s.dato}>{comercio.email}</h3>

          <span className={s.label}>Ciudad</span>
          <h3 className={s.dato}>{comercio?.Ciudad?.nombre_ciudad}</h3>

          <span className={s.label}>Dirección</span>
          <h3 className={s.dato}>{comercio.direccion}</h3>

          <span className={s.label}>Teléfono</span>
          <h3 className={s.dato}>{comercio.telefono}</h3>
        </div>

      </div>
      
      <button onClick={()=>{handleBorrar(comercio.id_comercio)}}>
        <div className={s.divForm}>Eliminar Comercio</div>
      </button>
    </div>
    
  );

}

export default DetailCommerce