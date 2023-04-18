import "./App.css";
import { HashRouter, Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/commerce/home/Home";
import NavBar from "./components/commerce/navBar/NavBar";
import MisVentas from "./pages/commerce/MisVentas/MisVentas";
import Login from "./pages/commerce/login/Login";
import Register from "./pages/commerce/register/Register";
import Account from "./pages/commerce/account/Account";
<<<<<<< HEAD
import FormUpdate from "./components/commerce/formUpdate/FormUpdate"
import Products from "./components/commerce/products/Products";
=======
import FormUpdate from "./components/commerce/formUpdate/FormUpdate";
import CreateProduct from "./pages/commerce/createProduct/CreateProduct";
>>>>>>> 1c79b26fc7066330bcc06c114bf79fb51174844e

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
<<<<<<< HEAD
          <Route exact path="/misProductos" component={Products} />

=======
>>>>>>> 1c79b26fc7066330bcc06c114bf79fb51174844e
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
