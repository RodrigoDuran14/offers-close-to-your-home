import React, { useState } from "react";
import FormLogin from '../../components/formLogin/FormLogin'
import s from './Login.module.css'


const Login = () => {
  return (
    <div className={s.container}>
      <h1>JustOffers</h1>      
      <FormLogin />
    </div>
  );
};

export default Login;
