export default function validation(values) {
    const errors = {}

    if (!values.nombre) errors.nombre = 'Campo requerido'
    if (!values.descripcion_producto) errors.descripcion_producto = 'Campo requerido'
    if (!values.fecha_inicial) errors.fecha_inicial = 'Campo requerido'
    if (!values.fecha_final) errors.fecha_final = 'Campo requerido'
    if (!values.cantidad) errors.cantidad = 'Campo requerido'
    if (!values.existencia) errors.existencia = 'Campo requerido'
    if (!values.valor) errors.valor = 'Campo requerido'

    return errors
}