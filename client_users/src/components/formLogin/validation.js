export default function validation(values) {
    const errors = {}

    if(!values.email) errors.email = 'Field required'
    if(!values.contraseña) errors.password = 'Field required'

    return errors
}