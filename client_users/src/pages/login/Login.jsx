import React,  { useState }  from "react";
import {Link} from "react-router-dom"
import styles from './Login.module.css'
import FormLogin from '../../components/formLogin/FormLogin'


const Login = (props) => {
  return (
    <div>
      Login
      <h1>JustOffers</h1>
      <FormLogin />
    </div>
  );
};

export default Login;
