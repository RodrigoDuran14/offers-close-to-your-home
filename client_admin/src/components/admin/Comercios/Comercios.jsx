import { useSelector, useDispatch } from "react-redux";
import { getAllCommerce } from "../../../redux/actions";
import { useEffect } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import s from "./Comercios.module.css"



function Comercios () {
    const dispatch = useDispatch()
    const allCommerce = useSelector(state => state.allCommerce)
  useEffect(()=>{
    dispatch(getAllCommerce())
  },[])
  
    return(
      
            <div className={s.container}>
            <h1>Comercios</h1>
              <table>
                <thead>
                  <tr>
                    <th>Nombre del comercio</th>
                    <th>Nombre del contacto</th>
                    <th>Email</th>
                    <th>Cargo</th>
                    <th>ciudad</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
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
                            <FiEdit />                 
                        </td>
                        <td>
                          <button>
                            <IoTrashBinOutline />
                          </button>
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