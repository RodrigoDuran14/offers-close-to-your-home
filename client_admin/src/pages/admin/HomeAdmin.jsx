import Comercios from "../../components/admin/Comercios/Comercios"
import Usuarios from "../../components/admin/Usuarios/Usuarios"
import { Link } from "react-router-dom"
import s from "./HomeAdmin.module.css"

function HomeAdmin() {
   return (
      <div className={s.container}>
         <h1>Admin Dashboard</h1>
         <h2 style={{ color: 'gray', fontWeight: '500' }}>Panel de administración de la plataforma</h2>
         <hr style={{ width: '40%', margin: '25px' }} />

         <div className={s.botones}>
            <h3>Selecciona qué deseas administrar</h3>
            <Link to="/admin/comercios">
               <button style={{ width: '200px' }}>Comercios</button>
            </Link>
            <Link to="/admin/usuarios">
               <button style={{ width: '200px' }}>Usuarios</button>
            </Link>
         </div>
      </div>

   )
}

export default HomeAdmin