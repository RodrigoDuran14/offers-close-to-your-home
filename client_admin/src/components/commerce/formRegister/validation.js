const blankSpace = /^\s+$/ // Espacio en blanco
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i // Email válido
const regexPassword = /^(?=.*?[a-z0-9])(?=.*?[a-z0-9]).{6,10}$/ // Password al menos un número
const regexLetters = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/ // Solo letras
const regexAddress = /^\d+\s[A-z]+\s[A-z]+/; // valida la dirección
const regexTelefono = /^[0-9]+$/; // valida solo numeros

export default function validations(values) {
    const errors = {}
      
    if(!values.nombre_comercio) errors.nombre_comercio = 'Campo Requerido'
    if (blankSpace.test(values.nombre_comercio)) errors.nombre_comercio = 'El nombre no puede ser un espacio en blanco'
    if (values.nombre_comercio.length > 51) errors.nombre_comercio = 'Los nombres no deberían sumar más de 50 caracteres'
    if (values.nombre_comercio && !regexLetters.test(values.nombre_comercio)) errors.nombre_comercio = 'Tu nombre no puede contener número ni símbolos'
    if (values.nombre_comercio.length === 1 && values.nombre_comercio.length < 3) errors.nombre_comercio = 'Los nombres no deben tener menos de 3 caracteres'; 

    if(!values.nombre_contacto) errors.nombre_contacto = 'Campo Requerido'
    if (blankSpace.test(values.nombre_contacto)) errors.nombre_contacto = 'El nombre no puede ser un espacio en blanco'
    if (values.nombre_contacto.length > 51) errors.nombre_contacto = 'Los nombres no deberían sumar más de 50 caracteres'
    if (values.nombre_contacto && !regexLetters.test(values.nombre_contacto)) errors.nombre_contacto = 'Tu nombre no puede contener número ni símbolos'
    if (values.nombre_contacto.length === 1 && values.nombre_contacto.length < 3) errors.nombre_contacto = 'Los nombres no deben tener menos de 3 caracteres';

    if(!values.cargo) errors.cargo = 'Campo Requerido'
    if (values.cargo.length > 31 ) errors.cargo = 'El cargo no debería sumar más de 30 caracteres'
    if (values.cargo.length === 1 && values.cargo.length < 3) errors.cargo = 'EL cargo no debe tener menos de 3 caracteres';
    if (values.cargo && !regexLetters.test(values.cargo)) errors.cargo = 'El cargo no puede contener número ni símbolos'  

    if(!values.direccion) errors.direccion = 'Campo Requerido'
    if (blankSpace.test(values.direccion)) errors.direccion = 'La dirección no puede ser un espacio en blanco'
    if(regexAddress.test(values.direccion)) errors.direccion = 'La dirección de tener números y letras'
    if (values.direccion.length > 101) errors.direccion = 'La dirección no debería sumar más de 100 caracteres'

    if(!values.telefono) errors.telefono = 'Campo Requerido'
    if (blankSpace.test(values.telefono)) errors.telefono = 'El número de teléfono no puede ser un espacio en blanco'
    if (values.telefono && values.telefono.length < 9) errors.telefono = 'El teléfono no debería contener menos de 9 caracteres'
    if (values.telefono.length > 25) errors.telefono = 'El telefono no debería sumar más de 25 caracteres'
    if(!regexTelefono.test(values.telefono)) errors.telefono = "El telefono debe contener solo numeros"


    if(!values.email) errors.email = 'Campo Requerido'
    if (values.email && !regexEmail.test(values.email)) errors.email = 'Por favor ingresa un email válido'
    if (blankSpace.test(values.email)) errors.email = 'El email no puede ser un espacio en blanco'
    if (values.email.length > 30) errors.email = 'El email no debería contener más de 30 caracteres'
    
    if (values.password.length < 8) errors.password = 'La contraseña debe tener más de 8 caracteres'
    if (values.password.length > 20) errors.password = 'La contraseña no debería tener más de 20 caracteres'
    if (regexPassword.test(values.password)) errors.password = 'La contraseña debe contener al menos un número'
    if(!values.password) errors.password = 'Campo Requerido'


    if(!values.id_categoria_comercio) errors.id_categoria_comercio = 'Campo Requerido'
    if(!values.id_ciudad) errors.id_ciudad = 'Campo Requerido'

    return errors
}