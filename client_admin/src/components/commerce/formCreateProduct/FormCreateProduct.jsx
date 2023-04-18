import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import s from "./FormProduct.module.css";
import { Redirect } from "react-router-dom";
import validations from "./validation";
import bcrypt from "bcryptjs"; // librería para encriptcar contraseñas
import { getProductCategory } from "../../../redux/actions";
import { CloudinaryContext } from "cloudinary-react"; // para guardar las imágenes externamente
import swal from "sweetalert";

export default function FormRegister() {
  const { productCategory } = useSelector((state) => state);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductCategory());
  }, [getProductCategory]);

  const categorias = productCategory.map((e) => e.nombre_categoria_producto);

  console.log(categorias);

  return (
    <>
      {shouldRedirect ? (
        <Redirect to="/login" />
      ) : (
        /* ----------------------- CONTENEDOR GENERAL -----------------------*/
        <div className={s.contenedor}>
          {/* ----------------------- CONTENEDOR FORMULARIO -----------------------*/}
          <div className={s.contenedorForm}>
            <CloudinaryContext cloudName="dfmkjxjsf">
              <form
              // onSubmit={handleSubmit}
              >
                {/* ----------------------- NOMBRE DEL PRODUCTO -----------------------*/}
                <div className={s.contenedorDiv}>
                  <label for="" className={s.label}>
                    Nombre del producto
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    // value={form.nombre_comercio}
                    // onChange={handleInputChange}
                    className={s.input}
                  />
                </div>
                {/* ----------------------- CATEGORIA -----------------------*/}
                <div className={s.contenedorDiv}>
                  <label htmlFor="" className={s.label}>
                    Categoria
                  </label>
                  <select
                    name="categoria"
                    // onChange={e => handleInputChange(e)}
                    className={s.select}
                  >
                    <option>Selecciona una categoria</option>
                    {categorias.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* ----------------------- FECHAS INICIAL Y FINAL -----------------------*/}
                <div className={s.contenedorDiv}>
                  <label for="" className={s.label}>
                  Vigencia de la oferta
                  </label>
                  <input
                    type="date"
                    name="fecha_inicial"
                    // value={form.cargo}
                    // onChange={handleInputChange}
                    className={s.input}
                  />                  
                  <input
                  type="date"
                  name="fecha_final"
                  // value={form.cargo}
                  // onChange={handleInputChange}
                  className={s.input}
                />
                </div>
                {/* ----------------------- CANTIDAD -----------------------*/}
                <div className={s.contenedorDiv}>
                  <label for="" className={s.label}>
                   Cantidad
                  </label>
                  <input
                    type="number"
                    name="cantidad"
                    // value={form.direccion}
                    // onChange={handleInputChange}
                    className={s.input}
                  />
                </div>
                {/* ----------------------- EXISTENCIA -----------------------*/}
                <div className={s.contenedorDiv}>
                  <label for="" className={s.label}>
                    Existencia
                  </label>
                  <input
                    type="number"
                    name="existencia"
                    // value={form.telefono}
                    // onChange={handleInputChange}
                    className={s.input}
                  />
                </div>
                {/* ----------------------- VALOR NORMAL -----------------------*/}
                <div className={s.contenedorDiv}>
                  <label for="" className={s.label}>
                    Valor del producto
                  </label>
                  <input
                    type="number"
                    name="valor_normal"
                    // value={form.email}
                    // onChange={handleInputChange}
                    className={s.input}
                  />
                </div>
                {/* ----------------------- VALOR CON DESCUENTO -----------------------*/}
                <div className={s.contenedorDiv}>
                  <label for="" className={s.label}>
                    Valor con descuento
                  </label>
                  <input
                    type="number"
                    name="valor_con_descuento"
                    // value={form.password}
                    // onChange={handleInputChange}
                    className={s.input}
                  />
                </div>
                {/* ----------------------- ESTADO DEL PRODUCTO -----------------------*/}
                <div className={s.contenedorDiv}>
                  <label for="" className={s.label}>
                    Estado del producto
                  </label>
                  <div>
                    <div className={s.contenedorDiv}>
                    <input
                    type="number"
                    name="valor_con_descuento"
                    // value={form.password}
                    // onChange={handleInputChange}
                    className={s.input}
                  />
                    </div>
                  </div>
                </div>
                {/* ----------------------- CATEGORIA -----------------------*/}
                <div className={s.contenedorDiv}>
                  <label for="" className={s.label}>
                    Categoria
                  </label>
                  <div>
                    <div className={s.contenedorDiv}></div>
                  </div>
                </div>
                {/* ----------------------- IMAGEN -----------------------*/}
                <div className={s.contenedorDiv}>
                  <label htmlFor="" className={s.label}>
                    Imagen
                  </label>
                  <input
                    type="file"
                    id="imagen"
                    name="imagen"
                    // onChange={handleInputChange}
                    className={s.input}
                  />
                  <label htmlFor="imagen" className={s.label}>
                    Imagen
                  </label>
                  <div></div>
                  {/* ----------------------- VISTA PREVIA IMAGEN -----------------------*/}
                  {/* {form.imagen && (
                  <img
                    className={s.imageFile}
                    src={form.imagen}
                    id="imagen"
                    alt="foto perfil"
                  />
                )} */}
                </div>

                <button type="submit" className={s.button}>
                  Registrarse
                </button>
              </form>
            </CloudinaryContext>
          </div>
        </div>
      )}
    </>
  );
}
