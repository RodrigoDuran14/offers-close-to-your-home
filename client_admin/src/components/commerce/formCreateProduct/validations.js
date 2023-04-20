export default function validation(values) {
    const errors = {}

    if (!values.nombre) errors.nombre = 'Campo requerido'
    // if (!values.cantidad) errors.cantidad = 'Campo requerido'
    if (!values.descripcion_producto) errors.descripcion_producto = 'Campo requerido'
    if (!values.existencia) errors.existencia = 'Campo requerido'
    if (!values.fecha_final) errors.fecha_final = 'Campo requerido'
    if (!values.fecha_inicial) errors.fecha_inicial = 'Campo requerido'
    if (!values.imagen) errors.imagen = 'Campo requerido'
    if (!values.valor_normal) errors.valor_normal = 'Campo requerido'
    if (!values.valor_con_descuento) errors.valor_con_descuento = 'Campo requerido'
    if(!values.id_categoria_producto) errors.id_categoria_producto ='Campo requerido'
    if (!values.condicion) errors.condicion= 'Debe igresar entre: Nuevo, Usado, Reacondicionado'    
    // if (values.cantidad === 0) {
    //     errors.cantidad = "Por favor ingrese la cantidad";
    // }
    if (values.valor_normal === 0) {
        errors.valor_normal = "Por favor ingrese el valor del producto";
    }
    if (values.existencia === 0) {
        errors.existencia = "Por favor ingrese la existencia";
    }
    return errors
}

