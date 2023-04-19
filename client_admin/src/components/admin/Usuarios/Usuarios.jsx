import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../../redux/actions";
import { useEffect } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import s from "./Usuarios.module.css"



function Usuarios() {
  const dispatch = useDispatch()
  const allUsers = useSelector(state => state.allUsers)
  useEffect(() => {
    dispatch(getAllUsers())
  }, [])


  return (
    <div className={s.container}>
      <h1 style={{color: 'var(--green-color)', margin: '15px'}}>Listado de usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>ciudad</th>
            <th>Editar o eliminar</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.map((p) => {
            return (
              <tr key={p.id_usuario}>
                <td>{p.primer_nombre}</td>
                <td>{p.primer_apellido}</td>
                <td>{p.email}</td>
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

export default Usuarios