import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import styles from "./ForgotPassword.module.css";
import { Redirect } from "react-router-dom";
import { updatePassword } from "../../../redux/actions";


const ForgotPasword = () => {
  const session = Cookies.get("commerce_session");
  console.log(session);
  let values = JSON.parse(session);
  console.log(values)
  let id_comercio = values;
  console.log(id_comercio.dataValues.id_comercio);

const dispatch = useDispatch();

useEffect(() => {
  setForm({id_comercio: id_comercio,
    password: "",
    newPassword: "",
    newPassword2: "",})
}, []);

const [shouldRedirect, setShouldRedirect] = useState(false);


  const [form, setForm] = useState({
    password: "",
    newPassword: "",
    newPassword2: "",
  });

  const handleSubmit = () => {
    const { id_comercio, password, newPassword, newPassword2 } = form;
    console.log(form)
    dispatch(updatePassword(form))
    setShouldRedirect(<Redirect to="/login"/>) 
  };

  const handleChange = (event) => {
    setForm({[event.target.name]:event.target.value})
  };

  return (
    <div className={styles.container}>
      <form onSubmit={e=>{handleSubmit(e)}}>
        <label>Contraseña actual</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={e=>{handleChange(e)}}
        />
        <label>Nueva Contraseña</label>
        <input
          type="password"
          name="newPassword"
          value={form.newPassword}
          onChange={e=>{handleChange(e)}}
        />
        <label>Repita nueva contraseña</label>
        <input
          type="password"
          name="newPassword2"
          value={form.newPassword2}
          onChange={e=>{handleChange(e)}}
        />
        <button type="submit">Cambiar contraseña</button>
      </form>
    </div>
  );
};

export default ForgotPasword;
