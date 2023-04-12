import { useState, useEffect } from "react";
import axios from "axios";
import style from "./formRegister.module.css";
import { Redirect } from "react-router-dom";
import validations from "./validations";
import bcrypt from "bcryptjs";
import { getAllCities } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";


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
    const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, direccion, telefono, email, contraseña } = form;
  
    // Realiza las validaciones
    const errors = validations({ primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, direccion, telefono, email, contraseña });
  
    // Si hay errores, los muestra y no continúa con la solicitud
    if (Object.keys(errors).length > 0) {
      setErrors(errors); // Actualiza el estado de los errores
    } else {
      // Si no hay errores, continúa con el proceso de envío del formulario
      try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(form.contraseña, salt);
        setForm({ ...form, contraseña: hashedPassword });
  
        await axios
          .post("http://localhost:3001/usuario", form)
          .then(res => alert(res.data))
          .catch(err => console.log(err.response.data));
  
        setShouldRedirect(true);
      } catch (error) {
        console.error("Error al encriptar la contraseña:", error);
      }
    }
  };

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const handleInputChange = event => {
    const property = event.target.name;
    const value = event.target.value;
    //   Verificar si el input es de tipo file
    if (event.target.type === "file") {
      const file = event.target.files[0]; // Obtener el archivo seleccionado
      setForm({ ...form, [property]: file }); // Actualizar el estado con el archivo seleccionado
    } else {
      setForm({ ...form, [property]: value });
    }
  };
  const [form, setForm] = useState({
    id_tipo_usuario: 1,
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    direccion: "",
    telefono: "",
    email: "",
    contraseña: "",
    id_ciudad: 0,
    estado: true,
    imagen: "",
  });

  return (
    <>
      {shouldRedirect ? (
        <Redirect to="/log-in" />
      ) : (
        <div className={style.contenedor}>
          <div className={style.contenedorForm}>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="primer_nombre"
                  value={form.primer_nombre}
                  onChange={handleInputChange}
                  className={style.input}
                />
                {errors.primer_nombre && (
                <div className={style.errors}>{errors.primer_nombre}</div>
                )}
                <label for="" className={style.label}>
                  Primer nombre
                </label>
              </div>

              <div>
                <input
                  type="text"
                  name="segundo_nombre"
                  value={form.segundo_nombre}
                  onChange={handleInputChange}
                  className={style.input}
                />
                 {errors.segundo_nombre && (
                <div className={style.errors}>{errors.segundo_nombre}</div>
                )}
                <label for="" className={style.label}>
                  Segundo nombre
                </label>
              </div>

              <div>
                <input
                  type="text"
                  name="primer_apellido"
                  value={form.primer_apellido}
                  onChange={handleInputChange}
                  className={style.input}
                />
                 {errors.primer_apellido && (
                <div className={style.errors}>{errors.primer_apellido}</div>
                )}
                <label for="" className={style.label}>
                  Primer apellido
                </label>
              </div>

              <div>
                <input
                  type="text"
                  name="segundo_apellido"
                  value={form.segundo_apellido}
                  onChange={handleInputChange}
                  className={style.input}
                />
                 {errors.segundo_apellido && (
                <div className={style.errors}>{errors.segundo_apellido}</div>
                )}
                <label for="" className={style.label}>
                  Segundo apellido
                </label>
              </div>

              <div>
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
                <label for="" className={style.label}>
                  Dirección
                </label>
              </div>

              <div>
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
                <label for="" className={style.label}>
                  Teléfono
                </label>
              </div>

              <div>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className={style.input}
                />
                 {errors.contraseña && (
                <div className={style.errors}>{errors.email}</div>
                )}
                <label for="" className={style.label}>
                  Email
                </label>
              </div>

              <div>
                <input
                  type="password"
                  name="contraseña"
                  value={form.contraseña}
                  onChange={handleInputChange}
                  className={style.input}
                />
                {errors.contraseña && (
                <div className={style.errors}>{errors.contraseña}</div>
                )}
                <label for="" className={style.label}>
                  Contraseña
                </label>
              </div>

              <div>
                <label for="" className={style.label}>
                  Ciudad
                </label>

                <div>
                  <select
                    name="id_ciudad"
                    onChange={e => handleInputChange(e)}
                    className={style.input}
                  >
                    <option>Selecciona una ciudad</option>
                    {ciudades &&
                      ciudades.map(c => (
                        <option value={c.id_ciudad} primary={c.nombre_ciudad}>
                          {c.nombre_ciudad}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              <div>
                <input
                  type="file"
                  id="imagen"
                  name="imagen"
                  onChange={handleInputChange}
                  className={style.input}
                />
                <label htmlFor="" className={style.label}>
                  Imagen
                </label>
                {/* Mostrar la vista previa de la imagen seleccionada */}
                {form.imagen && (
                  <img
                    className={style.imageFile}
                    src={URL.createObjectURL(form.imagen)}
                    id="imagen"
                  />
                )}
              </div>

              <button type="submit" className={style.button}>
                Registrase
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
