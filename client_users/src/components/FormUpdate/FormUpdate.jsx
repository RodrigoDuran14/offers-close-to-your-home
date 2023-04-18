import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./FormUpdate.module.css";
import { getAllCities, userLoggedIn, getUserById } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { Image, CloudinaryContext } from "cloudinary-react"; // para guardar las imágenes externamente 
import swal from "sweetalert";

export default function FormUpdate({ idUsuario, updateUserData }) {
  const { ciudades } = useSelector(state => state);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id_usuario: null,
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    direccion: "",
    telefono: "",
    email: "",
    id_ciudad: null,
    imagen: "",
  });
  const updatedUserData = updateUserData;
  console.log(updatedUserData);
  const usuarioId = idUsuario;
  //const { idUsuario } = props; //recibe por props el id_usuario que se le envía desde el componente Account
  console.log(usuarioId);
  useEffect(() => {
    dispatch(getAllCities()); // ejecutamos la action que trae todas las ciudades para mostrarlas en el input ciudad
  }, [dispatch]);

  useEffect(() => {
    setForm(prevForm => ({
      ...prevForm,
      id_usuario: idUsuario
    }));
  }, [idUsuario]);
  const handleSubmit = async (event) => {
    event.preventDefault();
      // captura de datos del estado form
      const data = {
      id_usuario: form.id_usuario,
      primer_nombre: form.primer_nombre,
      segundo_nombre: form.segundo_nombre,
      primer_apellido: form.primer_apellido,
      segundo_apellido: form.segundo_apellido,
      direccion: form.direccion,
      telefono: form.telefono,
      email: form.email,
      id_ciudad: form.id_ciudad,
      estado: form.estado,
      imagen: form.imagen
    };
  
    // Remover propiedades con valores falsy (vacíos) del objeto data
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => !!value)
    );
  
    await axios
      .put(`http://localhost:3001/usuario`, filteredData)
      .then(res => swal({
        title: 'Actualización Exitosa',
        text: 'Ya puedes ver tus cambios reflejados',
        icon: 'success',
        timer: '2000'
      }))
      
      //dispatch(getUserById(usuarioId))
       window.location.reload() // Actualiza la página     
      .catch(err => swal({
        text: 'Error',
        text: 'intente nuevamente',
        icon: 'error',
        timer: '2000',
        button: 'Accept'
      }));
  };  

  const handleInputChange = async event => {
    const property = event.target.name;
    const value = event.target.value;
    // Verificar si el input es de tipo file
    if (event.target.type === "file") {
      const file = event.target.files[0]; // Obtener el archivo seleccionado
      let valor = 0;
      if (file) valor = 1;
      console.log(valor);
      // Subir la imagen a Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ajr7own3"); // Reemplazar con tu upload preset de Cloudinary
      formData.append("api_key", "581299476786456"); // Reemplazar con tu API Key de Cloudinary

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dfmkjxjsf/image/upload",
          formData
        );

        // Obtener la URL de la imagen subida desde la respuesta de Cloudinary
        console.log(response.data.secure_url);
        const imageUrl = response.data.secure_url;

        // Actualizar el estado del formulario con la URL de la imagen subida
        setForm(prevForm => ({
          ...prevForm, // Copia el estado actual del formulario
          imagen: imageUrl // Actualiza la propiedad 'imagen' del estado con la URL de la imagen subida
        }));
      } catch (error) {
        console.error("Error al subir la imagen a Cloudinary:", error);
        // Manejar el error aquí, por ejemplo mostrar un mensaje de error al usuario
      }
    } else {
      // Actualizar el estado del formulario para otros tipos de inputs
      setForm(prevForm => ({
        ...prevForm,
        [property]: value
      }));
    }
  };



  return (
    <>
     { /* ----------------------- CONTENEDOR GENERAL -----------------------*/}
        <div className={style.contenedor}>
        {/* ----------------------- CONTENEDOR FORMULARIO -----------------------*/}
          <div className={style.contenedorForm}>
          <CloudinaryContext cloudName="dfmkjxjsf">
            <form onSubmit={handleSubmit}>
            <label for="" className={style.label2}>
                  Actualizar datos de Perfil
                </label>
        {/* ----------------------- PRIMER NOMBRE -----------------------*/}
              
              <div className={style.nombres}>             
              <div className={style.contenedorDiv}>                
              <label for="" className={style.label2}>
                  Nombre
                </label>
                <input
                  type="text"
                  name="primer_nombre"
                  value={form.primer_nombre}
                  onChange={handleInputChange}
                  className={style.input2}
                />              
              </div>

        {/* ----------------------- SEGUNDO NOMBRE -----------------------*/}
              <div className={style.contenedorDiv}>
              <label for="" className={style.label2}>
                  Segundo nombre
                </label>
                <input
                  type="text"
                  name="segundo_nombre"
                  value={form.segundo_nombre}
                  onChange={handleInputChange}
                  className={style.input2}
                />
                 </div>
                 </div>

        {/* ----------------------- PRIMER APELLIDO -----------------------*/}
        <div className={style.apellidos}>
             <div className={style.contenedorDiv}>
                
              <label for="" className={style.label2}>
                  Apellido
                </label>
                <input
                  type="text"
                  name="primer_apellido"
                  value={form.primer_apellido}
                  onChange={handleInputChange}
                  className={style.input2}
                />
                 </div>

        {/* ----------------------- SEGUNDO APELLIDO -----------------------*/}
              <div className={style.contenedorDiv}>
              <label for="" className={style.label2}>
                  Segundo apellido
                </label>
                <input
                  type="text"
                  name="segundo_apellido"
                  value={form.segundo_apellido}
                  onChange={handleInputChange}
                  className={style.input2}
                />
                </div>
              </div>


        {/* ----------------------- DIRECCION -----------------------*/}
              <div className={style.contenedorDiv}>
              <label for="" className={style.label}>
                  Dirección
                </label>
                <input
                  type="text"
                  name="direccion"
                  value={form.direccion}
                  onChange={handleInputChange}
                  className={style.input}
                />
                  </div>

        {/* ----------------------- TELEFONO -----------------------*/}
              <div className={style.contenedorDiv}>
              <label for="" className={style.label}>
                  Teléfono
                </label>
                <input
                  type="text"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleInputChange}
                  className={style.input}
                />
              </div>

        {/* ----------------------- EMAIL -----------------------*/}
              <div className={style.contenedorDiv}>
              <label for="" className={style.label}>
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className={style.input}
                />
              </div>


        {/* ----------------------- CIUDAD -----------------------*/}
              <div className={style.contenedorDiv}>
                <label for="" className={style.label}>
                  Ciudad
                </label>

                <div>
                <div className={style.contenedorDiv}>
                  <select
                    name="id_ciudad"
                    onChange={e => handleInputChange(e)}
                    className={style.select}
                  >
                   <option>Selecciona una ciudad</option>
                    {ciudades &&
                      ciudades.map(c => (
                        <option key = {c.id_ciudad} value={c.id_ciudad} primary={c.nombre_ciudad}>
                          {c.nombre_ciudad}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              </div>

        {/* ----------------------- IMAGEN -----------------------*/}
              <div className={style.contenedorDiv}>
              <label htmlFor="" className={style.label}>
                  Imagen
                </label>
                <input
                  type="file"
                  id="imagen"
                  name="imagen"
                  onChange={handleInputChange}
                  className={style.input}
                />
                <div>
                  </div>
 
        {/* ----------------------- VISTA PREVIA IMAGEN -----------------------*/}
                {form.imagen && (
                  <img
                    className={style.imageFile}
                    src={form.imagen}
                    id="imagen"
                  />
                )}
              </div>

              <button type="submit" className={style.button}>
                Actualizar
              </button>
            </form>
            </CloudinaryContext>
          </div>
        
      
     </div>
    </>
  );
}
