import { useSelector, useDispatch } from "react-redux";
import { getAllCommerce } from "../../../redux/actions";
import { useEffect } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import s from "./Comercios.module.css";
import axios from "axios";

function Comercios() {
  const dispatch = useDispatch();
  const allCommerce = useSelector((state) => state.allCommerce);
  useEffect(() => {
    dispatch(getAllCommerce());
  }, []);

  function buscarId(id_comercio) {
    const id = allCommerce.find((c) => c.id_comercio === id_comercio);
    handleBorrar(id.id_comercio);
    console.log("asd", id.id_comercio);
  }

  const handleBorrar = async (id_comercio) => {
    try {
      let a = await axios.put("http://localhost:3001/commerce", {
        id_comercio: id_comercio,
        estado: false,
      });
      console.log(a);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.container}>
      <h1 style={{ color: "var(--green-color)", margin: "15px" }}>
        Listado de comercios
      </h1>
      <table>
        <thead>
          <tr>
            <th>Nombre del comercio</th>
            <th>Nombre del contacto</th>
            <th>Email</th>
            <th>Cargo</th>
            <th>Ciudad</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {allCommerce.map((p) => {
            if (p.estado)
              return (
                <tr key={p.id_comercio}>
                  <td>{p.nombre_comercio}</td>
                  <td>{p.nombre_contacto}</td>
                  <td>{p.email}</td>
                  <td>{p.cargo}</td>
                  <td>{p.Ciudad.nombre_ciudad}</td>
                  <td>
                    <button
                      onClick={() => {
                        buscarId(p.id_comercio);
                      }}
                    >
                      Eliminar
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

export default Comercios;
