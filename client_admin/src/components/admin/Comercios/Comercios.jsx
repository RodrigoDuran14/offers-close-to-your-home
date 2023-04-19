import { useSelector, useDispatch } from "react-redux";
import { getAllCommerce } from "../../../redux/actions";
import { useEffect } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import s from "./Comercios.module.css"


function Comercios() {
  const dispatch = useDispatch()
  const allCommerce = useSelector(state => state.allCommerce)
  useEffect(() => {
    dispatch(getAllCommerce())
  }, [])

  return (

    <div className={s.container}>
      <h1 style={{color: 'var(--green-color)', margin: '15px'}}>Listado de comercios</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre del comercio</th>
            <th>Nombre del contacto</th>
            <th>Email</th>
            <th>Cargo</th>
            <th>Ciudad</th>
            <th>Editar o eliminar</th>
            
          </tr>
        </thead>
        <tbody>
          {allCommerce.map((p) => {
            return (
              <tr key={p.id_comercio}>
                <td>{p.nombre_comercio}</td>
                <td>{p.nombre_contacto}</td>
                <td>{p.email}</td>
                <td>{p.cargo}</td>
                <td>{p.Ciudad.nombre_ciudad}</td>
                <td>
                  <FiEdit size={22} color='var(--green-color)' className={s.edit} style={{ margin: '5px 0px' }}/>
                </td>                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Comercios