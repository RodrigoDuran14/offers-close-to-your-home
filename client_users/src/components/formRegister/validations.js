const blankSpace = /^\s+$/ // Espacio en blanco
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i // Email válido
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/ // Password al menos un número
const regexLetters = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/ // Solo letras


export default function validations(values) {
    const errors = {}

    if(!values.nombre_usuario) errors.nombre_usuario = 'Field required'
    if (blankSpace.test(values.nombre_usuario)) errors.nombre_usuario = 'El nombre no puede ser un espacio en blanco'
    if (values.nombre_usuario.length > 50) errors.nombre_usuario = 'Los nombres no deberían sumar más de 50 caracteres'
    if (!regexLetters.test(values.nombre_usuario)) errors.nombre_usuario = 'Tu nombre no puede contener número ni símbolos'

    if(!values.direccion) errors.direccion = 'Field required'
    if (blankSpace.test(values.direccion)) errors.direccion = 'La dirección no puede ser un espacio en blanco'
    if (!regexPassword.test(values.direccion)) errors.direccion = 'Por favor introduce una dirección válida'
    
    if(!values.telefono) errors.telefono = 'Field required'
    if (blankSpace.test(values.email)) errors.email = 'El número de teléfono no puede ser un espacio en blanco'

        if(!values.email) errors.email = 'Field required'
    if (!regexEmail.test(values.email)) errors.email = 'Por favor ingresa un email válido'
    if (blankSpace.test(values.email)) errors.email = 'El email no puede ser un espacio en blanco'
    if (values.email.length > 80) errors.email = 'El email no debería contener más de 80 caracteres'
    
    if (values.contraseña.length < 8) errors.contraseña = 'La contraseña debe tener más de 8 caracteres'
    if (values.contraseña.length > 30) errors.contraseña = 'La contraseña no debería tener más de 30 caracteres'
    if (!regexPassword.test(values.contraseña)) errors.contraseña = 'La contraseña debe contener al menos un número'
    if(!values.contraseña) errors.contraseña = 'Field required'

    return errors
}