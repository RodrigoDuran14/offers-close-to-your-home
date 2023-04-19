import Comercios from "../../components/admin/Comercios/Comercios"
import Usuarios from "../../components/admin/Usuarios/Usuarios"
import s from "./HomeAdmin.module.css"
import { Link } from "react-router-dom"

function HomeAdmin() {
   return (
      <div className={s.container}>
         <h1>Welcome to the <strong>admin dashboard</strong> bro</h1>
         <Link to="/admin/comercios">
            <button>Comercios</button>
         </Link>
         <Link to="/admin/usuarios">
            <button>Usuarios</button>
         </Link>
      </div>

   )
}

export default HomeAdmin