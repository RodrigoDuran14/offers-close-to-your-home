const regexTelefono = /^[0-9]+$/; // valida solo numeros
const regexLetters = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ0-9]+$/ // Solo letras
const blankSpace = /^\s+$/ // Espacio en blanco



export default function validation(values) {
    const errors = {}

    if (!values.nombre) errors.nombre = 'Campo requerido'
    if (values.nombre.length > 51) errors.nombre = 'Los nombres no deberían sumar más de 50 caracteres'
    if (values.nombre && !regexLetters.test(values.nombre)) errors.nombre = 'El nombre puede contener solo letras y numeros'
    if (values.nombre.length === 1 && values.nombre.length < 3) errors.nombre = 'Los nombres no deben tener menos de 3 caracteres'; 

    if (!values.descripcion_producto) errors.descripcion_producto = 'Campo requerido'
    if (!values.fecha_inicial) errors.fecha_inicial = 'Campo requerido'
    if (!values.fecha_final) errors.fecha_final = 'Campo requerido'
    if (!values.cantidad) errors.cantidad = 'Campo requerido'
    if (!values.existencia) errors.existencia = 'Campo requerido'
    if (!values.valor) errors.valor = 'Campo requerido'

    return errors
}