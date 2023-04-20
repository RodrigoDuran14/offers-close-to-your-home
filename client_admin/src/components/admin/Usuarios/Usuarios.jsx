import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../../redux/actions";
import { useEffect } from "react";
import s from "./Usuarios.module.css";
import axios from "axios";

function Usuarios() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [allUsers]);

  function buscarId(id_usuario) {
    const id = allUsers.find((c) => c.id_usuario === id_usuario);
    handleBorrar(id.id_usuario);
    console.log("asd", id.id_usuario);
  }

  const handleBorrar = async (id_usuario) => {
    try {
      let a = await axios.put("http://localhost:3001/usuario/delete", {
        id_usuario: id_usuario,
        estado: false,
      });
      console.log(a);
    } catch (error) {
      console.log(error);
    }
  };

  function buscarId2(id_usuario) {
    const id = allUsers.find((c) => c.id_usuario === id_usuario);
    handledesBorrar(id.id_usuario);
    console.log("asd", id.id_usuario);
  }

  const handledesBorrar = async (id_usuario) => {
    try {
      let a = await axios.put("http://localhost:3001/usuario/delete", {
        id_usuario: id_usuario,
        estado: true,
      });
      console.log(a);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.container}>
      {allUsers.some((p) => p.estado === true) ? (
        <>
          <h2 style={{ color: "var(--green-color)", margin: "15px" }}>
            Listado de usuarios
          </h2>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>ciudad</th>
                <th>Banear</th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.map((p) => {
                if (p.estado)
                  return (
                    <tr key={p.id_usuario}>
                      <td>{p.primer_nombre}</td>
                      <td>{p.primer_apellido}</td>
                      <td>{p.email}</td>
                      <td>{p.Ciudad.nombre_ciudad}</td>
                      <td>
                        <button
                          onClick={() => {
                            buscarId(p.id_usuario);
                          }}
                        >
                          Banear
                        </button>
                      </td>
                    </tr>
                  );
              })}
            </tbody>
          </table>
          <div className={s.separador}></div>
        </>
      ) : null}
      {allUsers.some((p) => p.estado === false) ? (
        <>

          <h2 style={{ color: "var(--green-color)", margin: "15px" }}>
            Listado de usuarios baneados
          </h2>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>ciudad</th>
                <th>Desbanear</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((p) => {
                if (!p.estado)
                  return (
                    <tr key={p.id_usuario} className={s.eliminados}>
                      <td>{p.primer_nombre}</td>
                      <td>{p.primer_apellido}</td>
                      <td>{p.email}</td>
                      <td>{p.Ciudad.nombre_ciudad}</td>
                      <td>
                        <button
                          className={s.btn}
                          onClick={() => {
                            buscarId2(p.id_usuario);
                          }}
                        >
                          Desbanear
                        </button>
                      </td>
                    </tr>
                  );
              })}
            </tbody>
          </table>
        </>
      ) : null}
    </div>
  );
}

export default Usuarios;
