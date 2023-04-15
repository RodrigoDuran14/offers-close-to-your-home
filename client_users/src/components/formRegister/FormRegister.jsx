import { useState, useEffect } from "react";
import axios from "axios";
import style from "./formRegister.module.css";
import { Redirect } from "react-router-dom";
import validations from "./validations";
import bcrypt from "bcryptjs"; // librería para encriptcar contraseñas
import { getAllCities } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { Image, CloudinaryContext } from "cloudinary-react"; // para guardar las imágenes externamente 

export default function FormRegister() {
  const { ciudades } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  console.log(typeof ciudades.id_ciudad);

  const [errors, setErrors] = useState({});

  const handleSubmit = async event => {
    event.preventDefault();
  
    // Obtiene los valores del formulario
    const { primer_nombre, 
      segundo_nombre, 
      primer_apellido, 
      segundo_apellido, 
      direccion, 
      telefono, 
      email, 
      password,
      id_ciudad 
    } = form;
  
    // Realiza las validaciones
    const errors = validations({ 
      primer_nombre, 
      segundo_nombre, 
      primer_apellido, 
      segundo_apellido, 
      direccion, 
      telefono, 
      email, 
      password, 
      id_ciudad 
    });

  
    // Si hay errores, los muestra y no continúa con la solicitud
    if (Object.keys(errors).length > 0) {
      setErrors(errors); // Actualiza el estado de los errores
    } else {
      // Si no hay errores, continúa con el proceso de envío del formulario
      try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(form.password, salt);
        setForm({ ...form, password: hashedPassword });
  
        await axios
          .post("http://localhost:3001/usuario", form)
          .then(res => alert(res.data))
          .catch(err => console.log(err.response.data));
  
        setShouldRedirect(true);
      } catch (error) {
        console.error("Error al encriptar la password:", error);
      }
    }
  };

  const [shouldRedirect, setShouldRedirect] = useState(false);

  // const handleInputChange = event => {
  //   const property = event.target.name;
  //   const value = event.target.value;
  //   //   Verificar si el input es de tipo file
  //   if (event.target.type === "file") {
  //     const file = event.target.files[0]; // Obtener el archivo seleccionado
  //     setForm({ ...form, [property]: file }); // Actualizar el estado con el archivo seleccionado
  //   } else {
  //     setForm({ ...form, [property]: value });
    
  // };

  const handleInputChange = async event => {
    const property = event.target.name;
    const value = event.target.value;
    // Verificar si el input es de tipo file
    if (event.target.type === "file") {
      const file = event.target.files[0]; // Obtener el archivo seleccionado
      let valor = 0;
      if (file) valor =1 
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
        setForm({ 
          ...form, // Copia el estado actual del formulario
          imagen: imageUrl // Actualiza la propiedad 'imagen' del estado con la URL de la imagen subida
        });
      } catch (error) {
        console.error("Error al subir la imagen a Cloudinary:", error);
        // Manejar el error aquí, por ejemplo mostrar un mensaje de error al usuario
      }
    } else {
      // Actualizar el estado del formulario para otros tipos de inputs
      setForm({
        ...form,
        [property]: value
      });
    }
  }

  const [form, setForm] = useState({
    id_tipo_usuario: 1,
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    direccion: "",
    telefono: "",
    email: "",
    password: "",
    id_ciudad: null,
    estado: true,
    imagen: "",
  });

  return (
    <>
     
      {shouldRedirect ? (
        <Redirect to="/log-in" />
      ) : (

        /* ----------------------- CONTENEDOR GENERAL -----------------------*/
        <div className={style.contenedor}>
        {/* ----------------------- CONTENEDOR FORMULARIO -----------------------*/}
          <div className={style.contenedorForm}>
          <CloudinaryContext cloudName="dfmkjxjsf">
            <form onSubmit={handleSubmit}>
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
                
                {errors.primer_nombre && (
                <div className={style.errors}>{errors.primer_nombre}</div>
                )}
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
                 {errors.segundo_nombre && (
                <div className={style.errors}>{errors.segundo_nombre}</div>
                )}
               
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
                 {errors.primer_apellido && (
                <div className={style.errors}>{errors.primer_apellido}</div>
                )}
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
                 {errors.segundo_apellido && (
                <div className={style.errors}>{errors.segundo_apellido}</div>
                )}               
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
                 {errors.direccion && (
                <div className={style.errors}>{errors.direccion}</div>
                )}
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
                 {errors.telefono && (
                <div className={style.errors}>{errors.telefono}</div>
                )}
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
                 {errors.password && (
                <div className={style.errors}>{errors.email}</div>
                )}
              </div>

        {/* ----------------------- CONTRASEÑA -----------------------*/}
              <div className={style.contenedorDiv}>
              <label for="" className={style.label}>
              Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
                  className={style.input}
                />
                {errors.password && (
                <div className={style.errors}>{errors.password}</div>
                )}
              </div>

        {/* ----------------------- CIUDAD -----------------------*/}
              <div className={style.contenedorDiv}>
                <label for="" className={style.label}>
                  Ciudad
                </label>

                <div>

                {errors.id_ciudad && (
                <div className={style.errors}>{errors.id_ciudad}</div>
                )}
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
                <label htmlFor="imagen" className={style.label}>
                  Imagen
                </label>
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
                Registrase
              </button>
            </form>
            </CloudinaryContext>
          </div>
        </div>
      )}
     
    </>
  );
}
