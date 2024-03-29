import "./App.css";
import { HashRouter, Route, Switch, useLocation, Redirect } from "react-router-dom";
import Home from "./pages/commerce/home/Home";
import NavBar from "./components/commerce/navBar/NavBar";
import Login from "./pages/commerce/login/Login";
import Register from "./pages/commerce/register/Register";
import Account from "./pages/commerce/account/Account";
import FormUpdate from "./components/commerce/formUpdate/FormUpdate";
import FormUpdateProduct from "./components/commerce/formUpdateProduct/FormUpdateProduct";
import HomeAdmin from "./pages/admin/HomeAdmin";
import CreateProduct from "./pages/commerce/createProduct/CreateProduct";
import Comercios from "./components/admin/Comercios/Comercios";
import Usuarios from "./components/admin/Usuarios/Usuarios";
import About from "./pages/commerce/about/About";


function App() {
  const location = useLocation();

  return (
    <div className="App">
        {location?.pathname == "/login" ? null : <NavBar />}
          <Route exact path="/" component={Login} />;
          <Route exact path="/home" component={Home} />;
          <Route exact path="/login" component={Login} />
          <Route exact path="/registrar-comercio" component={Register} />
          <Route exact path="/producto" component={CreateProduct} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/update" component={FormUpdate} />
          <Route exact path="/product/:id_producto" component={FormUpdateProduct} />
          <Route exact path="/admin" component={HomeAdmin} />
          <Route exact path="/admin/comercios" component={Comercios} />
          <Route exact path="/admin/usuarios" component={Usuarios} />
          <Route exact path="/about" component={About} />

    </div>
  );
}

export default App;
