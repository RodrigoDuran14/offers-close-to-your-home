import React from "react";
import FormLogin from '../../../components/commerce/formLogin/FormLogin'
import s from './Login.module.css'
import FondoVerde from "../../../assets/images/Fondo3.png"
import Fondo2 from "../../../assets/images/Fondo2.png"
import Logo from "../../../assets/images/SoloTextoNegro.png"


const Login = () => {

  const fondo1 = FondoVerde;
  const fondo2 = Fondo2;
  const logo = Logo
  return (
    <div className={s.container}>
        <img className={s.logo} src={logo} alt="texto del logo"/>
      <div className={s.formulario}>
      {/* <h1 >JustOffers</h1>       */}
      <FormLogin /> 
      </div>
      <img className={s.fondo1} src={fondo1} alt = "fondo tipo wave"/>
      <img className={s.fondo2} src={fondo2} alt = "fondo tipo wave"/>
    </div>
  );
};

export default Login;