import React from "react";
import FormCreateProduct from "../../../components/commerce/formCreateProduct/FormCreateProduct";
//Estilos
import s from "./CreateProduct.module.css"


const CreateProduct = () => {

    return(
        <div className={s.contenedor}>
        <div className={s.titulo}>
            <h1>AGREGAR PRODUCTOS A TU STOCK</h1>
        </div>
        <div className={s.aux}>
            <div className={s.formulario}>
                <FormCreateProduct/>
            </div>
            <div className={s.vistaPrevia}>
                <h1>Vista Previa</h1>
            </div>
            </div>
        </div>
    )

}

export default CreateProduct