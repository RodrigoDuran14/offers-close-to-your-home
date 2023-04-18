import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../redux/actions";
import { useHistory } from "react-router-dom";
import validation from "./validation";
import swal from "sweetalert";
import axios from "axios";
import styles from "./FormProduct.module.css";

export default function FormCreateProduct() {
  const [image, setImage] = useState("");

  const history = useHistory();
  const navigateTo = (url) => {
    history.push(url);
  };
  const dispatch = useDispatch();

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "just_offers");
    await axios
      .post("link/image/upload", data)
      .then((response) => setImage(response.data.secure_url));
  };

  const handleSubmit = (values) => {
    let formData = { ...values, imagen: image };
    console.log(formData);
    dispatch(createProduct(formData));
    swal({
      title: "Oferta subida correctamente!",
      text: "Podrás encontrar tu oferta entre las demás en el inicio de nuestra página",
      icon: "success",
      button: "Ir al inicio",
    });
    navigateTo("/home");
  };
  return (
    <div className={styles.contenedor}>
        <div className={styles.titulo}>
            <h1>AGREGAR PRODUCTOS A TU STOCK</h1>
        </div>
      <Formik
        initialValues={{
          nombre: "",
          fecha_inicial: "",
          fecha_final: "",
          descripcion_producto: "",
          cantidad: "",
          existencia: 0,
          valor_normal: 0,
          valor_con_descuento: 0,
          imagen: "",
          condicion: "",
        }}
        validate={validation}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          Nombre del producto
          <Field name="nombre" type="text" placeholder="Nombre" />
          <ErrorMessage name="nombre" />
          Cateogria
          <Field name="categoria" as="select">
  <option value="">Selecciona una categoría</option>
 
</Field>
          Fecha Inicial:
          <Field name="fecha_inicial" type="date" />
          <ErrorMessage name="fecha_inicial" />
          Fecha final:
          <Field name="fecha_final" type="date" />
          <ErrorMessage name="fecha_final" />
          Cantidad:
          <Field name="cantidad" type="text" />
          <ErrorMessage name="cantidad" />
          Existencia:
          <Field name="existencia" type="number" />
          <ErrorMessage name="existencia" />
          Valor del producto:
          <Field name="valor_normal" type="number" />
          <ErrorMessage name="valor_normal" />
          Valor con descuento:
          <Field name="valor_con_descuento" type="number" />
          <ErrorMessage name="valor_con_descuento" />
          Estado del producto:
          Cateogria
          <Field name="estado" as="select">
  <option value="">Selecciona estado</option>
  <option value="alimentos">Nuevo</option>
  <option value="ropa">Usasdo</option>
  <option value="tecnologia">Reacondicionado</option>
</Field>
          Agregar una imagen:
          <Field name="imagen" type="file" onChange={handleImage} />
          Descripcion del producto:
          <Field
            name="descripcion_producto"
            as="textarea"
            placeholder="Descripción"
          />
          <ErrorMessage name="descripcion_producto" />
          <button type="submit">Crear producto</button>
        </Form>
      </Formik>
    </div>
  );
}
