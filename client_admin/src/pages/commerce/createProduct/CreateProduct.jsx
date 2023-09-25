import React from "react";
import FormCreateProduct from "../../../components/commerce/formCreateProduct/FormCreateProduct";
//Estilos
import s from "./CreateProduct.module.css"


const CreateProduct = () => {

    return (
        <div className={s.contenedor}>
            <div className={s.titulo}>
                <h1>Publica una nueva <span style={{ color: 'var(--green-color)' }}>oferta</span> ahora</h1>
            </div>
            <div className={s.aux}>
                <div style={{ padding: '10px', width: '50%' }}>
                    <FormCreateProduct />
                </div>
                <div className={s.texto}>
                    <p>¿Estás buscando un lugar donde promocionar tus productos y llegar a más clientes potenciales? ¡No busques más! En Just<span style={{ color: 'var(--green-color)' }}>Offers</span>, te ofrecemos la oportunidad de hacer crecer tu negocio y aumentar tus ventas de manera <strong>fácil</strong> y <strong>efectiva</strong>.</p> <br /> <p>Publica tus ofertas en nuestro sitio y llega a una audiencia amplia y diversa que busca justo lo que <strong>tú ofreces</strong>. Además, nuestro equipo de expertos te brindará soporte en todo momento para ayudarte a maximizar tus ventas y lograr el <strong>éxito</strong> que mereces. ¿Qué esperas? <br /> <span style={{ color: 'var(--green-color)' }}>¡</span>Únete a nuestra comunidad de vendedores exitosos hoy mismo<span style={{ color: 'var(--green-color)' }}>!</span></p>
                </div>
            </div>
        </div>
    )

}

export default CreateProduct