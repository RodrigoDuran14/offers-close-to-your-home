import FormRegister from '../../components/formRegister/FormRegister'
import s from "./Register.module.css"

export default function Register() {


    return (
        <div className={s.contenedor}>
            <div className={s.textos}>
            <h1 className={s.titulo}>Crea tu cuenta</h1>
            <h3 className={s.texto}>Registrate con tus datos en JustOffers y obtén acceso a beneficios exclusivos de nuestros usuarios!</h3>
            </div>
            <div className={s.formulario}>
            <FormRegister />
            </div>
        </div>
    )
}