import { useState, useEffect } from "react";
import axios from "axios";
import style from "./FormUpdateProduct.module.css";
import { Redirect } from "react-router-dom";
import {  updateProduct, getAllCategorias, getProductById } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { Image, CloudinaryContext } from "cloudinary-react"; // para guardar las imágenes externamente 
import Cookies from "js-cookie";
import { useParams } from "react-router";



export default function FormUpdateProduct() {
  
  const {categorias} = useSelector(state => state);
  const dispatch = useDispatch();
  const {id_producto} = useParams();
  const session = Cookies.get("commerce_session");
  
  let values = JSON.parse(session)
  
  let comercio = values.dataValues
  





// useEffect(() => {
//     dispatch(getAllCategorias());
//   const chris = dispatch(getProductById(id_producto))

//   }, [dispatch]);
//   const [errors, setErrors] = useState({});

useEffect(() => {
  dispatch(getAllCategorias());
  dispatch(getProductById(id_producto))
    .then((result) => {
      // Aquí puedes acceder a la información devuelta por getProductById
      console.log("resultttttt",result);
    })
    .catch((error) => {
      // Aquí puedes manejar el error en caso de que getProductById falle
      console.error(error);
    });

}, [dispatch, id_producto]);

const [errors, setErrors] = useState({});

  const handleSubmit = async event => {
    event.preventDefault();
  
    // Obtiene los valores del formulario
    const {nombre,
        cantidad,
        descripcion_producto,
        existencia,
        fecha_final,
        fecha_inicial,
        imagen,
        id_categoria_producto,
        valor_normal,
        valor_con_descuento,
        condicion,
    } = form;

    
    // cantidad = parseInt(cantidad);
    // existencia = parseInt(existencia);
    // valor_normal = parseFloat(valor_normal);
    // valor_con_descuento = parseFloat(valor_con_descuento);
    // Realiza las validaciones
    
    
    
    // Si hay errores, los muestra y no continúa con la solicitud
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      console.log("FORME: ", errors)
      // Actualiza el estado de los errores
    } else {
      // Si no hay errores, continúa con el proceso de envío del formulario
      try {
        const filteredData = Object.fromEntries(
          Object.entries(form).filter(([_, value]) => !!value)
        );
        //const salt = bcrypt.genSaltSync(10);
        //const hashedPassword = bcrypt.hashSync(form.password, salt);
        //setForm({ ...form, password: hashedPassword });
        console.log("FORM: ", form)
        dispatch(updateProduct(filteredData))
        //await axios
        //  .put("http://localhost:3001/commerce", form)
        //  .then(res => alert(res.data))
        //  .catch(err => console.log(err.response.data));
        // Cookies.set('commerce_session', JSON.stringify(form), { secure: true, sameSite: 'strict' });

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
    nombre:"auto",
    fecha_inicial:"",
    fecha_final:"",
    descripcion_producto:"",
    cantidad:"",
    existencia:"",
    valor_normal:"",
    valor_con_descuento:"",
    condicion: "",
    id_categoria_producto:"",
    imagen: "",
    id_comercio:comercio.id_comercio,
    id_producto: Number(id_producto)

  });
  const handleBorrar = async (id_producto) => {
    try {
      await axios.put(`http://localhost:3001/delete/${id_producto}`);
    } catch (error) {
      console.log(error);
    }
  };
  

  console.log("formmmmmmmmmmmmmmmmmmmm: ", form)
  return (
    <>
     
     {shouldRedirect ? (
       <Redirect to="/" />
     ) : (

       /* ----------------------- CONTENEDOR GENERAL -----------------------*/
       <div className={style.contenedor}>
       {/* ----------------------- CONTENEDOR FORMULARIO -----------------------*/}
         <div className={style.contenedorForm}>
         <CloudinaryContext cloudName="dfmkjxjsf">
           <form onSubmit={handleSubmit}>
       {/* ----------------------- nombre -----------------------*/}
             <div className={style.nombres}>
             <div className={style.contenedorDiv}>
             <label for="" className={style.label2}>
                 Nombre
               </label>
               <input
                 type="text"
                 name="nombre"
                 value={form.nombre}
                 onChange={handleInputChange}
                 className={style.input2}
               />
               
               {errors.nombre && (
               <div className={style.errors}>{errors.nombre}</div>
               )}
             </div>

       {/* ----------------------- fecha_inicial -----------------------*/}
             <div className={style.contenedorDiv}>
             <label for="" className={style.label2}>
                fecha_inicial
               </label>
               <input
                 type="date"
                 name="fecha_inicial"
                 value={form.fecha_inicial}
                 onChange={handleInputChange}
                 className={style.input2}
               />
                {errors.fecha_inicial && (
               <div className={style.errors}>{errors.fecha_inicial}</div>
               )}
              
                </div>
                </div>

       {/* ----------------------- fecha final -----------------------*/}
       <div className={style.apellidos}>
            <div className={style.contenedorDiv}>
               
             <label for="" className={style.label2}>
                 fecha_final
               </label>
               <input
                 type="date"
                 name="fecha_final"
                 value={form.fecha_final}
                 onChange={handleInputChange}
                 className={style.input2}
               />
                {errors.fecha_final && (
               <div className={style.errors}>{errors.fecha_final}</div>
               )}
             </div>

       {/* ----------------------- descripcion de producto -----------------------*/}
             <div className={style.contenedorDiv}>
             <label for="" className={style.label2}>
             descripcion_producto
               </label>
               <input
                 type="text"
                 name="descripcion_producto"
                 value={form.descripcion_producto}
                 onChange={handleInputChange}
                 className={style.input2}
               />
                {errors.descripcion_producto && (
               <div className={style.errors}>{errors.descripcion_producto}</div>
               )}               
             </div>
             </div>
       {/* ----------------------- EXISTENCIA -----------------------*/}
             <div className={style.contenedorDiv}>
             <label for="" className={style.label}>
                 existencia
               </label>
               <input
                 type="number"
                 name="existencia"
                 value={form.existencia}
                 onChange={handleInputChange}
                 className={style.input}
               />
                {errors.telefono && (
               <div className={style.errors}>{errors.existencia}</div>
               )}
             </div>

       {/* ----------------------- VALOR NORMAL -----------------------*/}
             <div className={style.contenedorDiv}>
             <label for="" className={style.label}>
             valor_normal
               </label>
               <input
                 type="number"
                 name="valor_normal"
                 value={form.valor_normal}
                 onChange={handleInputChange}
                 className={style.input}
               />
                {errors.valor_normal && (
               <div className={style.errors}>{errors.valor_normal}</div>
               )}
             </div>



             <div className={style.contenedorDiv}>
             <label for="" className={style.label}>
             condicion
               </label>
              <select name="condicion" onChange={handleInputChange}  className={style.select}>
                <option value="Nuevo">Nuevo</option>
                <option value="Reacondicionado">Reacondicionado</option>
                <option value="Usado">Usado</option>
              </select>
                {errors.condicion && (
               <div className={style.errors}>{errors.condicion}</div>
               )}
             </div>

       {/* ----------------------- VALOR CON DESCUENTO  -----------------------*/}
             <div className={style.contenedorDiv}>
             <label for="" className={style.label}>
             valor_con_descuento
               </label>
               <input
                 type="number"
                 name="valor_con_descuento"
                 value={form.valor_con_descuento}
                 onChange={handleInputChange}
                 className={style.input}
               />
               {errors.valor_con_descuento && (
               <div className={style.errors}>{errors.valor_con_descuento}</div>
               )}
             </div>

       {/* ----------------------- CIUDAD -----------------------*/}
             <div className={style.contenedorDiv}>
               <label for="" className={style.label}>
               id_categoria_producto
               </label>

               <div>

               {errors.id_categoria_producto && (
               <div className={style.errors}>{errors.id_categoria_producto}</div>
               )}
               <div className={style.contenedorDiv}>
                 <select
                   name="id_categoria_producto"
                   onChange={e => handleInputChange(e)}
                   className={style.select}
                 >
                  <option>Selecciona categoria</option>
                   {categorias &&
                     categorias.map(c => (
                       <option key = {c.id_categoria_producto} value={c.id_categoria_producto} primary={c.nombre_categoria_producto}>
                         {c.nombre_categoria_producto}
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
                Modificar Producto
             </button>
             <button
                    onClick={()=>{handleBorrar(id_producto)} }
                  >
                  borrar
                  </button>
           </form>
           </CloudinaryContext>
         </div>
       </div>
     )}
    
   </>
  );
}