import { useState } from "react"
import axios from 'axios'
import style from './formRegister.module.css'
import { Redirect } from "react-router-dom"

export default function FormRegister() {



    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:3001/usuario",form)
        .then(res=>alert(res.data))
        .catch(err=> console.log(err.response.data))
        setShouldRedirect(true);
     }
     const [shouldRedirect, setShouldRedirect] = useState(false)
    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value       
        setForm({...form, [property] : value})
    }
    const [form, setForm] = useState({
        id_tipo_usuario: 1, 
        primer_nombre: '',
        segundo_nombre: '',
        primer_apellido: '',
        segundo_apellido: '',
        direccion: '',
        telefono: '',
        email: '',
        contraseña: '',
        id_ciudad: 0,
        estado: true,
        imagen: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
       })
       const telefono = typeof(form.telefono)
       console.log(telefono);
       return (
        <>
            {shouldRedirect ? (
                <Redirect to= "/home"/>
            ):
            (<div className={style.contenedor}>
                <div className={style.contenedorForm}>  
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="text" name="primer_nombre" value={form.primer_nombre} onChange={handleInputChange} className={style.input}/>
                            <label for= "" className={style.label}>Primer nombre</label>
                        </div>

                        <div>
                            <input type="text" name="segundo_nombre" value={form.segundo_nombre} onChange={handleInputChange} className={style.input}/>
                            <label for= "" className={style.label}>Segundo nombre</label>
                        </div>

                        <div>
                            <input type="text" name="primer_apellido" value={form.primer_apellido} onChange={handleInputChange} className={style.input}/>
                            <label for= "" className={style.label}>Primer apellido</label>
                        </div>

                        <div>
                            <input type="text" name="segundo_apellido" value={form.segundo_apellido} onChange={handleInputChange} className={style.input}/>
                            <label for= "" className={style.label}>Segundo apellido</label>
                        </div>

                        <div>
                            <input type="text" name="direccion" value={form.direccion} onChange={handleInputChange} className={style.input}/>
                            <label for= "" className={style.label}>Dirección</label>
                        </div>

                        <div>
                            <input type="text" name="telefono" value={form.telefono} onChange={handleInputChange} className={style.input}/>
                            <label for= "" className={style.label}>Teléfono</label>
                        </div>

                        <div>
                            <input type="text" name="email" value={form.email} onChange={handleInputChange} className={style.input}/>
                            <label for= "" className={style.label}>Email</label>
                        </div>

                        <div>
                            <input type="password" name="contraseña" value={form.contraseña} onChange={handleInputChange} className={style.input}/>
                            <label for= "" className={style.label}>Contraseña</label>
                        </div>

                        <div>
                            <input type="text" name="id_ciudad" value={form.id_ciudad} onChange={handleInputChange} className={style.input}/>
                            <label for= "" className={style.label}>Ciudad</label>
                        </div>

                        <button type="submit" className={style.button}>Registrase</button>
                    </form>
                </div>
            </div>)}
        </>
    );
};
