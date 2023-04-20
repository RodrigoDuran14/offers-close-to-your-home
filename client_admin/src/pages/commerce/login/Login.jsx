import React from "react";
import FormLogin from '../../../components/commerce/formLogin/FormLogin'
import FondoVerde from "../../../assets/images/Fondo3.png"
import Fondo2 from "../../../assets/images/Fondo2.png"
import Logo from "../../../assets/images/LogoCompleto.png"
import s from './Login.module.css'


const Login = () => {
  const logo = Logo

  return (
    <div className={s.container}>
      <img className={s.logo} src={logo} alt="texto del logo" />
      <h3>Panel de vendedores</h3>
      <div className={s.formulario}>
        <FormLogin />
      </div>
      <p style={{ padding: '20px' }}>Bienvenido a Just Offers, te deseamos buenas ventas!</p>
    </div>
  );
};

export default Login;