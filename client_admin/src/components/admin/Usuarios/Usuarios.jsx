import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../../redux/actions";
import { useEffect } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import s from "./Usuarios.module.css"
import { Link } from "react-router-dom";



function Usuarios () {
    const dispatch = useDispatch()
    const allUsers = useSelector(state => state.allUsers)
  useEffect(()=>{
    dispatch(getAllUsers())
  },[])
  console.log(allUsers)
  

        return (
            <div className={s.container}>
            <h1>Usuarios</h1>
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>ciudad</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.length ? allUsers.map((p) => {
                     
                    return (
                      <tr key={p.id_usuario}>
                        <td>{p.primer_nombre}</td>
                        <td>{p.primer_apellido}</td>
                        <td>{p.email}</td>
                        <td>{p.Ciudad.nombre_ciudad}</td>
                        <td> 
                                   
                        </td>
                        <td>
                          <button>
                            <IoTrashBinOutline />
                          </button>
                        </td>
                      </tr>
                    );
                  }): <p>aun no hay usuarios</p>}
                </tbody>
              </table>
            </div>
          );
  }
  
  export default Usuarios