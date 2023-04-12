const blankSpace = /^\s+$/ // Espacio en blanco
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i // Email válido
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/ // Password al menos un número
const regexLetters = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/ // Solo letras
const regexAddress = /^\d+\s[A-z]+\s[A-z]+/; // valida la dirección

export default function validations(values) {
    const errors = {}

    if(!values.primer_nombre) errors.primer_nombre = 'Campo Requerido'
    if (blankSpace.test(values.primer_nombre)) errors.primer_nombre = 'El nombre no puede ser un espacio en blanco'
    if (values.primer_nombre.length > 20) errors.primer_nombre = 'Los nombres no deberían sumar más de 20 caracteres'
    if (values.primer_nombre && !regexLetters.test(values.primer_nombre)) errors.primer_nombre = 'Tu nombre no puede contener número ni símbolos'
    if (values.primer_nombre.length === 1 && values.primer_nombre.length < 3) errors.primer_nombre = 'Los nombres no deben tener menos de 3 caracteres'; 

    if (values.segundo_nombre.length > 20) errors.segundo_nombre = 'Los nombres no deberían sumar más de 20 caracteres'
    if (values.segundo_nombre.length === 1 && values.segundo_nombre.length < 3) errors.segundo_nombre = 'Los nombres no deben tener menos de 3 caracteres';
    if (values.segundo_nombre && !regexLetters.test(values.segundo_nombre)) errors.segundo_nombre = 'Tu nombre no puede contener número ni símbolos' 

    if(!values.primer_apellido) errors.primer_apellido = 'Campo Requerido'
    if (blankSpace.test(values.primer_apellido)) errors.primer_apellido = 'El apellidos no puede ser un espacio en blanco'
    if (values.primer_apellido.length > 20) errors.primer_apellido = 'Los apellidos no deberían sumar más de 20 caracteres'
    if (values.primer_apellido && !regexLetters.test(values.primer_apellido)) errors.primer_apellido = 'Tu apellido no puede contener número ni símbolos'
    if (values.primer_apellido.length === 1 && values.primer_apellido.length < 3) errors.primer_apellido = 'Los apellidos no deben tener menos de 3 caracteres';

    if (values.segundo_apellido.length > 20 ) errors.segundo_apellido = 'Los apellidos no deberían sumar más de 20 caracteres'
    if (values.segundo_apellido.length === 1 && values.segundo_apellido.length < 3) errors.segundo_apellido = 'Los apellidos no deben tener menos de 3 caracteres';
    if (values.segundo_apellido && !regexLetters.test(values.segundo_apellido)) errors.segundo_apellido = 'Tu apellido no puede contener número ni símbolos'  

    if(!values.direccion) errors.direccion = 'Campo Requerido'
    if (blankSpace.test(values.direccion)) errors.direccion = 'La dirección no puede ser un espacio en blanco'
    if(regexAddress.test(values.direccion)) errors.direccion = 'La dirección de tener números y letras'
    
    if(!values.telefono) errors.telefono = 'Campo Requerido'
    if (blankSpace.test(values.telefono)) errors.telefono = 'El número de teléfono no puede ser un espacio en blanco'
    if (values.telefono && values.telefono.length < 9) errors.telefono = 'El teléfono no debería contener menos de 9 caracteres'

    if(!values.email) errors.email = 'Campo Requerido'
    if (values.email && !regexEmail.test(values.email)) errors.email = 'Por favor ingresa un email válido'
    if (blankSpace.test(values.email)) errors.email = 'El email no puede ser un espacio en blanco'
    if (values.email.length > 30) errors.email = 'El email no debería contener más de 30 caracteres'
    
    if (values.contraseña.length < 8) errors.contraseña = 'La contraseña debe tener más de 8 caracteres'
    if (values.contraseña.length > 20) errors.contraseña = 'La contraseña no debería tener más de 20 caracteres'
    if (!regexPassword.test(values.contraseña)) errors.contraseña = 'La contraseña debe contener al menos un número'
    if(!values.contraseña) errors.contraseña = 'Campo Requerido'

    return errors
}