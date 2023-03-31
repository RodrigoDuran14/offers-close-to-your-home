import React,  { useState }  from "react";
import {Link} from "react-router-dom"
import styles from './Login.module.css'
import validate from "./validate"


const Login = (props) => {
  // const [userData, setUserData] = useState({
  //   username: '',
  //   password: '',
  // })
  // const [error, setError] = useState({
  //   username:'',
  //   password: '',
  // })

  // function handleChange(e){
  //   setUserData({
  //     ...userData,
  //     [e.target.name]: e.target.value,
  //   })
  //   setError(
  //     validate({
  //       ...userData,
  //       [e.target.name]: e.target.value,
  //     })
  //   )
  //   console.log(error)
  // }

  // function validateData(){
  //   if (error.hasOwnProperty('username') ||
  //       error.hasOwnProperty('password') ||
  //       error.username === '' || 
  //       error.password === ''){
  //     return false
  //   } else {
  //     return true
  //   }

  // }


  // function handleSubmit(e){
  //   e.preventDefault();
  //   if (validateData()){
  //     props.Log_In(userData)
  //   }
  // }

  return (
    <div className={styles.contenedor}>
      {/* <form>
        <div>
          <h1 className={styles.titulo}>Offers Close to Your Home</h1>
          <div className="tags">
            <label className={styles.label}>Username</label>
            <input
              className={error.username && "warning"}
              type="text"
              name="username"
              placerholder="Enter username"
              onChange={(e) => handleChange(e)}
            ></input>
            <p>{error.username}</p>
          </div>
          <div className="tags">
            <label className="label">Password</label>
            <input
              className="input"
              type="text"
              name="password"
              placerholder="Enter password"
              onChange={(e) => handleChange(e)}
            ></input>
            <p>{error.password}</p>
          </div>
          <Link className="btnLogIn" 
          to={validateData() ? "/home" : "/"}
          >
            <button className="btnLogIn">LogIn</button>
          </Link>
        </div>
      </form> */}
      Login
    </div>
  );
};

export default Login;
