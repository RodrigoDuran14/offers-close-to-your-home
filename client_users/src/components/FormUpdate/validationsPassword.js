const regexPassword = /^(?=.*?[a-z0-9])(?=.*?[a-z0-9]).{6,10}$/ // Password al menos un número

export default function validations(values) {
    const errors = {}

    if (values.password.length < 8) errors.password = 'La contraseña debe tener más de 8 caracteres'
    if (values.password.length > 20) errors.password = 'La contraseña no debería tener más de 20 caracteres'    
    if (!values.password) errors.password = 'Campo Requerido'
    
    if (!values.confirmPassword) errors.confirmPassword = 'Debes confirmar la contraseña'
    if (!values.password === values.confirmPassword) errors.confirmPassword = 'las contraseñas no son iguales'
     
    return errors
}