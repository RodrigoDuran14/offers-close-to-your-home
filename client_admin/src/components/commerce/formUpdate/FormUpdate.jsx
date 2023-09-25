import { useState, useEffect } from "react";
import axios from "axios";
import style from "./formUpdate.module.css";
import { Redirect } from "react-router-dom";
import validations from "./validation";
import bcrypt from "bcryptjs"; // librería para encriptcar contraseñas
import { getAllCities, getCategorys, updateCommerce } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { Image, CloudinaryContext } from "cloudinary-react"; // para guardar las imágenes externamente 
import Cookies from "js-cookie";


export default function FormUpdate() {
  const { ciudades, categorys } = useSelector(state => state);
  const dispatch = useDispatch();

  const session = Cookies.get("commerce_session");// trae los datos de las cookies
console.log(session)
let values = JSON.parse(session)//convierte a json los datos

let comercio = values.dataValues// estan todos los datos del comercio o usuario como un objeto
console.log(comercio)

  useEffect(() => {
    dispatch(getAllCities());
    dispatch(getCategorys())
    setForm({
      id_comercio: comercio.id_comercio,
        id_ciudad: comercio.id_ciudad,
        id_categoria_comercio: comercio.id_categoria_comercio,
        nombre_comercio: comercio.nombre_comercio,
        direccion: comercio.direccion,
        telefono: comercio.telefono,
        estado: true,
        nombre_contacto: comercio.nombre_contacto,
        cargo: comercio.cargo,
        email: comercio.email,
        imagen: comercio.imagen,
    })
  }, [dispatch]);


  console.log(typeof ciudades.id_ciudad);

  const [errors, setErrors] = useState({});

  const handleSubmit = async event => {
    event.preventDefault();
  
    // Obtiene los valores del formulario
    const {id_categoria_comercio,
      id_ciudad,
      nombre_comercio,
      direccion,
      telefono,
      estado,
      nombre_contacto,
      cargo,
      email,
      imagen, 
    } = form;
  
    // Realiza las validaciones
    const errors = validations({ 
      id_categoria_comercio,
      id_ciudad,
      nombre_comercio,
      direccion,
      telefono,
      estado,
      nombre_contacto,
      cargo,
      email,
      imagen,
    });

  
    // Si hay errores, los muestra y no continúa con la solicitud
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      console.log("FORME: ", errors)
      // Actualiza el estado de los errores
    } else {
      // Si no hay errores, continúa con el proceso de envío del formulario
      try {
        //const salt = bcrypt.genSaltSync(10);
        //const hashedPassword = bcrypt.hashSync(form.password, salt);
        //setForm({ ...form, password: hashedPassword });
        console.log("FORM: ", form)
        dispatch(updateCommerce(form))
        //await axios
        //  .put("http://localhost:3001/commerce", form)
        //  .then(res => alert(res.data))
        //  .catch(err => console.log(err.response.data));
        Cookies.set('commerce_session', JSON.stringify(form), { secure: true, sameSite: 'strict' });

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
      id_categoria_comercio: null,
      id_ciudad: null,
      nombre_comercio: "",
      direccion: "",
      telefono: "",
      estado: true,
      nombre_contacto: "",
      cargo: "",
      email: "",
      imagen: "",
  });

  console.log("form: ", form)
  return (
    <>
     <div className={style.link}>
      {shouldRedirect ? (
        <Redirect to="/home" />
      ) : (
        /* ----------------------- CONTENEDOR GENERAL -----------------------*/
        <div className={style.contenedor}>
        {/* ----------------------- CONTENEDOR FORMULARIO -----------------------*/}
          <div className={style.contenedorForm}>
          <CloudinaryContext cloudName="dfmkjxjsf">
            <form onSubmit={handleSubmit}>
        {/* ----------------------- NOMBRE DE COMERCIO -----------------------*/}
        <div className={style.contenedorDiv}>
              <label for="" className={style.label}>
                  Nombre del comercio
                </label>
                <input
                  type="text"
                  name="nombre_comercio"
                  value={form.nombre_comercio}
                  onChange={handleInputChange}
                  className={style.input}
                />
                
                {errors.nombre_comercio && (
                <div className={style.errors}>{errors.nombre_comercio}</div>
                )}
              </div>

      {/* ----------------------- NOMBRE DE CONTACTO -----------------------*/}
              <div className={style.contenedorDiv}>
              <label for="" className={style.label}>
                  Nombre de contacto
                </label>
                <input
                  type="text"
                  name="nombre_contacto"
                  value={form.nombre_contacto}
                  onChange={handleInputChange}
                  className={style.input}
                />
                
                {errors.nombre_contacto && (
                <div className={style.errors}>{errors.nombre_contacto}</div>
                )}
              </div>


              {/* ----------------------- CARGO -----------------------*/}
              <div className={style.contenedorDiv}>
              <label for="" className={style.label}>
                  Cargo
                </label>
                <input
                  type="text"
                  name="cargo"
                  value={form.cargo}
                  onChange={handleInputChange}
                  className={style.input}
                />
                
                {errors.cargo && (
                <div className={style.errors}>{errors.cargo}</div>
                )}
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


              {/* ----------------------- CATEGORIA -----------------------*/}
              <div className={style.contenedorDiv}>
                <label for="" className={style.label}>
                  Categoria
                </label>

                <div>

                {errors.id_categoria_comercio && (
                <div className={style.errors}>{errors.id_categoria_comercio}</div>
                )}
                <div className={style.contenedorDiv}>
                  <select
                    name="id_categoria_comercio"
                    onChange={e => handleInputChange(e)}
                    className={style.select}
                  >
                   <option>Selecciona una categoria de comercio</option>
                    {categorys &&
                      categorys.map(c => (
                        <option key = {c.id_categoria_comercio} value={c.id_categoria_comercio} primary={c.nombre_categoria_comercio}>
                          {c.nombre_categoria_comercio}
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
                    alt="foto perfil"
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
      )}
     </div>
    </>
  );
}