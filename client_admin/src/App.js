import "./App.css";
import { HashRouter, Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/commerce/home/Home";
import NavBar from "./components/commerce/navBar/NavBar";
import MisVentas from "./pages/commerce/MisVentas/MisVentas";
import Login from "./pages/commerce/login/Login";
import Register from "./pages/commerce/register/Register";
import Account from "./pages/commerce/account/Account";
import FormUpdate from "./components/commerce/formUpdate/FormUpdate"
import FormUpdateProduct from "./components/commerce/formUpdateProduct/FormUpdateProduct";
import HomeAdmin from "./pages/admin/HomeAdmin";
import CreateProduct from "./pages/commerce/createProduct/CreateProduct";
import Comercios from "./components/admin/Comercios/Comercios";
import Usuarios from "./components/admin/Usuarios/Usuarios";
import DetailUser from "./components/admin/Usuarios/detailUser/DetailUser";
import DetailCommerce from "./components/admin/Comercios/DetailCommerce/DetailCommerce";


function App() {
  const location = useLocation();

  return (
    <div className="App">
      <HashRouter>
        {location?.pathname == "/login" ? null : <NavBar />}
        <Switch>
          <Route exact path="/" component={Home} />;
          <Route exact path="/misventas" component={MisVentas} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registrar-comercio" component={Register} />
          <Route exact path="/producto" component={CreateProduct} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/update" component={FormUpdate} />
           <Route exact path= "/product/:id_producto" component={FormUpdateProduct}/>
           <Route exact path="/admin" component={HomeAdmin}/>
           <Route exact path="/admin/comercios" component={Comercios}/>
           <Route exact path="/admin/usuarios" component={Usuarios}/>
          <Route exact path="/admin/usuarioDetail/:id_usuario" component={DetailUser} />
          <Route exact path="/admin/comercioDetail/:id_comercio" component={DetailCommerce} />
           
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
