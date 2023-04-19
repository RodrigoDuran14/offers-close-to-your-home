import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserById } from "../../../../redux/actions";
import { useParams } from "react-router";
import s from "./DetailUser.module.css"
import axios from "axios";

const DetailUser = ()=>{

  const dispatch = useDispatch();
  const usuario = useSelector(state=>state.usuario)

  const {id_usuario} = useParams()

  useEffect(() => {
    dispatch(getUserById(id_usuario))
  }, []);

  const nombreUsuario = usuario.primer_nombre + ' ' + usuario?.segundo_nombre + ' ' + usuario.primer_apellido + ' ' + usuario?.segundo_apellido

  const handleBorrar = async (id_usuario) => {
    try {
      await axios.put(`http://localhost:3001/usuario/delete/${id_usuario}`);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className={s.container}>
     <div className={s.usuario}>
        <h2 style={{ marginBottom: '15px', textAlign: 'left', fontSize: '30px' }}>Usuario</h2>
        <div className={s.datos}>
          <div style={{ backgroundImage: `url(${usuario.imagen})` }} className={s.imagen}></div>
          
          <span className={s.label}>Nombre</span>
          <h3 className={s.dato_nombre}>{nombreUsuario}</h3>

          <span className={s.label}>Email</span>
          <h3 className={s.dato}>{usuario.email}</h3>

          <span className={s.label}>Ciudad</span>
          <h3 className={s.dato}>{usuario?.Ciudad?.nombre_ciudad}</h3>

          <span className={s.label}>Dirección</span>
          <h3 className={s.dato}>{usuario.direccion}</h3>

          <span className={s.label}>Teléfono</span>
          <h3 className={s.dato}>{usuario.telefono}</h3>
        </div>

      </div>
      
      <button onClick={()=>{handleBorrar(usuario.id_usuario)}}>
        <div className={s.divForm}>Eliminar usuario</div>
      </button>
    </div>
    
  );

}

export default DetailUser