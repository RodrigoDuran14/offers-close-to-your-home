import { useState } from "react"
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import style from './formRegister.module.css'

export default function FormRegister() {
    const dispatch = useDispatch()

    const history = useHistory()
    const navigateTo = (url) => {
        history.push(url)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:3001/usuario",form)
        .then(res=>alert(res.data))
        .catch(err=> console.log(err.response.data))
     }

    const handleInputChange = (event) => {
        const property = event.target.name;
<<<<<<< HEAD
        const value = event.target.value        
=======
        const value = event.target.value
>>>>>>> 90f7d7a9ad4c1fb2317bfe06bcc3d60bb7a47c38
        setForm({...form, [property] : value})
    }
    const [form, setForm] = useState({
        id_tipo_usuario: 1, 
        primer_nombre: '',
        segundo_nombre: '',
        primer_apellido: '',
        segundo_apellido: '',
        direccion: '',
<<<<<<< HEAD
        telefono: 0,
=======
        telefono: '',
>>>>>>> 90f7d7a9ad4c1fb2317bfe06bcc3d60bb7a47c38
        email: '',
        contraseña: '',
        id_ciudad: 0,
        estado: true,
<<<<<<< HEAD
       })
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="primer_nombre" value={form.primer_nombre} onChange={handleInputChange} className={style.input}/>
                    <label for= "" className={style.label}>Nombre1</label>
                </div>

                <div>
                    <input type="text" name="segundo_nombre" value={form.segundo_nombre} onChange={handleInputChange} className={style.input}/>
                    <label for= "" className={style.label}>Nombre2</label>
                </div>

                <div>
                    <input type="text" name="primer_apellido" value={form.primer_apellido} onChange={handleInputChange} className={style.input}/>
                    <label for= "" className={style.label}>Apellido1</label>
                </div>

                <div>
                    <input type="text" name="segundo_apellido" value={form.segundo_apellido} onChange={handleInputChange} className={style.input}/>
                    <label for= "" className={style.label}>Apellido2</label>
                </div>

                <div>
                    <input type="text" name="direccion" value={form.direccion} onChange={handleInputChange} className={style.input}/>
                    <label for= "" className={style.label}>Direccion</label>
                </div>

                <div>
                    <input type="text" name="telefono" value={form.telefono} onChange={handleInputChange} className={style.input}/>
                    <label for= "" className={style.label}>Telefono</label>
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
                
=======
        imagen: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
       })
       const telefono = typeof(form.telefono)
       console.log(telefono);
       return (
        <div>
            <form onSubmit={handleSubmit} className={style.container}>
                <input type="text" name="primer_nombre" value={form.primer_nombre} onChange={handleInputChange} className={style.input}/>
                <label for= "" className={style.label}>Nombre1</label>

                <input type="text" name="segundo_nombre" value={form.segundo_nombre} onChange={handleInputChange} className={style.input}/>
                <label for= "" className={style.label}>Nombre2</label>

                <input type="text" name="primer_apellido" value={form.primer_apellido} onChange={handleInputChange} className={style.input}/>
                <label for= "" className={style.label}>Apellido1</label>

                <input type="text" name="segundo_apellido" value={form.segundo_apellido} onChange={handleInputChange} className={style.input}/>
                <label for= "" className={style.label}>Apellido2</label>

                <input type="text" name="direccion" value={form.direccion} onChange={handleInputChange} className={style.input}/>
                <label for= "" className={style.label}>Direccion</label>

                <input type="text" name="telefono" value={form.telefono} onChange={handleInputChange} className={style.input}/>
                <label for= "" className={style.label}>Telefono</label>

                <input type="text" name="email" value={form.email} onChange={handleInputChange} className={style.input}/>
                <label for= "" className={style.label}>Email</label>

                <input type="password" name="contraseña" value={form.contraseña} onChange={handleInputChange} className={style.input}/>
                <label for= "" className={style.label}>Contraseña</label>

                <input type="text" name="id_ciudad" value={form.id_ciudad} onChange={handleInputChange} className={style.input}/>
                <label for= "" className={style.label}>Ciudad</label>

>>>>>>> 90f7d7a9ad4c1fb2317bfe06bcc3d60bb7a47c38
                <button type="submit" className={style.button}>Registrase</button>
            </form>
        </div>
    )
}